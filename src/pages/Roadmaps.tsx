import { ArrowRight, CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { roadmaps } from "@/data/mockData";

const fullRoadmaps = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Master the art of building beautiful, responsive user interfaces",
    duration: "4-6 months",
    color: "from-blue-500 to-cyan-500",
    steps: [
      { title: "HTML & CSS Fundamentals", completed: true },
      { title: "JavaScript Essentials", completed: true },
      { title: "React.js Framework", completed: false },
      { title: "TypeScript", completed: false },
      { title: "Next.js & Advanced Patterns", completed: false },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Build robust server-side applications and APIs",
    duration: "5-7 months",
    color: "from-green-500 to-emerald-500",
    steps: [
      { title: "Python/Node.js Basics", completed: true },
      { title: "Database Design (SQL/NoSQL)", completed: false },
      { title: "RESTful API Development", completed: false },
      { title: "Authentication & Security", completed: false },
      { title: "Cloud Services & Deployment", completed: false },
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Become a complete developer who can build anything",
    duration: "8-12 months",
    color: "from-purple-500 to-pink-500",
    steps: [
      { title: "Frontend Fundamentals", completed: true },
      { title: "Backend Development", completed: false },
      { title: "Database & APIs", completed: false },
      { title: "DevOps Basics", completed: false },
      { title: "System Design", completed: false },
      { title: "Capstone Projects", completed: false },
    ],
  },
  {
    id: 4,
    title: "Data Science & ML",
    description: "Dive into data analysis and machine learning",
    duration: "6-9 months",
    color: "from-orange-500 to-yellow-500",
    steps: [
      { title: "Python for Data Science", completed: false },
      { title: "Statistics & Mathematics", completed: false },
      { title: "Data Analysis with Pandas", completed: false },
      { title: "Machine Learning Fundamentals", completed: false },
      { title: "Deep Learning & Neural Networks", completed: false },
    ],
  },
];

export default function Roadmaps() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Learning Paths</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Path to <span className="text-gradient">Success</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our structured roadmaps to go from beginner to job-ready developer. 
            Each path is carefully designed by industry experts.
          </p>
        </div>

        {/* Roadmaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullRoadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="bg-card rounded-2xl border overflow-hidden card-hover"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${roadmap.color} p-6 text-white`}>
                <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                  {roadmap.duration}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{roadmap.title}</h3>
                <p className="opacity-90">{roadmap.description}</p>
              </div>

              {/* Steps */}
              <div className="p-6">
                <div className="space-y-4">
                  {roadmap.steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6 text-success shrink-0" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground shrink-0" />
                      )}
                      <div className="flex-1 flex items-center justify-between">
                        <span className={step.completed ? "text-muted-foreground line-through" : ""}>
                          {step.title}
                        </span>
                        {index === roadmap.steps.findIndex((s) => !s.completed) && (
                          <Badge>Current</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/courses" className="block mt-6">
                  <Button variant="outline" className="w-full">
                    Start This Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-muted-foreground mb-6">
              Take our quick quiz to find the perfect learning path based on your goals and experience level.
            </p>
            <Button variant="hero" size="lg">
              Take the Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
