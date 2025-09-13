-- Comprehensive EduHub Database Schema
-- All-in-One Student Web Application

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (Students, Faculty, Admin)
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'faculty', 'admin')),
  department VARCHAR(100),
  year INTEGER CHECK (year >= 1 AND year <= 4),
  skills TEXT[],
  gpa DECIMAL(3,2) CHECK (gpa >= 0.0 AND gpa <= 4.0),
  profile_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assignments table
CREATE TABLE assignments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  deadline TIMESTAMP WITH TIME ZONE NOT NULL,
  file_url TEXT,
  faculty_id UUID REFERENCES users(id) ON DELETE CASCADE,
  department VARCHAR(100),
  year INTEGER,
  max_points INTEGER DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assignment submissions table
CREATE TABLE submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  file_url TEXT,
  content TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'submitted', 'graded', 'late')),
  grade INTEGER CHECK (grade >= 0 AND grade <= 100),
  feedback TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  graded_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(student_id, assignment_id)
);

-- Leaderboard/Points table
CREATE TABLE leaderboard (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  points INTEGER DEFAULT 0,
  category VARCHAR(50) NOT NULL, -- 'academic', 'skill', 'participation', etc.
  reason TEXT,
  awarded_by UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Attendance table
CREATE TABLE attendance (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  faculty_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  subject VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, date, subject)
);

-- Leave applications table
CREATE TABLE leaves (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approved_by UUID REFERENCES users(id),
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements table
CREATE TABLE announcements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  target_type VARCHAR(20) NOT NULL CHECK (target_type IN ('global', 'department', 'year')),
  target_value VARCHAR(100), -- department name or year number
  created_by UUID REFERENCES users(id) ON DELETE CASCADE,
  priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Canteen items table
CREATE TABLE canteen_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  category VARCHAR(50) NOT NULL, -- 'snacks', 'beverages', 'meals', etc.
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Canteen orders table
CREATE TABLE orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES users(id) ON DELETE CASCADE,
  total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled')),
  payment_method VARCHAR(20) DEFAULT 'cash' CHECK (payment_method IN ('cash', 'card', 'upi', 'wallet')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Order items table
CREATE TABLE order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  item_id UUID REFERENCES canteen_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0)
);

-- Notes table (for study materials)
CREATE TABLE notes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  subject VARCHAR(100),
  department VARCHAR(100),
  year INTEGER,
  uploaded_by UUID REFERENCES users(id) ON DELETE CASCADE,
  file_url TEXT,
  tags TEXT[],
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'assignment', 'announcement', 'leave', 'order', etc.
  reference_id UUID, -- ID of the related entity
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_department_year ON users(department, year);
CREATE INDEX idx_assignments_faculty ON assignments(faculty_id);
CREATE INDEX idx_assignments_deadline ON assignments(deadline);
CREATE INDEX idx_submissions_student ON submissions(student_id);
CREATE INDEX idx_submissions_assignment ON submissions(assignment_id);
CREATE INDEX idx_leaderboard_student ON leaderboard(student_id);
CREATE INDEX idx_attendance_student_date ON attendance(student_id, date);
CREATE INDEX idx_leaves_student ON leaves(student_id);
CREATE INDEX idx_announcements_target ON announcements(target_type, target_value);
CREATE INDEX idx_orders_student ON orders(student_id);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);

-- Create views for commonly used queries
CREATE VIEW student_leaderboard AS
SELECT 
  u.id,
  u.name,
  u.department,
  u.year,
  u.gpa,
  COALESCE(SUM(l.points), 0) as total_points
FROM users u
LEFT JOIN leaderboard l ON u.id = l.student_id
WHERE u.role = 'student'
GROUP BY u.id, u.name, u.department, u.year, u.gpa
ORDER BY total_points DESC, u.gpa DESC;

CREATE VIEW attendance_summary AS
SELECT 
  student_id,
  COUNT(*) as total_classes,
  COUNT(CASE WHEN status = 'present' THEN 1 END) as present_count,
  COUNT(CASE WHEN status = 'absent' THEN 1 END) as absent_count,
  COUNT(CASE WHEN status = 'late' THEN 1 END) as late_count,
  ROUND(
    (COUNT(CASE WHEN status = 'present' THEN 1 END) * 100.0 / COUNT(*)), 2
  ) as attendance_percentage
FROM attendance
GROUP BY student_id;

-- Sample seed data
INSERT INTO users (email, name, role, department, year, gpa) VALUES
  ('admin@eduhub.com', 'Admin User', 'admin', 'Administration', NULL, NULL),
  ('john.doe@student.edu', 'John Doe', 'student', 'Computer Science', 3, 3.75),
  ('jane.smith@student.edu', 'Jane Smith', 'student', 'Computer Science', 2, 3.92),
  ('prof.wilson@faculty.edu', 'Dr. Wilson', 'faculty', 'Computer Science', NULL, NULL),
  ('alice.brown@student.edu', 'Alice Brown', 'student', 'Electronics', 4, 3.68);

INSERT INTO canteen_items (name, description, price, stock, category) VALUES
  ('Sandwich', 'Fresh vegetable sandwich', 45.00, 50, 'meals'),
  ('Coffee', 'Hot black coffee', 15.00, 100, 'beverages'),
  ('Burger', 'Chicken burger with fries', 85.00, 30, 'meals'),
  ('Tea', 'Indian masala tea', 12.00, 80, 'beverages'),
  ('Samosa', 'Crispy potato samosa', 20.00, 60, 'snacks');

INSERT INTO announcements (title, message, target_type, created_by) VALUES
  ('Welcome to New Semester', 'Welcome all students to the new academic semester!', 'global', (SELECT id FROM users WHERE role = 'admin' LIMIT 1)),
  ('CS Department Meeting', 'Important meeting for all CS students tomorrow at 2 PM', 'department', (SELECT id FROM users WHERE role = 'faculty' LIMIT 1));
