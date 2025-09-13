-- COMPLETE EDUHUB DATABASE SCHEMA
-- Full-Featured Educational Platform Database
-- This script creates the entire database from scratch

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS canteen_items CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS announcements CASCADE;
DROP TABLE IF EXISTS leaves CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS leaderboard CASCADE;
DROP TABLE IF EXISTS submissions CASCADE;
DROP TABLE IF EXISTS assignments CASCADE;
DROP TABLE IF EXISTS wellness_entries CASCADE;
DROP TABLE IF EXISTS budget_entries CASCADE;
DROP TABLE IF EXISTS study_sessions CASCADE;
DROP TABLE IF EXISTS study_group_members CASCADE;
DROP TABLE IF EXISTS study_groups CASCADE;
DROP TABLE IF EXISTS flashcards CASCADE;
DROP TABLE IF EXISTS notes CASCADE;
DROP TABLE IF EXISTS campus_resources CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Drop views if they exist
DROP VIEW IF EXISTS student_leaderboard CASCADE;
DROP VIEW IF EXISTS attendance_summary CASCADE;
DROP VIEW IF EXISTS canteen_dashboard CASCADE;
DROP VIEW IF EXISTS student_performance CASCADE;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- CORE TABLES
-- ============================================================================

-- Users table (Students, Faculty, Admin)
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash TEXT, -- For future authentication
    role VARCHAR(20) NOT NULL CHECK (role IN ('student', 'faculty', 'admin')),
    department VARCHAR(100),
    year INTEGER CHECK (year >= 1 AND year <= 4),
    semester INTEGER CHECK (semester >= 1 AND semester <= 8),
    roll_number VARCHAR(50) UNIQUE,
    phone VARCHAR(20),
    address TEXT,
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    skills TEXT[],
    gpa DECIMAL(3,2) CHECK (gpa >= 0.0 AND gpa <= 4.0),
    cgpa DECIMAL(3,2) CHECK (cgpa >= 0.0 AND cgpa <= 4.0),
    profile_image TEXT,
    emergency_contact_name VARCHAR(255),
    emergency_contact_phone VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(20) UNIQUE NOT NULL,
    description TEXT,
    department VARCHAR(100) NOT NULL,
    credits INTEGER DEFAULT 3 CHECK (credits >= 1 AND credits <= 6),
    semester INTEGER CHECK (semester >= 1 AND semester <= 8),
    year INTEGER CHECK (year >= 1 AND year <= 4),
    faculty_id UUID REFERENCES users(id) ON DELETE SET NULL,
    syllabus_url TEXT,
    max_students INTEGER DEFAULT 60,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- ACADEMIC TABLES
-- ============================================================================

-- Assignments table
CREATE TABLE assignments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructions TEXT,
    deadline TIMESTAMP WITH TIME ZONE NOT NULL,
    file_url TEXT,
    faculty_id UUID REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    department VARCHAR(100),
    year INTEGER,
    semester INTEGER,
    max_points INTEGER DEFAULT 100 CHECK (max_points > 0),
    submission_type VARCHAR(20) DEFAULT 'file' CHECK (submission_type IN ('file', 'text', 'both')),
    is_group_assignment BOOLEAN DEFAULT false,
    max_group_size INTEGER DEFAULT 1,
    late_submission_allowed BOOLEAN DEFAULT false,
    late_penalty_percent DECIMAL(5,2) DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
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
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'submitted', 'graded', 'late', 'rejected')),
    grade INTEGER CHECK (grade >= 0 AND grade <= 100),
    feedback TEXT,
    private_notes TEXT, -- Faculty only notes
    plagiarism_score DECIMAL(5,2),
    is_late BOOLEAN DEFAULT false,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    graded_at TIMESTAMP WITH TIME ZONE,
    graded_by UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(student_id, assignment_id)
);

-- Attendance table
CREATE TABLE attendance (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    student_id UUID REFERENCES users(id) ON DELETE CASCADE,
    faculty_id UUID REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    time_slot VARCHAR(20), -- e.g., "09:00-10:00"
    status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
    subject VARCHAR(100),
    topic_covered TEXT,
    notes TEXT,
    location VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(student_id, course_id, date, time_slot)
);

