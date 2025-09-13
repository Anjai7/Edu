// Safe database migration script
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function safeMigration() {
  try {
    console.log('🔄 Starting safe database migration...\n');
    
    // Read the safe migration schema
    const migrationSQL = fs.readFileSync('./database/safe_migration_schema.sql', 'utf8');
    
    console.log('📋 Migration SQL loaded successfully');
    console.log('⚡ This migration will:');
    console.log('   ✅ Skip existing tables');
    console.log('   ✅ Add missing columns to existing tables');
    console.log('   ✅ Create only missing tables');
    console.log('   ✅ Add indexes safely');
    console.log('   ✅ Insert sample data only if tables are empty\n');
    
    // Note: Since we can't execute raw SQL directly through Supabase client,
    // we'll provide instructions for manual execution
    
    console.log('📝 MANUAL MIGRATION STEPS:');
    console.log('================================');
    console.log('1. Go to your Supabase Dashboard: https://supabase.com/dashboard');
    console.log('2. Navigate to: SQL Editor');
    console.log('3. Copy the content from: database/safe_migration_schema.sql');
    console.log('4. Paste and run the SQL in the editor');
    console.log('5. Come back and run: node test-db-connection.js');
    
    console.log('\n💡 This migration is safe because:');
    console.log('   - Uses CREATE TABLE IF NOT EXISTS');
    console.log('   - Uses ALTER TABLE ADD COLUMN IF NOT EXISTS');
    console.log('   - Checks for existing indexes before creating');
    console.log('   - Only inserts sample data if tables are empty');
    
    // Test current connection
    console.log('\n🔍 Testing current database state...');
    
    const tables = ['users', 'assignments', 'classes', 'attendance', 'leaderboard'];
    const results = {};
    
    for (const table of tables) {
      try {
        const { data, error, count } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true });
          
        if (error) {
          results[table] = `❌ ${error.message}`;
        } else {
          results[table] = `✅ Exists (${count || 0} records)`;
        }
      } catch (err) {
        results[table] = `❌ ${err.message}`;
      }
    }
    
    console.log('\n📊 Current Table Status:');
    Object.entries(results).forEach(([table, status]) => {
      console.log(`   ${table}: ${status}`);
    });
    
    console.log('\n🎯 After migration, all tables should show "✅ Exists"');
    
  } catch (error) {
    console.error('❌ Migration preparation failed:', error.message);
  }
}

safeMigration();
