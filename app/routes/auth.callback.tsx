import { useEffect } from "react";
import { supabase, checkUserRole } from "~/utils/supabase";

export default function AuthCallback() {
  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('=== AUTH CALLBACK STARTED ===');
        console.log('Current URL:', window.location.href);
        console.log('Hash:', window.location.hash);
        console.log('Search:', window.location.search);
        
        // Supabase automatically handles the OAuth callback, just get the session
        const { data, error } = await supabase.auth.getSession();
        
        console.log('Session data:', data);
        console.log('Session error:', error);
        
        if (error) {
          console.error('Auth session error:', error);
          window.location.href = '/login?error=auth_failed';
          return;
        }

        if (data.session?.user) {
          const user = data.session.user;
          const userEmail = user.email;
          
          console.log('User found:', { email: userEmail, user });
          
          if (!userEmail) {
            console.error('No email found in session');
            window.location.href = '/login?error=no_email';
            return;
          }

          // Check if user email is allowed and get their role
          console.log('Checking user role for:', userEmail);
          const roleCheck = await checkUserRole(userEmail);
          
          console.log('Role check result:', roleCheck);
          
          if (!roleCheck.isAllowed) {
            console.error('Email not allowed:', roleCheck.error);
            await supabase.auth.signOut();
            window.location.href = '/login?error=not_allowed';
            return;
          }

          console.log('User role verified:', roleCheck.role);
          
          // Store authentication info with verified role
          sessionStorage.setItem('isAuthenticated', 'true');
          sessionStorage.setItem('userEmail', userEmail);
          sessionStorage.setItem('userType', roleCheck.role || 'student');
          sessionStorage.setItem('userName', user.user_metadata?.full_name || userEmail.split('@')[0] || 'User');
          
          console.log('Session storage set successfully');
          
          // Redirect based on role
          const redirectPath = roleCheck.role === 'staff' ? '/admin/dashboard' : '/student/dashboard';
          console.log('Redirecting to:', redirectPath);
          
          // Use a longer delay and force reload to ensure proper redirect
          setTimeout(() => {
            console.log('Executing redirect now...');
            window.location.replace(redirectPath);
          }, 500);
          return;
        } else {
          console.log('No session found, redirecting to login');
          window.location.href = '/login';
        }
      } catch (err) {
        console.error('Unexpected error during auth callback:', err);
        window.location.href = '/login?error=unexpected_error';
      }
    };

    // Add a small delay to ensure the page is fully loaded
    setTimeout(() => {
      handleAuthCallback();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Signing you in...</h2>
        <p className="text-gray-600">Please wait while we complete your Gmail authentication.</p>
      </div>
    </div>
  );
}