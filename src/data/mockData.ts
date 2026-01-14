// Mock data for the educational platform

export const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "42 hours",
    lessons: 156,
    students: 45230,
    rating: 4.9,
    price: 0,
    isFree: true,
    category: "Web Development",
    level: "Beginner",
    description: "Master HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Python Programming Masterclass",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "38 hours",
    lessons: 128,
    students: 32100,
    rating: 4.8,
    price: 999,
    isFree: false,
    category: "Python",
    level: "Beginner",
    description: "Learn Python from scratch to advanced. Build real projects and understand OOP concepts.",
    tags: ["Python", "OOP", "Django", "Flask"],
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "52 hours",
    lessons: 200,
    students: 28500,
    rating: 4.9,
    price: 1499,
    isFree: false,
    category: "DSA",
    level: "Intermediate",
    description: "Master DSA with hands-on problem solving. Crack coding interviews with confidence.",
    tags: ["Arrays", "Trees", "Graphs", "DP", "Sorting"],
  },
  {
    id: 4,
    title: "Java Complete Course",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "45 hours",
    lessons: 175,
    students: 25800,
    rating: 4.7,
    price: 799,
    isFree: false,
    category: "Java",
    level: "Beginner",
    description: "From Java basics to advanced concepts including Spring Boot and microservices.",
    tags: ["Java", "OOP", "Spring Boot", "JDBC"],
  },
  {
    id: 5,
    title: "Machine Learning with Python",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "35 hours",
    lessons: 98,
    students: 18200,
    rating: 4.8,
    price: 1999,
    isFree: false,
    category: "AI/ML",
    level: "Advanced",
    description: "Deep dive into ML algorithms, neural networks, and real-world AI applications.",
    tags: ["ML", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    id: 6,
    title: "React.js Complete Guide",
    instructor: "Suraj Kumar",
    thumbnail: "/placeholder.svg",
    duration: "28 hours",
    lessons: 85,
    students: 38900,
    rating: 4.9,
    price: 0,
    isFree: true,
    category: "Web Development",
    level: "Intermediate",
    description: "Build modern web apps with React. Hooks, Context, Redux, and more.",
    tags: ["React", "Redux", "Hooks", "TypeScript"],
  },
];

export const categories = [
  { id: 1, name: "Web Development", icon: "Code", count: 24 },
  { id: 2, name: "Python", icon: "Terminal", count: 18 },
  { id: 3, name: "Java", icon: "Coffee", count: 15 },
  { id: 4, name: "DSA", icon: "GitBranch", count: 12 },
  { id: 5, name: "AI/ML", icon: "Brain", count: 8 },
  { id: 6, name: "Database", icon: "Database", count: 10 },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer at Google",
    avatar: "/placeholder.svg",
    content: "SurajUltimate helped me land my dream job at Google. The DSA course is incredibly well-structured!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg",
    content: "The web development bootcamp is amazing! I went from zero to building complete web applications.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Data Scientist at Amazon",
    avatar: "/placeholder.svg",
    content: "Best Python and ML courses I've ever taken. Suraj explains complex concepts so simply!",
    rating: 5,
  },
];

export const roadmaps = [
  {
    id: 1,
    title: "Frontend Developer",
    duration: "4-6 months",
    steps: ["HTML & CSS", "JavaScript", "React.js", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "Backend Developer",
    duration: "5-7 months",
    steps: ["Python/Java", "Databases", "APIs", "Node.js", "Cloud Services"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    duration: "8-12 months",
    steps: ["Frontend", "Backend", "DevOps", "System Design", "Projects"],
  },
];

export const blogs = [
  {
    id: 1,
    title: "10 Tips to Ace Your Coding Interview",
    excerpt: "Master the art of coding interviews with these proven strategies...",
    author: "Suraj Kumar",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Career",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Why React is Still the King in 2024",
    excerpt: "Exploring why React continues to dominate the frontend ecosystem...",
    author: "Suraj Kumar",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Web Development",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Getting Started with Machine Learning",
    excerpt: "A beginner's guide to understanding ML concepts and algorithms...",
    author: "Suraj Kumar",
    date: "2024-01-05",
    readTime: "10 min",
    category: "AI/ML",
    thumbnail: "/placeholder.svg",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: 0,
    duration: "Forever",
    features: [
      "Access to free courses",
      "Community support",
      "Basic notes",
      "Course certificates",
    ],
    notIncluded: [
      "Premium courses",
      "1-on-1 mentorship",
      "Priority support",
      "Downloadable resources",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 499,
    duration: "per month",
    popular: true,
    features: [
      "All free features",
      "Access to all courses",
      "Downloadable resources",
      "Priority support",
      "Progress tracking",
    ],
    notIncluded: [
      "1-on-1 mentorship",
      "Career guidance",
    ],
  },
  {
    id: 3,
    name: "Ultimate",
    price: 999,
    duration: "per month",
    features: [
      "All Pro features",
      "1-on-1 mentorship",
      "Career guidance",
      "Resume review",
      "Mock interviews",
      "Lifetime access",
    ],
    notIncluded: [],
  },
];

export const userProgress = {
  enrolledCourses: [
    { courseId: 1, progress: 65, lastAccessed: "2024-01-15" },
    { courseId: 3, progress: 30, lastAccessed: "2024-01-14" },
    { courseId: 6, progress: 100, lastAccessed: "2024-01-10" },
  ],
  completedLessons: 89,
  totalHoursLearned: 42,
  certificatesEarned: 1,
  currentStreak: 7,
};

export const notifications = [
  { id: 1, title: "New course available!", message: "Check out our new Python Advanced course", time: "2 hours ago", read: false },
  { id: 2, title: "Congratulations!", message: "You completed React.js Complete Guide", time: "1 day ago", read: false },
  { id: 3, title: "Weekly reminder", message: "Continue your learning streak!", time: "2 days ago", read: true },
];

export const curriculum = [
  {
    id: 1,
    title: "Getting Started",
    lessons: [
      { id: 1, title: "Course Introduction", duration: "5:30", isFree: true, completed: true },
      { id: 2, title: "Setting Up Environment", duration: "12:45", isFree: true, completed: true },
      { id: 3, title: "Your First Program", duration: "18:20", isFree: false, completed: false },
    ],
  },
  {
    id: 2,
    title: "Fundamentals",
    lessons: [
      { id: 4, title: "Variables and Data Types", duration: "22:15", isFree: false, completed: false },
      { id: 5, title: "Control Flow", duration: "25:30", isFree: false, completed: false },
      { id: 6, title: "Functions", duration: "28:45", isFree: false, completed: false },
    ],
  },
  {
    id: 3,
    title: "Advanced Concepts",
    lessons: [
      { id: 7, title: "Object-Oriented Programming", duration: "35:20", isFree: false, completed: false },
      { id: 8, title: "Error Handling", duration: "18:40", isFree: false, completed: false },
      { id: 9, title: "Working with APIs", duration: "42:15", isFree: false, completed: false },
    ],
  },
];
