// Test leaderboard data fetching
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function testLeaderboard() {
  try {
    console.log('🏆 Testing Leaderboard Data Fetching...\n');
    
    // Test 1: Try to fetch from student_leaderboard view
    console.log('📊 Test 1: Fetching from student_leaderboard view...');
    const { data: viewData, error: viewError } = await supabase
      .from('student_leaderboard')
      .select('*')
      .limit(10);

    if (viewError) {
      console.log(`   ⚠️ View error: ${viewError.message}`);
      console.log('   📋 Falling back to manual query...\n');
      
      // Test 2: Manual query if view doesn't work
      console.log('📊 Test 2: Manual leaderboard query...');
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select(`
          id, name, department, year, gpa, cgpa,
          leaderboard(points, category, reason)
        `)
        .eq('role', 'student')
        .eq('is_active', true);

      if (usersError) {
        console.log(`   ❌ Users query error: ${usersError.message}`);
        return;
      }

      console.log(`   ✅ Found ${usersData.length} students`);
      
      // Process the data
      const processedData = usersData.map(user => {
        const totalPoints = user.leaderboard?.reduce((sum, entry) => sum + (entry.points || 0), 0) || 0;
        return {
          id: user.id,
          name: user.name,
          department: user.department,
          year: user.year,
          gpa: user.gpa || 0,
          cgpa: user.cgpa || 0,
          total_points: totalPoints,
          total_achievements: user.leaderboard?.length || 0,
        };
      });

      // Sort by points
      processedData.sort((a, b) => {
        if (b.total_points !== a.total_points) return b.total_points - a.total_points;
        if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
        return b.gpa - a.gpa;
      });

      console.log('\n🏅 Top 5 Students:');
      console.log('==================');
      processedData.slice(0, 5).forEach((student, index) => {
        const rank = index + 1;
        const badge = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
        console.log(`${badge} ${student.name}`);
        console.log(`   📚 ${student.department} - Year ${student.year}`);
        console.log(`   🎯 Points: ${student.total_points} | GPA: ${student.gpa} | Achievements: ${student.total_achievements}`);
        console.log('');
      });

    } else {
      console.log(`   ✅ View working! Found ${viewData.length} students`);
      
      console.log('\n🏅 Top 5 Students (from view):');
      console.log('==============================');
      viewData.slice(0, 5).forEach((student, index) => {
        const rank = index + 1;
        const badge = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
        console.log(`${badge} ${student.name}`);
        console.log(`   📚 ${student.department} - Year ${student.year}`);
        console.log(`   🎯 Points: ${student.total_points} | GPA: ${student.gpa} | Rank: ${student.rank_position}`);
        console.log('');
      });
    }

    // Test 3: Check individual leaderboard entries
    console.log('🎖️ Test 3: Recent point awards...');
    const { data: recentPoints, error: pointsError } = await supabase
      .from('leaderboard')
      .select(`
        points, category, reason, created_at,
        users(name),
        awarded_by:users!leaderboard_awarded_by_fkey(name)
      `)
      .order('created_at', { ascending: false })
      .limit(5);

    if (pointsError) {
      console.log(`   ⚠️ Points query error: ${pointsError.message}`);
    } else {
      console.log(`   ✅ Found ${recentPoints.length} recent point awards:`);
      recentPoints.forEach(entry => {
        console.log(`   • ${entry.users?.name} got ${entry.points} ${entry.category} points`);
        console.log(`     Reason: ${entry.reason}`);
        console.log(`     Awarded by: ${entry.awarded_by?.name || 'System'}`);
        console.log('');
      });
    }

    console.log('🎉 Leaderboard test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testLeaderboard();