-- ============================================================================
-- GAMIFICATION & ENGAGEMENT
-- ============================================================================

-- Leaderboard/Points table
CREATE TABLE leaderboard (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    student_id UUID REFERENCES users(id) ON DELETE CASCADE,
    points INTEGER DEFAULT 0,
    category VARCHAR(50) NOT NULL, -- 'academic', 'skill', 'participation', 'event', 'social'
    subcategory VARCHAR(50), -- More specific categorization
    reason TEXT NOT NULL,
    awarded_by UUID REFERENCES users(id),
    assignment_id UUID REFERENCES assignments(id), -- If points are for assignment
    multiplier DECIMAL(3,2) DEFAULT 1.0, -- For bonus points
    expires_at TIMESTAMP WITH TIME ZONE, -- For temporary points
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- ADMINISTRATIVE TABLES
-- ============================================================================

-- Leave applications table
CREATE TABLE leaves (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    student_id UUID REFERENCES users(id) ON DELETE CASCADE,
    leave_type VARCHAR(50) NOT NULL CHECK (leave_type IN ('sick', 'personal', 'emergency', 'medical', 'family', 'academic')),
    reason TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    days_count INTEGER GENERATED ALWAYS AS (end_date - start_date + 1) STORED,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    comments TEXT,
    admin_notes TEXT,
    supporting_document_url TEXT,
    is_half_day BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements table
CREATE TABLE announcements (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    summary TEXT, -- Short description for notifications
    target_type VARCHAR(20) NOT NULL CHECK (target_type IN ('global', 'department', 'year', 'course', 'role')),
    target_value VARCHAR(100), -- department name, year number, course id, or role
    created_by UUID REFERENCES users(id) ON DELETE CASCADE,
    priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    category VARCHAR(50) DEFAULT 'general', -- 'academic', 'event', 'exam', 'holiday', 'general'
    is_pinned BOOLEAN DEFAULT false,
    requires_acknowledgment BOOLEAN DEFAULT false,
    attachment_url TEXT,
    expires_at TIMESTAMP WITH TIME ZONE,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- CANTEEN & ORDERING SYSTEM
-- ============================================================================

-- Canteen items table
CREATE TABLE canteen_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    cost_price DECIMAL(10,2) CHECK (cost_price >= 0), -- For profit tracking
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    min_stock_level INTEGER DEFAULT 5, -- For low stock alerts
    category VARCHAR(50) NOT NULL, -- 'snacks', 'beverages', 'meals', 'desserts', 'combo'
    subcategory VARCHAR(50), -- More specific categorization
    image_url TEXT,
    nutritional_info JSONB, -- Store calories, proteins, etc.
    ingredients TEXT[],
    allergens TEXT[],
    is_vegetarian BOOLEAN DEFAULT true,
    is_vegan BOOLEAN DEFAULT false,
    spice_level INTEGER CHECK (spice_level >= 0 AND spice_level <= 5),
    preparation_time INTEGER DEFAULT 10, -- in minutes
    is_available BOOLEAN DEFAULT true,
    available_from TIME DEFAULT '08:00',
    available_until TIME DEFAULT '20:00',
    discount_percent DECIMAL(5,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Canteen orders table
CREATE TABLE orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_number VARCHAR(20) UNIQUE NOT NULL, -- Human readable order number
    student_id UUID REFERENCES users(id) ON DELETE CASCADE,
    total DECIMAL(10,2) NOT NULL CHECK (total >= 0),
    discount DECIMAL(10,2) DEFAULT 0 CHECK (discount >= 0),
    tax DECIMAL(10,2) DEFAULT 0 CHECK (tax >= 0),
    final_amount DECIMAL(10,2) GENERATED ALWAYS AS (total - discount + tax) STORED,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled', 'refunded')),
    payment_method VARCHAR(20) DEFAULT 'cash' CHECK (payment_method IN ('cash', 'card', 'upi', 'wallet', 'online')),
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    transaction_id VARCHAR(100), -- For online payments
    estimated_ready_time TIMESTAMP WITH TIME ZONE,
    actual_ready_time TIMESTAMP WITH TIME ZONE,
    delivery_type VARCHAR(20) DEFAULT 'pickup' CHECK (delivery_type IN ('pickup', 'delivery')),
    delivery_location VARCHAR(100),
    special_instructions TEXT,
    notes TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    item_id UUID REFERENCES canteen_items(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
    total_price DECIMAL(10,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- STUDY & LEARNING TOOLS
-- ============================================================================

-- Notes table (for study materials)
CREATE TABLE notes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    summary TEXT,
    subject VARCHAR(100),
    course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
    department VARCHAR(100),
    year INTEGER,
    semester INTEGER,
    uploaded_by UUID REFERENCES users(id) ON DELETE CASCADE,
    file_url TEXT,
    file_size INTEGER, -- in bytes
    file_type VARCHAR(50),
    tags TEXT[],
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
    is_public BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false, -- Faculty verified
    verified_by UUID REFERENCES users(id),
    download_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5),
    rating_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Flashcards table
CREATE TABLE flashcards (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    front_content TEXT NOT NULL,
    back_content TEXT NOT NULL,
    subject VARCHAR(100),
    course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
    difficulty VARCHAR(20) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    tags TEXT[],
    is_public BOOLEAN DEFAULT false,
    study_count INTEGER DEFAULT 0,
    correct_count INTEGER DEFAULT 0,
    last_studied TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Study groups table
CREATE TABLE study_groups (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    subject VARCHAR(100),
    course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
    max_members INTEGER DEFAULT 10 CHECK (max_members >= 2),
    current_members INTEGER DEFAULT 1,
    meeting_schedule TEXT, -- e.g., "Every Monday 6 PM"
    meeting_location VARCHAR(255),
    is_virtual BOOLEAN DEFAULT false,
    meeting_link TEXT,
    created_by UUID REFERENCES users(id) ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT true,
    is_public BOOLEAN DEFAULT true,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Study group members table
CREATE TABLE study_group_members (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    group_id UUID REFERENCES study_groups(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(20) DEFAULT 'member' CHECK (role IN ('admin', 'moderator', 'member')),
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT true,
    UNIQUE(group_id, user_id)
);

-- Study sessions table
CREATE TABLE study_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    group_id UUID REFERENCES study_groups(id) ON DELETE SET NULL,
    subject VARCHAR(100),
    course_id UUID REFERENCES courses(id) ON DELETE SET NULL,
    duration INTEGER NOT NULL, -- in minutes
    focus_score INTEGER CHECK (focus_score >= 1 AND focus_score <= 10),
    productivity_rating INTEGER CHECK (productivity_rating >= 1 AND productivity_rating <= 5),
    topics_covered TEXT[],
    notes TEXT,
    session_type VARCHAR(20) DEFAULT 'solo' CHECK (session_type IN ('solo', 'group', 'guided')),
    session_date DATE DEFAULT CURRENT_DATE,
    start_time TIME,
    end_time TIME,
    location VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- PERSONAL MANAGEMENT
-- ============================================================================

-- Budget entries table
CREATE TABLE budget_entries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    type VARCHAR(20) NOT NULL CHECK (type IN ('income', 'expense')),
    payment_method VARCHAR(50),
    is_recurring BOOLEAN DEFAULT false,
    recurring_frequency VARCHAR(20) CHECK (recurring_frequency IN ('daily', 'weekly', 'monthly', 'yearly')),
    tags TEXT[],
    receipt_url TEXT,
    entry_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Wellness entries table
CREATE TABLE wellness_entries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 10),
    stress_level INTEGER CHECK (stress_level >= 1 AND stress_level <= 10),
    energy_level INTEGER CHECK (energy_level >= 1 AND energy_level <= 10),
    sleep_hours DECIMAL(3,1) CHECK (sleep_hours >= 0 AND sleep_hours <= 24),
    sleep_quality INTEGER CHECK (sleep_quality >= 1 AND sleep_quality <= 5),
    exercise_minutes INTEGER DEFAULT 0 CHECK (exercise_minutes >= 0),
    exercise_type VARCHAR(100),
    water_intake INTEGER DEFAULT 0, -- glasses of water
    meditation_minutes INTEGER DEFAULT 0,
    screen_time_hours DECIMAL(3,1),
    social_interaction_rating INTEGER CHECK (social_interaction_rating >= 1 AND social_interaction_rating <= 5),
    academic_satisfaction INTEGER CHECK (academic_satisfaction >= 1 AND academic_satisfaction <= 5),
    notes TEXT,
    goals_met TEXT[],
    challenges_faced TEXT[],
    entry_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- CAMPUS RESOURCES
-- ============================================================================

-- Campus resources table
CREATE TABLE campus_resources (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'library', 'lab', 'sports', 'medical', 'counseling', 'administrative'
    subcategory VARCHAR(100),
    description TEXT,
    location VARCHAR(255),
    building VARCHAR(100),
    floor INTEGER,
    room_number VARCHAR(20),
    contact_info VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    website_url TEXT,
    hours_of_operation TEXT,
    special_instructions TEXT,
    capacity INTEGER,
    equipment_available TEXT[],
    booking_required BOOLEAN DEFAULT false,
    booking_url TEXT,
    is_available BOOLEAN DEFAULT true,
    accessibility_features TEXT[],
    rating DECIMAL(3,2) CHECK (rating >= 0 AND rating <= 5),
    rating_count INTEGER DEFAULT 0,
    image_urls TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- COMMUNICATION & NOTIFICATIONS
-- ============================================================================

-- Notifications table
CREATE TABLE notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'assignment', 'announcement', 'leave', 'order', 'grade', 'reminder'
    category VARCHAR(50), -- More specific categorization
    priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    reference_id UUID, -- ID of the related entity
    reference_type VARCHAR(50), -- Type of related entity
    action_url TEXT, -- Deep link to relevant page
    is_read BOOLEAN DEFAULT false,
    read_at TIMESTAMP WITH TIME ZONE,
    is_email_sent BOOLEAN DEFAULT false,
    is_push_sent BOOLEAN DEFAULT false,
    expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- Users indexes
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_department_year ON users(department, year);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_roll_number ON users(roll_number);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Courses indexes
CREATE INDEX idx_courses_department ON courses(department);
CREATE INDEX idx_courses_faculty ON courses(faculty_id);
CREATE INDEX idx_courses_code ON courses(code);
CREATE INDEX idx_courses_is_active ON courses(is_active);

-- Assignments indexes
CREATE INDEX idx_assignments_faculty ON assignments(faculty_id);
CREATE INDEX idx_assignments_course ON assignments(course_id);
CREATE INDEX idx_assignments_deadline ON assignments(deadline);
CREATE INDEX idx_assignments_department_year ON assignments(department, year);

-- Submissions indexes
CREATE INDEX idx_submissions_student ON submissions(student_id);
CREATE INDEX idx_submissions_assignment ON submissions(assignment_id);
CREATE INDEX idx_submissions_status ON submissions(status);
CREATE INDEX idx_submissions_submitted_at ON submissions(submitted_at);

-- Attendance indexes
CREATE INDEX idx_attendance_student_date ON attendance(student_id, date);
CREATE INDEX idx_attendance_course_date ON attendance(course_id, date);
CREATE INDEX idx_attendance_faculty ON attendance(faculty_id);

-- Leaderboard indexes
CREATE INDEX idx_leaderboard_student ON leaderboard(student_id);
CREATE INDEX idx_leaderboard_category ON leaderboard(category);
CREATE INDEX idx_leaderboard_created_at ON leaderboard(created_at);

-- Leave indexes
CREATE INDEX idx_leaves_student ON leaves(student_id);
CREATE INDEX idx_leaves_status ON leaves(status);
CREATE INDEX idx_leaves_dates ON leaves(start_date, end_date);

-- Announcements indexes
CREATE INDEX idx_announcements_target ON announcements(target_type, target_value);
CREATE INDEX idx_announcements_created_by ON announcements(created_by);
CREATE INDEX idx_announcements_published_at ON announcements(published_at);

-- Canteen indexes
CREATE INDEX idx_canteen_items_category ON canteen_items(category);
CREATE INDEX idx_canteen_items_available ON canteen_items(is_available);
CREATE INDEX idx_orders_student ON orders(student_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- Study related indexes
CREATE INDEX idx_notes_uploaded_by ON notes(uploaded_by);
CREATE INDEX idx_notes_course ON notes(course_id);
CREATE INDEX idx_notes_public ON notes(is_public);
CREATE INDEX idx_flashcards_user ON flashcards(user_id);
CREATE INDEX idx_study_groups_created_by ON study_groups(created_by);
CREATE INDEX idx_study_sessions_user ON study_sessions(user_id);

-- Personal management indexes
CREATE INDEX idx_budget_entries_user ON budget_entries(user_id);
CREATE INDEX idx_budget_entries_date ON budget_entries(entry_date);
CREATE INDEX idx_wellness_entries_user ON wellness_entries(user_id);
CREATE INDEX idx_wellness_entries_date ON wellness_entries(entry_date);

-- Notifications indexes
CREATE INDEX idx_notifications_user_read ON notifications(user_id, is_read);
CREATE INDEX idx_notifications_type ON notifications(type);
CREATE INDEX idx_notifications_created_at ON notifications(created_at);

-- ============================================================================
-- USEFUL VIEWS
-- ============================================================================

-- Student leaderboard view
CREATE VIEW student_leaderboard AS
SELECT 
    u.id,
    u.name,
    u.roll_number,
    u.department,
    u.year,
    u.gpa,
    u.cgpa,
    COALESCE(SUM(l.points), 0) as total_points,
    COUNT(l.id) as total_achievements,
    RANK() OVER (ORDER BY COALESCE(SUM(l.points), 0) DESC, u.cgpa DESC, u.gpa DESC) as rank_position
FROM users u
LEFT JOIN leaderboard l ON u.id = l.student_id AND l.is_active = true
WHERE u.role = 'student' AND u.is_active = true
GROUP BY u.id, u.name, u.roll_number, u.department, u.year, u.gpa, u.cgpa
ORDER BY total_points DESC, u.cgpa DESC, u.gpa DESC;

-- Attendance summary view
CREATE VIEW attendance_summary AS
SELECT 
    a.student_id,
    u.name as student_name,
    u.roll_number,
    u.department,
    u.year,
    c.name as course_name,
    c.code as course_code,
    COUNT(*) as total_classes,
    COUNT(CASE WHEN a.status = 'present' THEN 1 END) as present_count,
    COUNT(CASE WHEN a.status = 'absent' THEN 1 END) as absent_count,
    COUNT(CASE WHEN a.status = 'late' THEN 1 END) as late_count,
    COUNT(CASE WHEN a.status = 'excused' THEN 1 END) as excused_count,
    ROUND(
        (COUNT(CASE WHEN a.status IN ('present', 'late') THEN 1 END) * 100.0 / NULLIF(COUNT(*), 0)), 2
    ) as attendance_percentage
FROM attendance a
JOIN users u ON a.student_id = u.id
LEFT JOIN courses c ON a.course_id = c.id
GROUP BY a.student_id, u.name, u.roll_number, u.department, u.year, c.name, c.code
ORDER BY u.department, u.year, u.name;

-- Student performance view
CREATE VIEW student_performance AS
SELECT 
    u.id as student_id,
    u.name,
    u.roll_number,
    u.department,
    u.year,
    u.gpa,
    u.cgpa,
    COUNT(DISTINCT s.assignment_id) as assignments_completed,
    ROUND(AVG(s.grade), 2) as average_grade,
    COUNT(CASE WHEN s.status = 'graded' AND s.grade >= 90 THEN 1 END) as excellent_submissions,
    COUNT(CASE WHEN s.status = 'graded' AND s.grade >= 75 THEN 1 END) as good_submissions,
    COUNT(CASE WHEN s.is_late = true THEN 1 END) as late_submissions,
    COALESCE(SUM(l.points), 0) as total_points
FROM users u
LEFT JOIN submissions s ON u.id = s.student_id
LEFT JOIN leaderboard l ON u.id = l.student_id AND l.is_active = true
WHERE u.role = 'student' AND u.is_active = true
GROUP BY u.id, u.name, u.roll_number, u.department, u.year, u.gpa, u.cgpa
ORDER BY u.department, u.year, u.name;

-- Canteen dashboard view
CREATE VIEW canteen_dashboard AS
SELECT 
    DATE(o.created_at) as order_date,
    COUNT(o.id) as total_orders,
    SUM(o.final_amount) as total_revenue,
    AVG(o.final_amount) as average_order_value,
    COUNT(CASE WHEN o.status = 'completed' THEN 1 END) as completed_orders,
    COUNT(CASE WHEN o.status = 'cancelled' THEN 1 END) as cancelled_orders,
    ROUND(
        COUNT(CASE WHEN o.status = 'completed' THEN 1 END) * 100.0 / NULLIF(COUNT(*), 0), 2
    ) as completion_rate
FROM orders o
GROUP BY DATE(o.created_at)
ORDER BY order_date DESC;

-- ============================================================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_assignments_updated_at BEFORE UPDATE ON assignments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_submissions_updated_at BEFORE UPDATE ON submissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_leaves_updated_at BEFORE UPDATE ON leaves FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_announcements_updated_at BEFORE UPDATE ON announcements FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_canteen_items_updated_at BEFORE UPDATE ON canteen_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON notes FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_flashcards_updated_at BEFORE UPDATE ON flashcards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_study_groups_updated_at BEFORE UPDATE ON study_groups FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_budget_entries_updated_at BEFORE UPDATE ON budget_entries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_campus_resources_updated_at BEFORE UPDATE ON campus_resources FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to generate order numbers
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TRIGGER AS $$
BEGIN
    NEW.order_number = 'ORD' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(NEXTVAL('order_sequence')::TEXT, 4, '0');
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create sequence for order numbers
CREATE SEQUENCE order_sequence START 1;

-- Apply trigger for order number generation
CREATE TRIGGER generate_order_number_trigger BEFORE INSERT ON orders FOR EACH ROW EXECUTE FUNCTION generate_order_number();

-- ============================================================================
-- SAMPLE DATA
-- ============================================================================

-- Insert sample users
INSERT INTO users (email, name, role, department, year, semester, roll_number, gpa, cgpa, phone) VALUES
    ('admin@eduhub.com', 'System Administrator', 'admin', 'Administration', NULL, NULL, 'ADMIN001', NULL, NULL, '+91-9876543210'),
    
    -- Faculty
    ('prof.john.smith@eduhub.com', 'Dr. John Smith', 'faculty', 'Computer Science', NULL, NULL, 'FAC001', NULL, NULL, '+91-9876543211'),
    ('prof.sarah.wilson@eduhub.com', 'Dr. Sarah Wilson', 'faculty', 'Electronics', NULL, NULL, 'FAC002', NULL, NULL, '+91-9876543212'),
    ('prof.michael.brown@eduhub.com', 'Dr. Michael Brown', 'faculty', 'Mechanical', NULL, NULL, 'FAC003', NULL, NULL, '+91-9876543213'),
    
    -- Students
    ('john.doe@student.eduhub.com', 'John Doe', 'student', 'Computer Science', 3, 5, 'CS21001', 3.75, 3.68, '+91-9876543214'),
    ('jane.smith@student.eduhub.com', 'Jane Smith', 'student', 'Computer Science', 2, 3, 'CS22001', 3.92, 3.89, '+91-9876543215'),
    ('alice.brown@student.eduhub.com', 'Alice Brown', 'student', 'Electronics', 4, 7, 'EC20001', 3.68, 3.71, '+91-9876543216'),
    ('bob.johnson@student.eduhub.com', 'Bob Johnson', 'student', 'Mechanical', 1, 1, 'ME23001', 3.45, 3.45, '+91-9876543217'),
    ('emma.davis@student.eduhub.com', 'Emma Davis', 'student', 'Computer Science', 3, 5, 'CS21002', 3.88, 3.82, '+91-9876543218'),
    ('david.wilson@student.eduhub.com', 'David Wilson', 'student', 'Electronics', 2, 3, 'EC22001', 3.56, 3.61, '+91-9876543219');

-- Insert sample courses
INSERT INTO courses (name, code, description, department, credits, semester, year, faculty_id) VALUES
    ('Data Structures and Algorithms', 'CS301', 'Fundamental data structures and algorithmic techniques', 'Computer Science', 4, 5, 3, (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com')),
    ('Database Management Systems', 'CS302', 'Database design, SQL, and database management', 'Computer Science', 3, 5, 3, (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com')),
    ('Digital Signal Processing', 'EC401', 'Digital signal processing techniques and applications', 'Electronics', 3, 7, 4, (SELECT id FROM users WHERE email = 'prof.sarah.wilson@eduhub.com')),
    ('Thermodynamics', 'ME201', 'Fundamentals of thermodynamics and heat transfer', 'Mechanical', 3, 3, 2, (SELECT id FROM users WHERE email = 'prof.michael.brown@eduhub.com'));

-- Insert sample assignments
INSERT INTO assignments (title, description, deadline, faculty_id, course_id, department, year, max_points) VALUES
    ('Implement Binary Search Tree', 'Create a complete BST implementation with insert, delete, and search operations', NOW() + INTERVAL '7 days', 
     (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com'), 
     (SELECT id FROM courses WHERE code = 'CS301'), 'Computer Science', 3, 100),
    ('Database Design Project', 'Design and implement a database for a library management system', NOW() + INTERVAL '14 days',
     (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com'),
     (SELECT id FROM courses WHERE code = 'CS302'), 'Computer Science', 3, 150);

-- Insert sample canteen items
INSERT INTO canteen_items (name, description, price, stock, category, is_vegetarian, preparation_time) VALUES
    ('Masala Chai', 'Traditional Indian spiced tea', 15.00, 100, 'beverages', true, 5),
    ('Filter Coffee', 'South Indian filter coffee', 20.00, 80, 'beverages', true, 5),
    ('Vegetable Sandwich', 'Fresh vegetable sandwich with green chutney', 45.00, 50, 'meals', true, 10),
    ('Chicken Biryani', 'Aromatic basmati rice with tender chicken', 120.00, 25, 'meals', false, 20),
    ('Samosa', 'Crispy potato-filled samosas (2 pieces)', 25.00, 60, 'snacks', true, 8),
    ('Dosa', 'Crispy fermented crepe with coconut chutney', 60.00, 30, 'meals', true, 15),
    ('Vada Pav', 'Mumbai street food - spiced potato dumpling in bread', 30.00, 40, 'snacks', true, 8),
    ('Fresh Lime Soda', 'Refreshing lime soda with mint', 25.00, 50, 'beverages', true, 3),
    ('Curd Rice', 'Comfort food - rice with yogurt and tempering', 40.00, 35, 'meals', true, 10),
    ('Chocolate Brownie', 'Rich chocolate brownie with vanilla ice cream', 80.00, 20, 'desserts', true, 12);

-- Insert sample announcements
INSERT INTO announcements (title, message, target_type, target_value, created_by, priority, category) VALUES
    ('Welcome to New Academic Year', 'Welcome all students to the new academic year 2025-26! We wish you all the best for your studies.', 'global', '', 
     (SELECT id FROM users WHERE role = 'admin' LIMIT 1), 'high', 'academic'),
    ('Computer Science Department Meeting', 'Important meeting for all CS students regarding course selection. Attendance is mandatory.', 'department', 'Computer Science',
     (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com'), 'high', 'academic'),
    ('Library Extended Hours', 'The library will remain open 24/7 during exam period starting next week.', 'global', '',
     (SELECT id FROM users WHERE role = 'admin' LIMIT 1), 'normal', 'general');

-- Insert sample campus resources
INSERT INTO campus_resources (name, category, description, location, contact_info, hours_of_operation, capacity) VALUES
    ('Central Library', 'library', 'Main library with extensive collection of books, journals, and digital resources', 'Academic Block A, Ground Floor', 'library@eduhub.com', '08:00 AM - 10:00 PM', 200),
    ('Computer Lab 1', 'lab', 'Advanced computer lab with latest hardware and software', 'IT Block, First Floor', 'itlab@eduhub.com', '09:00 AM - 06:00 PM', 40),
    ('Sports Complex', 'sports', 'Complete sports facility with indoor and outdoor games', 'Sports Block', 'sports@eduhub.com', '06:00 AM - 09:00 PM', 100),
    ('Medical Center', 'medical', '24x7 medical facility with qualified doctors and nurses', 'Administrative Block, Ground Floor', 'medical@eduhub.com', '24 Hours', 10),
    ('Student Counseling Center', 'counseling', 'Professional counseling services for academic and personal guidance', 'Student Services Block', 'counseling@eduhub.com', '09:00 AM - 05:00 PM', 5);

-- Insert sample leaderboard entries
INSERT INTO leaderboard (student_id, points, category, reason, awarded_by) VALUES
    ((SELECT id FROM users WHERE email = 'jane.smith@student.eduhub.com'), 100, 'academic', 'Excellent performance in Database assignment', (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com')),
    ((SELECT id FROM users WHERE email = 'john.doe@student.eduhub.com'), 75, 'participation', 'Active participation in class discussions', (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com')),
    ((SELECT id FROM users WHERE email = 'emma.davis@student.eduhub.com'), 90, 'academic', 'Outstanding algorithm implementation', (SELECT id FROM users WHERE email = 'prof.john.smith@eduhub.com')),
    ((SELECT id FROM users WHERE email = 'alice.brown@student.eduhub.com'), 50, 'social', 'Helping junior students with projects', (SELECT id FROM users WHERE email = 'prof.sarah.wilson@eduhub.com'));

-- Success notification
DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🎉 EDUHUB DATABASE SETUP COMPLETED SUCCESSFULLY! 🎉';
    RAISE NOTICE '';
    RAISE NOTICE '📊 Database Summary:';
    RAISE NOTICE '==================';
    RAISE NOTICE '👥 Users: % total (% students, % faculty, % admin)', 
        (SELECT COUNT(*) FROM users),
        (SELECT COUNT(*) FROM users WHERE role = 'student'),
        (SELECT COUNT(*) FROM users WHERE role = 'faculty'),
        (SELECT COUNT(*) FROM users WHERE role = 'admin');
    RAISE NOTICE '📚 Courses: %', (SELECT COUNT(*) FROM courses);
    RAISE NOTICE '📝 Assignments: %', (SELECT COUNT(*) FROM assignments);
    RAISE NOTICE '🍽️ Canteen Items: %', (SELECT COUNT(*) FROM canteen_items);
    RAISE NOTICE '📢 Announcements: %', (SELECT COUNT(*) FROM announcements);
    RAISE NOTICE '🏫 Campus Resources: %', (SELECT COUNT(*) FROM campus_resources);
    RAISE NOTICE '';
    RAISE NOTICE '✅ All tables created successfully';
    RAISE NOTICE '✅ All indexes added for optimal performance';
    RAISE NOTICE '✅ All views created for easy data access';
    RAISE NOTICE '✅ All triggers set up for automation';
    RAISE NOTICE '✅ Sample data inserted for testing';
    RAISE NOTICE '';
    RAISE NOTICE '🚀 Your EduHub platform is ready to use!';
    RAISE NOTICE '';
END $$;
