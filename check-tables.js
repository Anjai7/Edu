// Check existing tables in Supabase
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function checkTables() {
  try {
    console.log('📋 Checking existing tables in Supabase...\n');
    
    // Get all tables from information_schema
    const { data, error } = await supabase.rpc('get_table_names');
    
    if (error) {
      console.log('Using alternative method to check tables...');
      
      // Try to access common tables one by one
      const commonTables = [
        'users', 'assignments', 'attendance', 'leaderboard', 'classes',
        'assignment_submissions', 'announcements', 'leaves', 'canteen_items',
        'orders', 'notes', 'notifications'
      ];
      
      console.log('Testing table accessibility:\n');
      for (const table of commonTables) {
        try {
          const { error: tableError } = await supabase
            .from(table)
            .select('*')
            .limit(1);
            
          if (tableError) {
            if (tableError.message.includes('does not exist') || tableError.message.includes('not found')) {
              console.log(`❌ ${table}: Table does not exist`);
            } else {
              console.log(`⚠️  ${table}: ${tableError.message}`);
            }
          } else {
            console.log(`✅ ${table}: Table exists and accessible`);
          }
        } catch (err) {
          console.log(`❌ ${table}: ${err.message}`);
        }
      }
    } else {
      console.log('Available tables:', data);
    }
    
  } catch (error) {
    console.error('Error checking tables:', error.message);
  }
}

checkTables();
