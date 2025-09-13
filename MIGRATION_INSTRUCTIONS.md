## 🔧 Database Migration Instructions

### The Problem
Your database has the error: **`column "role" does not exist`** because the migration script tried to create an index on a column that doesn't exist yet.

### The Solution
I've created a **targeted migration** that:
✅ Only adds missing columns
✅ Only creates indexes AFTER columns are added
✅ Avoids all conflicts with existing schema

### 📋 Steps to Fix:

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Navigate to your project
   - Go to: **SQL Editor**

2. **Run the Targeted Migration**
   - Copy the content from: `database/targeted_migration.sql`
   - Paste it into the SQL Editor
   - Click **Run** to execute

3. **Verify Success**
   - Come back to VS Code
   - Run: `node verify-database.js`
   - All tables should show ✅ status

### 🎯 What This Migration Does:

#### Adds Missing User Columns:
- `role` (student/teacher/admin)
- `student_id` (unique identifier)
- `class_id` (class assignment)
- `phone`, `address`, `date_of_birth`
- `profile_picture`, `is_active`

#### Adds Missing Assignment Columns:
- `created_by` (who created the assignment)
- `subject`, `total_points`, `instructions`
- `attachments` (file attachments)
- `status` (active/draft/closed)

#### Creates Missing Tables:
- `classes`, `attendance`, `leaderboard`
- `announcements`, `leaves`, `canteen_items`
- `orders`, `order_items`, `notifications`
- `assignment_submissions`

#### Creates Indexes Safely:
- Only after all columns are added
- Improves database performance
- Avoids column-not-found errors

#### Adds Sample Data:
- Sample classes and canteen items
- Only if tables are empty

### ✅ After Migration:

Your database will have:
- 11/11 tables accessible ✅
- All required columns ✅
- Performance indexes ✅
- Sample data for testing ✅

### 🚀 Ready to Use:

Once migration is complete, your EduHub app will have full functionality:
- User authentication and roles
- Assignment management
- Attendance tracking
- Leaderboard system
- Canteen ordering
- Announcements and notifications

### 🔍 Verification Command:
```bash
node verify-database.js
```

This should show all tables as ✅ Accessible after the migration.
