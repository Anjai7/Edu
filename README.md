# EduHub - Comprehensive Educational Platform

EduHub is a comprehensive educational platform built with [Remix](https://remix.run) and TypeScript, designed to support students throughout their academic journey. It combines AI-powered learning tools, productivity features, and wellness tracking in one unified platform.

## Features

### 🤖 Study & Learning Tools
- **AI-powered Study Buddy**: Adapts to your learning style (visual, auditory, kinesthetic, reading/writing)
- **Collaborative Note-taking**: Real-time synthesis and sharing capabilities
- **Spaced Repetition System**: Integrated with your actual coursework for optimal retention

### 📅 Productivity & Organization
- **Smart Calendar**: Balances study time, deadlines, and mental health breaks
- **Project Management**: Specifically designed for group assignments and collaboration
- **Focus Sessions**: Gamified distraction blocker with progress tracking

### 👥 Creative & Social
- **Study Groups**: Platform for finding collaborators and joining study groups
- **Digital Portfolio**: Showcase your student work and projects
- **Community Features**: Connect with peers and share resources

### 💰 Practical Life Management
- **Budget Tracker**: Student finances with textbook/supplies optimization
- **Campus Resource Finder**: Locate study spots, labs, food options, and amenities
- **Course Planning Assistant**: Consider prerequisites, professor ratings, and schedule optimization

### 🧘 Mental Health & Wellness
- **Wellness Tracker**: Monitor mental health and academic stress levels
- **Mood & Sleep Tracking**: Daily check-ins with trend analysis
- **Stress Management**: Guided resources and emergency support contacts

## Technology Stack

- **Frontend**: Remix with TypeScript and React
- **Styling**: Tailwind CSS with responsive design
- **Database**: Supabase (PostgreSQL)
- **Icons**: Heroicons
- **Charts**: Recharts for analytics visualization
- **Forms**: React Hook Form with Zod validation

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd Edu
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your Supabase credentials:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key

4. Start the development server:
```bash
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Database Setup

The application uses Supabase as its database. You'll need to create the following tables:

- `users` - User profiles and preferences
- `courses` - Course information and ratings  
- `notes` - Collaborative notes and content
- `study_sessions` - Focus session tracking
- `assignments` - Assignment and project management
- `study_groups` - Group collaboration features
- `flashcards` - Spaced repetition system
- `budget_entries` - Financial tracking
- `campus_resources` - Campus facility information
- `wellness_entries` - Mental health tracking

### Project Structure

```
app/
├── components/          # Reusable UI components
├── routes/             # Page routes and API endpoints
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and Supabase client
└── styles/             # Additional styling

public/                 # Static assets
```

## Deployment

First, build your app for production:

```bash
npm run build
```

Then run the app in production mode:

```bash
npm start
```

### Deployment Options

The app can be deployed to various platforms:
- **Vercel** (recommended for Remix)
- **Netlify**
- **Railway**
- **Fly.io**
- **AWS/Google Cloud/Azure**

Make sure to set your environment variables in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Features Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced AI tutoring capabilities
- [ ] Integration with learning management systems (LMS)
- [ ] Real-time collaborative editing
- [ ] Advanced analytics and insights
- [ ] Voice-to-text note taking
- [ ] Calendar integration (Google Calendar, Outlook)
- [ ] Push notifications for deadlines and wellness reminders

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@eduhub.com or join our Discord community.
