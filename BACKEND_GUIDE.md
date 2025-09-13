# EduHub Backend Implementation Guide

## Overview
This document provides comprehensive backend implementation details for the EduHub student web application.

## Architecture

### Technology Stack
- **Framework**: Remix (TypeScript)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth + Custom Session Management
- **File Storage**: AWS S3 (or Supabase Storage)
- **Email**: SMTP (Gmail/SendGrid)
- **Payments**: Stripe
- **Push Notifications**: Firebase

### Project Structure
```
app/
├── lib/
│   ├── supabase.server.ts     # Server-side Supabase client
│   ├── supabase.client.ts     # Client-side Supabase client
│   ├── auth.server.ts         # Authentication & sessions
│   ├── email.server.ts        # Email service
│   └── storage.server.ts      # File upload service
├── routes/
│   ├── api.users.ts           # User management API
│   ├── api.assignments.ts     # Assignment management API
│   ├── api.attendance.ts      # Attendance tracking API
│   └── ... (other API routes)
└── types/
    └── env.d.ts              # Environment types
```

## Environment Configuration

### Required Environment Variables
Copy `.env.example` to `.env` and fill in your actual values:

```bash
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_supabase_service_key

# Database
DATABASE_URL=your_database_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# File Storage
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your_s3_bucket_name

# Payment Gateway
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Push Notifications
FIREBASE_SERVER_KEY=your_firebase_server_key
FIREBASE_PROJECT_ID=your_firebase_project_id

# App Configuration
NODE_ENV=development
APP_URL=http://localhost:3000
API_BASE_URL=http://localhost:3000/api
```

## Database Setup

### 1. Supabase Setup
1. Create a new Supabase project at https://supabase.com
2. Copy your project URL and anon key from Settings > API
3. Run the SQL schema from `database/comprehensive_schema.sql`

### 2. Schema Overview
The database includes these main tables:
- `users` - Students, teachers, admin users
- `classes` - Class information
- `assignments` - Assignment details
- `assignment_submissions` - Student submissions
- `attendance` - Daily attendance records
- `leaderboard` - Student rankings and points
- `announcements` - School announcements
- `leaves` - Leave requests
- `canteen_items` - Cafeteria menu items
- `orders` - Canteen orders
- `notes` - Study notes and materials
- `notifications` - System notifications

## API Routes

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### Users Management
- `GET /api/users` - Get all users (with pagination)
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Assignments
- `GET /api/assignments` - Get assignments
- `POST /api/assignments` - Create assignment
- `PUT /api/assignments/:id` - Update assignment
- `DELETE /api/assignments/:id` - Delete assignment
- `POST /api/assignments/:id/submit` - Submit assignment

### Attendance
- `GET /api/attendance` - Get attendance records
- `POST /api/attendance` - Mark attendance
- `PUT /api/attendance/:id` - Update attendance

### Leaderboard
- `GET /api/leaderboard` - Get leaderboard data
- `POST /api/leaderboard/points` - Award points

### Canteen
- `GET /api/canteen/items` - Get menu items
- `POST /api/canteen/order` - Place order
- `GET /api/canteen/orders` - Get order history

## Services

### 1. Authentication Service (`app/lib/auth.server.ts`)
Handles user authentication, sessions, and role-based access control.

Key features:
- Session management with secure cookies
- Role-based route protection
- User context retrieval

### 2. Email Service (`app/lib/email.server.ts`)
Manages email notifications for various events.

Email templates for:
- Assignment due reminders
- New announcements
- Leave request status updates
- General notifications

### 3. File Storage Service (`app/lib/storage.server.ts`)
Handles file uploads for assignments, notes, and profile pictures.

Features:
- File type validation
- Size limit enforcement
- AWS S3 integration
- Presigned URL generation

### 4. Supabase Integration
- Server-side client for admin operations
- Client-side client for user operations
- Real-time subscriptions for live updates

## Implementation Steps

### 1. Install Additional Dependencies
```bash
npm install nodemailer @types/nodemailer aws-sdk stripe @stripe/stripe-js firebase-admin
```

### 2. Configure Supabase
1. Set up Row Level Security (RLS) policies
2. Configure authentication providers
3. Set up real-time subscriptions

### 3. Implement Authentication
1. Create login/register pages
2. Set up session management
3. Add role-based route protection

### 4. Set up Email Service
1. Configure SMTP settings
2. Create email templates
3. Implement notification triggers

### 5. File Upload Configuration
1. Set up AWS S3 bucket
2. Configure CORS policies
3. Implement upload endpoints

### 6. Payment Integration
1. Set up Stripe account
2. Implement payment processing
3. Add webhook handlers

## Security Considerations

### 1. Authentication
- Use secure session cookies
- Implement CSRF protection
- Validate user roles on server-side

### 2. Data Validation
- Validate all inputs server-side
- Use TypeScript for type safety
- Implement rate limiting

### 3. File Uploads
- Validate file types and sizes
- Scan for malware
- Use presigned URLs for direct uploads

### 4. API Security
- Implement proper error handling
- Use HTTPS in production
- Add request logging

## Deployment

### 1. Environment Setup
- Set up production environment variables
- Configure SSL certificates
- Set up monitoring and logging

### 2. Database Migration
- Run production database setup
- Configure backup strategies
- Set up connection pooling

### 3. Scaling Considerations
- Implement caching strategies
- Set up CDN for static assets
- Monitor performance metrics

## Testing

### 1. Unit Tests
- Test API routes
- Test authentication functions
- Test data validation

### 2. Integration Tests
- Test database operations
- Test email sending
- Test file uploads

### 3. End-to-End Tests
- Test user workflows
- Test role-based access
- Test critical features

## Monitoring and Maintenance

### 1. Logging
- Application logs
- Error tracking
- Performance monitoring

### 2. Backup Strategy
- Database backups
- File storage backups
- Configuration backups

### 3. Updates
- Security patches
- Dependency updates
- Feature releases
