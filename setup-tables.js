// Script to set up missing database tables
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function setupMissingTables() {
  try {
    console.log('🔧 Setting up missing database tables...\n');
    
    // Read the comprehensive schema
    const schemaSQL = fs.readFileSync('./database/comprehensive_schema.sql', 'utf8');
    
    // Split the schema into individual statements
    const statements = schemaSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📋 Found ${statements.length} SQL statements to execute\n`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      
      // Skip comments and empty statements
      if (!statement || statement.startsWith('--')) continue;
      
      try {
        console.log(`⏳ Executing statement ${i + 1}/${statements.length}...`);
        
        // Execute the SQL statement
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error) {
          if (error.message.includes('already exists') || error.message.includes('duplicate')) {
            console.log(`✅ Statement ${i + 1}: Already exists (skipped)`);
            successCount++;
          } else {
            console.log(`❌ Statement ${i + 1}: ${error.message}`);
            errorCount++;
          }
        } else {
          console.log(`✅ Statement ${i + 1}: Success`);
          successCount++;
        }
        
        // Add a small delay to avoid overwhelming the database
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (err) {
        console.log(`❌ Statement ${i + 1}: ${err.message}`);
        errorCount++;
      }
    }
    
    console.log(`\n📊 Results:`);
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    
    if (errorCount === 0) {
      console.log('\n🎉 All tables set up successfully!');
    } else {
      console.log('\n⚠️  Some tables may need manual setup in Supabase dashboard');
    }
    
  } catch (error) {
    console.error('❌ Error setting up tables:', error.message);
    console.log('\n💡 Alternative: You may need to run the SQL manually in Supabase dashboard');
    console.log('📍 Go to: Supabase Dashboard > SQL Editor > Copy the content from database/comprehensive_schema.sql');
  }
}

setupMissingTables();
