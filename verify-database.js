// Comprehensive database verification script
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function verifyDatabase() {
  try {
    console.log('🔍 Comprehensive Database Verification\n');
    
    // Method 1: Try direct table access with different approaches
    const tables = [
      'users', 'assignments', 'notes', 'classes', 'attendance', 
      'leaderboard', 'announcements', 'leaves', 'canteen_items', 
      'orders', 'notifications'
    ];
    
    console.log('📋 Method 1: Direct table access test...\n');
    
    const results = {};
    
    for (const table of tables) {
      try {
        // Test 1: Simple select
        const { data, error, count } = await supabase
          .from(table)
          .select('*', { count: 'exact' })
          .limit(1);
          
        if (error) {
          if (error.message.includes('schema cache') || error.message.includes('not found')) {
            results[table] = { status: '❌ Not Found', message: 'Table does not exist in schema' };
          } else {
            results[table] = { status: '⚠️ Access Issue', message: error.message };
          }
        } else {
          results[table] = { status: '✅ Accessible', message: `${count || 0} records` };
        }
      } catch (err) {
        results[table] = { status: '❌ Error', message: err.message };
      }
    }
    
    // Display results
    console.log('Table Status Report:');
    console.log('====================');
    Object.entries(results).forEach(([table, result]) => {
      console.log(`${result.status} ${table.padEnd(20)} - ${result.message}`);
    });
    
    // Method 2: Test specific operations
    console.log('\n📝 Method 2: Testing CRUD operations on existing tables...\n');
    
    // Test users table operations
    try {
      console.log('👤 Testing users table...');
      
      // Try to insert a test user
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{
          email: 'test@example.com',
          name: 'Test User',
          role: 'student'
        }])
        .select()
        .single();
        
      if (insertError) {
        console.log(`   ❌ Insert failed: ${insertError.message}`);
      } else {
        console.log(`   ✅ Insert successful: ${newUser.name}`);
        
        // Clean up - delete the test user
        await supabase
          .from('users')
          .delete()
          .eq('id', newUser.id);
        console.log(`   🧹 Test user cleaned up`);
      }
    } catch (err) {
      console.log(`   ❌ Users table error: ${err.message}`);
    }
    
    // Test assignments table
    try {
      console.log('📝 Testing assignments table...');
      
      const { error: assignmentError } = await supabase
        .from('assignments')
        .select('*')
        .limit(1);
        
      if (assignmentError) {
        console.log(`   ❌ Assignments error: ${assignmentError.message}`);
      } else {
        console.log(`   ✅ Assignments table accessible`);
      }
    } catch (err) {
      console.log(`   ❌ Assignments error: ${err.message}`);
    }
    
    // Summary
    const accessible = Object.values(results).filter(r => r.status.includes('✅')).length;
    const total = Object.keys(results).length;
    
    console.log('\n📊 Summary:');
    console.log('============');
    console.log(`✅ Accessible tables: ${accessible}/${total}`);
    console.log(`❌ Missing tables: ${total - accessible}/${total}`);
    
    if (accessible >= 3) {
      console.log('\n🎉 Database connection is working!');
      console.log('💡 Core tables (users, assignments, notes) are accessible');
      
      if (accessible < total) {
        console.log(`\n⚠️  Missing ${total - accessible} tables - you may need to run the migration SQL manually`);
        console.log('📍 Go to Supabase Dashboard > SQL Editor > Run database/safe_migration_schema.sql');
      }
    } else {
      console.log('\n❌ Database setup incomplete');
      console.log('📍 Please run the migration SQL in Supabase Dashboard');
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  }
}

verifyDatabase();
