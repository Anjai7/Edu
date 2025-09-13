# API Routes Documentation

## Authentication
All authenticated routes require a valid Supabase session.

## Study Buddy API

### GET /api/study/recommendations
Get personalized study recommendations based on learning style.

**Query Parameters:**
- `learning_style`: visual|auditory|kinesthetic|reading
- `topic`: string (current study topic)

**Response:**
```json
{
  "recommendations": [
    "Create mind maps for complex concepts",
    "Use diagrams and flowcharts to break down information"
  ],
  "learning_style": "visual",
  "topic": "Calculus derivatives"
}
```

### POST /api/study/session
Start or end a focus session.

**Body:**
```json
{
  "action": "start|end",
  "title": "Calculus Study",
  "subject": "Mathematics",
  "duration": 60
}
```

## Notes API

### GET /api/notes
Get user's notes with optional filtering.

**Query Parameters:**
- `subject`: string (filter by subject)
- `collaborative`: boolean (filter collaborative notes)

### POST /api/notes
Create a new note.

**Body:**
```json
{
  "title": "Calculus Notes",
  "content": "Derivative rules...",
  "subject": "Mathematics",
  "tags": ["calculus", "derivatives"],
  "is_collaborative": false
}
```

### PUT /api/notes/:id
Update an existing note (real-time collaboration).

## Budget API

### GET /api/budget
Get budget overview and spending analysis.

### POST /api/budget/expense
Add a new expense.

**Body:**
```json
{
  "category": "textbooks|supplies|food|transport|entertainment|other",
  "amount": 25.99,
  "description": "Calculus textbook",
  "date": "2024-01-15"
}
```

## Wellness API

### GET /api/wellness/stats
Get wellness statistics and trends.

### POST /api/wellness/entry
Add daily wellness check-in.

**Body:**
```json
{
  "mood_score": 7,
  "stress_level": 4,
  "sleep_hours": 7.5,
  "exercise_minutes": 30,
  "notes": "Feeling good today"
}
```

## Campus Resources API

### GET /api/campus/resources
Get campus resources with filtering.

**Query Parameters:**
- `type`: study_space|lab|food|library|other
- `available`: boolean

### GET /api/campus/resources/:id
Get detailed information about a specific resource.
