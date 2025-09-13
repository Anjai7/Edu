export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  learning_style?: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
  credits: number;
  professor: string;
  rating?: number;
  prerequisites?: string[];
  created_at: string;
}

export interface StudySession {
  id: string;
  user_id: string;
  title: string;
  subject: string;
  duration: number; // in minutes
  focus_score: number;
  notes?: string;
  session_date: string;
  created_at: string;
}

export interface Note {
  id: string;
  user_id: string;
  title: string;
  content: string;
  subject: string;
  tags?: string[];
  is_collaborative: boolean;
  collaborators?: string[];
  created_at: string;
  updated_at: string;
}

export interface Assignment {
  id: string;
  user_id: string;
  course_id: string;
  title: string;
  description?: string;
  due_date: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in_progress' | 'completed';
  is_group_assignment: boolean;
  group_members?: string[];
  created_at: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description?: string;
  subject: string;
  max_members: number;
  current_members: string[];
  meeting_schedule?: string;
  location?: string;
  is_virtual: boolean;
  created_by: string;
  created_at: string;
}

export interface FlashCard {
  id: string;
  user_id: string;
  question: string;
  answer: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  next_review: string;
  review_count: number;
  success_rate: number;
  created_at: string;
}

export interface Budget {
  id: string;
  user_id: string;
  category: 'textbooks' | 'supplies' | 'food' | 'transport' | 'entertainment' | 'other';
  amount: number;
  description: string;
  date: string;
  is_recurring: boolean;
  created_at: string;
}

export interface CampusResource {
  id: string;
  name: string;
  type: 'study_space' | 'lab' | 'food' | 'library' | 'other';
  location: string;
  description?: string;
  capacity?: number;
  amenities?: string[];
  hours?: string;
  rating?: number;
  is_available: boolean;
}

export interface WellnessEntry {
  id: string;
  user_id: string;
  mood_score: number; // 1-10
  stress_level: number; // 1-10
  sleep_hours: number;
  exercise_minutes: number;
  notes?: string;
  date: string;
  created_at: string;
}
