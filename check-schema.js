// Check current database schema before migration
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function checkSchema() {
  try {
    console.log('🔍 Checking current database schema...\n');
    
    // Check existing users table structure
    console.log('👤 Checking users table columns...');
    
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .limit(1);
      
    if (userError) {
      console.log(`   ❌ Users table error: ${userError.message}`);
    } else {
      console.log('   ✅ Users table accessible');
      
      // Try to access specific columns to see what exists
      const testColumns = ['id', 'email', 'name', 'full_name', 'role', 'student_id', 'class_id', 'phone'];
      
      for (const column of testColumns) {
        try {
          const { error: colError } = await supabase
            .from('users')
            .select(column)
            .limit(1);
            
          if (colError) {
            if (colError.message.includes('column') && colError.message.includes('does not exist')) {
              console.log(`   ❌ Column '${column}': does not exist`);
            } else {
              console.log(`   ⚠️  Column '${column}': ${colError.message}`);
            }
          } else {
            console.log(`   ✅ Column '${column}': exists`);
          }
        } catch (err) {
          console.log(`   ❌ Column '${column}': ${err.message}`);
        }
      }
    }
    
    // Check assignments table
    console.log('\n📝 Checking assignments table columns...');
    const assignmentColumns = ['id', 'title', 'description', 'created_by', 'due_date'];
    
    for (const column of assignmentColumns) {
      try {
        const { error: colError } = await supabase
          .from('assignments')
          .select(column)
          .limit(1);
          
        if (colError) {
          if (colError.message.includes('column') && colError.message.includes('does not exist')) {
            console.log(`   ❌ Column '${column}': does not exist`);
          } else {
            console.log(`   ⚠️  Column '${column}': ${colError.message}`);
          }
        } else {
          console.log(`   ✅ Column '${column}': exists`);
        }
      } catch (err) {
        console.log(`   ❌ Column '${column}': ${err.message}`);
      }
    }
    
    console.log('\n📋 Schema Analysis Complete!');
    console.log('\n💡 Based on this analysis, I can create a targeted migration that:');
    console.log('   1. Only adds missing columns');
    console.log('   2. Only creates indexes for existing columns');
    console.log('   3. Avoids any conflicts with existing schema');
    
  } catch (error) {
    console.error('❌ Schema check failed:', error.message);
  }
}

checkSchema();
