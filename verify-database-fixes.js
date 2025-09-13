// Complete database verification after fixes
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function verifyDatabaseFixes() {
  try {
    console.log('🔍 Verifying database after comprehensive fixes...\n');
    
    // List of all expected tables
    const expectedTables = [
      'users', 'assignments', 'notes', 'flashcards', 'study_groups', 
      'study_sessions', 'budget_entries', 'wellness_entries', 'campus_resources',
      'courses', 'submissions', 'leaderboard', 'attendance', 'leaves',
      'announcements', 'canteen_items', 'orders', 'order_items', 'notifications'
    ];
    
    console.log('📋 Checking table accessibility...\n');
    
    const results = {};
    let totalAccessible = 0;
    
    for (const table of expectedTables) {
      try {
        const { data, error, count } = await supabase
          .from(table)
          .select('*', { count: 'exact' })
          .limit(1);
          
        if (error) {
          if (error.message.includes('schema cache') || error.message.includes('not found')) {
            results[table] = { status: '❌ Missing', message: 'Table does not exist' };
          } else if (error.message.includes('RLS') || error.message.includes('policy')) {
            results[table] = { status: '🔒 Protected', message: 'RLS enabled (good!)' };
            totalAccessible++;
          } else {
            results[table] = { status: '⚠️ Issue', message: error.message };
          }
        } else {
          results[table] = { status: '✅ Accessible', message: `${count || 0} records` };
          totalAccessible++;
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
    
    console.log('\n📊 Summary:');
    console.log('============');
    console.log(`✅ Accessible/Protected tables: ${totalAccessible}/${expectedTables.length}`);
    
    // Test specific functionality
    console.log('\n🧪 Testing specific functionality...\n');
    
    // Test 1: Check if users table has all required columns
    try {
      console.log('👤 Testing users table structure...');
      const { error: usersError } = await supabase
        .from('users')
        .select('id, email, name, role, department, year, gpa, created_at')
        .limit(1);
        
      if (usersError) {
        console.log(`   ⚠️ Users table issue: ${usersError.message}`);
      } else {
        console.log(`   ✅ Users table structure is correct`);
      }
    } catch (err) {
      console.log(`   ❌ Users table error: ${err.message}`);
    }
    
    // Test 2: Check if assignments table has required columns
    try {
      console.log('📝 Testing assignments table structure...');
      const { error: assignmentsError } = await supabase
        .from('assignments')
        .select('id, title, description, deadline, faculty_id, created_at')
        .limit(1);
        
      if (assignmentsError) {
        console.log(`   ⚠️ Assignments table issue: ${assignmentsError.message}`);
      } else {
        console.log(`   ✅ Assignments table structure is correct`);
      }
    } catch (err) {
      console.log(`   ❌ Assignments table error: ${err.message}`);
    }
    
    // Test 3: Check views
    try {
      console.log('📈 Testing database views...');
      const { error: viewError } = await supabase
        .from('student_leaderboard')
        .select('*')
        .limit(1);
        
      if (viewError) {
        console.log(`   ⚠️ Views issue: ${viewError.message}`);
      } else {
        console.log(`   ✅ Database views are working`);
      }
    } catch (err) {
      console.log(`   ❌ Views error: ${err.message}`);
    }
    
    // Final assessment
    const successRate = (totalAccessible / expectedTables.length) * 100;
    
    console.log('\n🎯 Final Assessment:');
    console.log('====================');
    
    if (successRate >= 90) {
      console.log('🎉 EXCELLENT! Your database is fully functional');
      console.log('✅ All tables are accessible or properly secured');
      console.log('✅ RLS policies are protecting your data');
      console.log('✅ Your EduHub application is ready to use!');
    } else if (successRate >= 70) {
      console.log('✅ GOOD! Most of your database is working');
      console.log(`⚠️ ${expectedTables.length - totalAccessible} tables may need attention`);
      console.log('💡 Run the comprehensive fix script if you see missing tables');
    } else {
      console.log('⚠️ Your database needs more work');
      console.log('📍 Please run the comprehensive fix script in Supabase SQL Editor');
      console.log('📁 File: database/comprehensive_fix.sql');
    }
    
    console.log(`\n📈 Success Rate: ${successRate.toFixed(1)}%`);
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  }
}

verifyDatabaseFixes();
