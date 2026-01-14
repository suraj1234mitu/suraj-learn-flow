import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  BookOpen, Award, Flame, Clock, Bell, Settings, 
  LogOut, Play, ChevronRight, TrendingUp, Target
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { courses, userProgress, notifications } from "@/data/mockData";

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Please sign in to access your dashboard</h2>
            <Link to="/login">
              <Button variant="hero">Sign In</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const enrolledCourses = userProgress.enrolledCourses.map((ep) => ({
    ...courses.find((c) => c.id === ep.courseId)!,
    progress: ep.progress,
    lastAccessed: ep.lastAccessed,
  }));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border p-6 sticky top-24">
              {/* Profile */}
              <div className="text-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-3xl">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                </div>
                <h3 className="font-bold text-lg">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="mt-2">Pro Member</Badge>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-accent mb-1">
                    <Flame className="h-5 w-5" />
                    <span className="font-bold text-xl">{userProgress.currentStreak}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-primary mb-1">
                    <Award className="h-5 w-5" />
                    <span className="font-bold text-xl">{userProgress.certificatesEarned}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Certificates</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {[
                  { id: "overview", icon: TrendingUp, label: "Overview" },
                  { id: "courses", icon: BookOpen, label: "My Courses" },
                  { id: "notifications", icon: Bell, label: "Notifications" },
                  { id: "settings", icon: Settings, label: "Settings" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Header */}
            <div className="bg-card rounded-xl border p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold mb-1">
                    Welcome back, {user?.name?.split(" ")[0]}! 👋
                  </h1>
                  <p className="text-muted-foreground">
                    Continue your learning journey. You're doing great!
                  </p>
                </div>
                <Link to="/courses">
                  <Button variant="hero">
                    Browse Courses
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card rounded-xl border p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userProgress.enrolledCourses.length}</p>
                    <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl border p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userProgress.completedLessons}</p>
                    <p className="text-sm text-muted-foreground">Lessons Completed</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl border p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{userProgress.totalHoursLearned}h</p>
                    <p className="text-sm text-muted-foreground">Hours Learned</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Learning */}
            <div>
              <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-card rounded-xl border p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="h-16 w-24 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <BookOpen className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                        </p>
                        <div className="flex items-center gap-3">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                      </div>
                      <Link to={`/courses/${course.id}/learn`}>
                        <Button variant="hero" size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Continue
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div>
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl border ${
                      notification.read ? "bg-card" : "bg-primary/5 border-primary/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`h-2 w-2 rounded-full mt-2 ${notification.read ? "bg-muted" : "bg-primary"}`} />
                      <div>
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
