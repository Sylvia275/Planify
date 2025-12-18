// src/data/allPlans.js

const allPlans = [
  {
    id: 1,
    title: "University Entrance Exam Preparation for Block A1",
    duration: "90 days",
    info: "Detailed plan for Math - Physics - English",
    name: "University Entrance Exam Preparation for Block A1",
    authorId: "user123",
    isPublic: true,
    likes: 245,
    description: "Comprehensive review plan for the National High School Exam (Block A1). Includes theory, advanced exercises, and mock exams.",
    stages: [
      {
        name: "Phase 1: Foundation",
        duration: "30 days",
        tasks: ["Review 11th grade curriculum", "Practice basic exercises in Math - Physics - English", "Weekly tests"]
      },
      {
        name: "Phase 2: Advanced",
        duration: "40 days",
        tasks: ["Study difficult topics", "Solve past exam papers", "Analyze mistakes"]
      },
      {
        name: "Phase 3: Comprehensive Review",
        duration: "20 days",
        tasks: ["Complete full mock exams", "Review weak knowledge areas", "Maintain health and mental well-being"]
      }
    ]
  },
  {
    id: 2,
    title: "Learn Conversational English from Zero",
    duration: "30 days",
    info: "Speak confidently in daily life",
    authorId: "user456",
    isPublic: true,
    likes: 412,
    description: "Practical speaking program with the 500 most common vocabulary words and basic conversational sentence patterns.",
    stages: [
      {
        name: "Week 1: Pronunciation & Basic Vocabulary",
        duration: "7 days",
        tasks: ["Learn the IPA chart", "500 essential vocabulary words", "Daily pronunciation practice"]
      },
      {
        name: "Weeks 2-4: Speaking Practice by Topic",
        duration: "21 days",
        tasks: ["Greetings - Introducing yourself", "Food - Shopping", "Travel - Asking for directions", "Work - Job interviews"]
      }
    ]
  },
  {
    id: 3,
    title: "Gym Workout Plan for Muscle Gain (Beginners)",
    duration: "12 weeks",
    info: "Full-body 3 sessions/week",
    authorId: "user123",
    isPublic: true,
    likes: 578,
    description: "Training plan designed for beginners, focusing on muscle gain and fat loss with an easy-to-follow schedule.",
    stages: [
      {
        name: "Weeks 1-4: Adaptation & Building Foundation",
        tasks: ["Learn basic techniques", "Full-body workouts 3 times/week", "Gradually increase weights"]
      },
      {
        name: "Weeks 5-12: Increase Intensity",
        tasks: ["Add more sets/reps", "Track nutrition", "Focus on rest and recovery"]
      }
    ]
  },
  {
    id: 4,
    title: "Learn React Programming from Basic to Advanced",
    duration: "60 days",
    info: "Build real-world projects",
    authorId: "user789",
    isPublic: true,
    likes: 892,
    description: "Journey from zero to being able to freelance with React. Covers hooks, router, redux, APIs, and more.",
    stages: [
      { name: "Weeks 1-2: JSX & Components", tasks: ["Set up environment", "State & Props", "Small project"] },
      { name: "Weeks 3-6: Hooks & Advanced Topics", tasks: ["useEffect, useContext", "React Router", "Custom hooks"] },
      { name: "Weeks 7-8: Final Course Project", tasks: ["Build todo app with authentication", "Deploy to Vercel"] }
    ]
  },
  {
    id: 5,
    title: "Scientific Weight Loss in 8 Weeks",
    duration: "56 days",
    info: "Combine diet + exercise",
    authorId: "user234",
    isPublic: true,
    likes: 334,
    description: "Safe and sustainable plan to lose 5-8kg with sample meal plans and home workouts."
  },
  {
    id: 6,
    title: "IELTS Preparation for 7.0+",
    duration: "120 days",
    info: "Band-specific strategies",
    authorId: "user456",
    isPublic: true,
    likes: 667,
    description: "Detailed roadmap for all 4 skills: Listening, Reading, Writing, Speaking."
  },
  {
    id: 7,
    title: "Learn Basic Digital Drawing",
    duration: "45 days",
    info: "From basic lines to complete artwork",
    authorId: "user567",
    isPublic: true,
    likes: 289,
    description: "For complete beginners using a tablet or computer mouse."
  },
  {
    id: 8,
    title: "Effective Personal Finance Management",
    duration: "30 days",
    info: "Smart saving & investing",
    authorId: "user123",
    isPublic: true,
    likes: 156,
    description: "Spending habits, emergency fund, basic investing for young adults."
  },
  {
    id: 9,
    title: "National High School Exam Preparation - Literature",
    duration: "60 days",
    info: "Focus on key works analysis",
    authorId: "user890",
    isPublic: true,
    likes: 201,
    description: "Summaries of key works, methods for social and literary argument essays."
  },
  {
    id: 10,
    title: "Learn Basic Guitar in 30 Days",
    duration: "30 days",
    info: "Play 10 popular songs",
    authorId: "user234",
    isPublic: true,
    likes: 423,
    description: "Basic chords, strumming patterns, accompaniment for singing."
  },
  {
    id: 11,
    title: "Build a YouTube Channel from 0 to 1K Subscribers",
    duration: "90 days",
    info: "Content strategy + SEO",
    authorId: "user789",
    isPublic: true,
    likes: 512,
    description: "Content planning, video optimization, increasing engagement."
  },
  {
    id: 12,
    title: "Basic Home Baking",
    duration: "14 days",
    info: "10 easy recipes",
    authorId: "user567",
    isPublic: true,
    likes: 378,
    description: "Cookies, cupcakes, bread – no professional oven required."
  },
  {
    id: 13,
    title: "Grade 10 Entrance Exam Preparation - Math",
    duration: "75 days",
    info: "Focus on key topics",
    authorId: "user890",
    isPublic: true,
    likes: 298,
    description: "Review geometry, algebra, and common real-world problems."
  },
  {
    id: 14,
    title: "Daily Meditation & Mindfulness",
    duration: "21 days",
    info: "Build habits to reduce stress",
    authorId: "user123",
    isPublic: true,
    likes: 267,
    description: "Guided meditation sessions, breathing techniques, emotion journaling."
  },
  {
    id: 15,
    title: "Learn Python for Beginners",
    duration: "45 days",
    info: "From basics to small projects",
    authorId: "user123",
    isPublic: true,
    likes: 734,
    description: "Variables, functions, lists, dictionaries, basic OOP, and mini projects."
  }
];

export default allPlans;