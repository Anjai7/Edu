# EduHub Gmail Authentication Setup 🚀

## Quick Setup for Gmail Login

Your EduHub now has a simple Gmail-only authentication system for both students and staff!

### 🎯 What's implemented:
- **Student Login** 🎓 - Blue themed Gmail authentication
- **Staff Login** 👨‍🏫 - Green themed Gmail authentication
- **User profiles** - Shows name, email, and user type in navigation
- **Session management** - Persistent login with logout functionality

### ⚡ Quick Start (5 minutes):

#### 1. Get Supabase Credentials
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project (wait 1-2 minutes for setup)
3. Go to **Settings** → **API** and copy:
   - Project URL
   - Anon public key

#### 2. Update Environment Variables
Update your `.env` file:
```env
SUPABASE_URL=your-project-url-here
SUPABASE_ANON_KEY=your-anon-key-here
```

#### 3. Configure Google OAuth
1. In Supabase dashboard: **Authentication** → **Providers**
2. Enable **Google** provider
3. Add these URLs:
   - Site URL: `http://localhost:3000`
   - Redirect URL: `http://localhost:3000/auth/callback`

#### 4. Set up Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add redirect URI: `https://your-project.supabase.co/auth/v1/callback`
6. Copy Client ID and Secret to Supabase

### 🎮 How to Use:

1. **Start your server**: `npm run dev`
2. **Visit**: `http://localhost:3000`
3. **Choose login type**: Student 🎓 or Staff 👨‍🏫
4. **Click "Continue with Gmail"**
5. **Authenticate with Google**
6. **Access your dashboard!**

### 🔧 Features:

#### **Smart Login Flow**
- Choose between Student or Staff account type
- Single Gmail button for authentication
- Automatic redirect after login
- User type stored and displayed in navigation

#### **Personalized Dashboard**
- Greeting with user's name from Gmail
- User type indicator (🎓 for students, 👨‍🏫 for staff)
- Color-coded user avatar (blue for students, green for staff)
- User info displayed in navigation

#### **Session Management**
- Persistent login sessions
- Secure logout that clears all data
- Automatic redirect to login when not authenticated

### 🎨 Visual Features:

#### **Login Page**
- Beautiful gradient background
- Clear choice between Student and Staff
- Loading states and error handling
- Professional Gmail integration

#### **Navigation**
- User's Gmail name and email displayed
- User type badge (Student/Staff)
- Color-coded avatar based on user type
- Clean logout button

### 🔒 Security:
- Uses Supabase's secure OAuth flow
- No passwords stored locally
- Session tokens managed securely
- Automatic session cleanup on logout

### 🛠️ Troubleshooting:

**Can't see login page?**
- Make sure your server is running: `npm run dev`
- Check that you're visiting `http://localhost:3000`

**Google login not working?**
- Verify your Supabase project URL and key in `.env`
- Check Google OAuth setup in both Google Console and Supabase
- Ensure redirect URLs match exactly

**Getting errors?**
- Check browser console for error messages
- Verify all environment variables are set
- Make sure Supabase project is active

### 🎯 Ready to Go!

Your EduHub now has professional Gmail authentication! Users can choose their account type (Student/Staff) and sign in with their Gmail accounts. The system remembers their preferences and shows personalized information throughout the app.

**Test it out:**
1. Visit your app
2. Try both Student and Staff login options
3. Check that user info appears correctly in the navigation
4. Test the logout functionality

Need help? The authentication system is designed to be simple and user-friendly! 🚀