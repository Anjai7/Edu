// Database connection test script
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing environment variables:');
  console.error('SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
  console.error('SUPABASE_ANON_KEY:', supabaseKey ? '✅ Set' : '❌ Missing');
  process.exit(1);
}

console.log('🔗 Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseKey.substring(0, 20) + '...');

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    // Test 1: Basic connection
    console.log('\n📡 Test 1: Basic connection test...');
    const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Connection failed:', error.message);
      return false;
    }
    
    console.log('✅ Connection successful!');
    console.log('📊 Users table accessible');
    
    // Test 2: Check if tables exist
    console.log('\n📋 Test 2: Checking table structure...');
    const tables = ['users', 'assignments', 'attendance', 'leaderboard', 'classes'];
    
    for (const table of tables) {
      try {
        const { error: tableError } = await supabase.from(table).select('*').limit(1);
        if (tableError) {
          console.log(`❌ Table '${table}': ${tableError.message}`);
        } else {
          console.log(`✅ Table '${table}': accessible`);
        }
      } catch (err) {
        console.log(`❌ Table '${table}': ${err.message}`);
      }
    }
    
    // Test 3: Try to read data
    console.log('\n📖 Test 3: Reading sample data...');
    const { data: sampleUsers, error: readError } = await supabase
      .from('users')
      .select('*')
      .limit(3);
      
    if (readError) {
      console.log('❌ Data read failed:', readError.message);
    } else {
      console.log('✅ Data read successful!');
      console.log(`📈 Found ${sampleUsers?.length || 0} sample users`);
    }
    
    return true;
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return false;
  }
}

testConnection().then((success) => {
  if (success) {
    console.log('\n🎉 Database connection test completed successfully!');
  } else {
    console.log('\n💥 Database connection test failed!');
    process.exit(1);
  }
});
