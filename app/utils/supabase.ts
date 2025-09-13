import { createClient } from '@supabase/supabase-js';

// Support server + client env (in root we inject window.ENV)
const getEnv = () => {
  if (typeof window !== 'undefined' && (window as any).ENV) {
    return {
      SUPABASE_URL: (window as any).ENV.SUPABASE_URL,
      SUPABASE_ANON_KEY: (window as any).ENV.SUPABASE_ANON_KEY,
    };
  }
  return {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
  };
};

const { SUPABASE_URL, SUPABASE_ANON_KEY } = getEnv();

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Client-side supabase instance
export const createSupabaseClient = () =>
  createClient(getEnv().SUPABASE_URL, getEnv().SUPABASE_ANON_KEY);

// Auth helpers
export const signInWithGoogle = async () => {
  console.log('=== SIGN IN WITH GOOGLE ===');
  console.log('Supabase client:', !!supabase);
  console.log('Environment check:', {
    SUPABASE_URL: getEnv().SUPABASE_URL ? 'Set' : 'Missing',
    SUPABASE_ANON_KEY: getEnv().SUPABASE_ANON_KEY ? 'Set' : 'Missing'
  });
  
  try {
    const result = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: typeof window !== 'undefined' ? window.location.origin + '/auth/callback' : undefined
      }
    });
    
    console.log('OAuth signIn result:', result);
    return result;
  } catch (error) {
    console.error('OAuth signIn error:', error);
    throw error;
  }
};

export const getCurrentSession = async () => supabase.auth.getSession();
export const signOut = async () => supabase.auth.signOut();

// Email verification and role checking
export const checkUserRole = async (email: string) => {
  console.log('=== CHECKING USER ROLE ===');
  console.log('Email to check:', email);
  console.log('Supabase client:', !!supabase);
  
  try {
    // First, test basic connectivity
    const { data: testData, error: testError } = await supabase
      .from('allowed_emails')
      .select('count', { count: 'exact', head: true });
    
    console.log('Database connectivity test:', { testData, testError });
    
    // Now check the specific user
    const { data, error } = await supabase
      .from('allowed_emails')
      .select('email, role, status')
      .eq('email', email)
      .eq('status', 'active')
      .single();

    console.log('Database query result:', { data, error });
    console.log('Query details:', {
      table: 'allowed_emails',
      email: email,
      status: 'active',
      queryType: 'single'
    });

    if (error) {
      console.error('Database error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      
      // If single() fails, try without single() to see if record exists
      const { data: allData, error: allError } = await supabase
        .from('allowed_emails')
        .select('email, role, status')
        .eq('email', email);
      
      console.log('Fallback query (without single):', { allData, allError });
    }

    if (error || !data) {
      console.log('User not found in allowed_emails or query error');
      return { 
        isAllowed: false, 
        role: null, 
        error: error?.message || 'Email not found in allowed list' 
      };
    }

    console.log('User found and allowed:', data);
    return { isAllowed: true, role: data.role, error: null };
  } catch (err) {
    console.error('Unexpected error in checkUserRole:', err);
    return { 
      isAllowed: false, 
      role: null, 
      error: 'Database connection error' 
    };
  }
};

export const isEmailAllowed = async (email: string): Promise<boolean> => {
  const result = await checkUserRole(email);
  return result.isAllowed;
};

// Test function to debug database access
export const testDatabaseConnection = async () => {
  console.log('=== TESTING DATABASE CONNECTION ===');
  
  try {
    // Test 1: Basic connection
    const { data: allEmails, error: allError } = await supabase
      .from('allowed_emails')
      .select('*');
    
    console.log('All emails in database:', { allEmails, allError });
    
    // Test 2: Specific email lookup
    const { data: specificEmail, error: specificError } = await supabase
      .from('allowed_emails')
      .select('*')
      .eq('email', 'anjai0600@gmail.com');
    
    console.log('Specific email lookup:', { specificEmail, specificError });
    
    return { success: !allError, data: allEmails, error: allError };
  } catch (err) {
    console.error('Database test failed:', err);
    return { success: false, data: null, error: err };
  }
};

// Typescript global augmentation for window.ENV
declare global {
  interface Window {
    ENV?: {
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
    };
  }
}
