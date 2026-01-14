import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX,
  Maximize, Check, Lock, ChevronLeft, Bookmark, ThumbsUp,
  FileText, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses, curriculum } from "@/data/mockData";

export default function VideoPlayer() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id)) || courses[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(curriculum[0].lessons[0]);
  const [progress, setProgress] = useState(35);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <header className="h-14 border-b bg-card flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link to={`/courses/${id}`}>
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Button>
          </Link>
          <div className="hidden md:block">
            <h1 className="font-semibold truncate max-w-md">{course.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden md:block">35% Complete</span>
          <Progress value={35} className="w-32 h-2 hidden md:block" />
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Video Player Area */}
        <div className="flex-1 flex flex-col">
          {/* Video */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <div className="absolute inset-0 gradient-primary opacity-10" />
            
            {/* Placeholder Video */}
            <div className="text-center text-white">
              <Play className="h-20 w-20 mx-auto mb-4 opacity-50" />
              <p className="text-lg opacity-75">Video Player Placeholder</p>
              <p className="text-sm opacity-50">{currentLesson.title}</p>
            </div>

            {/* Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <Progress value={progress} className="mb-4 h-1" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  <span className="text-white text-sm ml-2">3:45 / {currentLesson.duration}</span>
                </div>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lesson Info & Actions */}
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">{currentLesson.title}</h2>
                <p className="text-muted-foreground">{course.title}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="hero" size="sm">
                  <Check className="mr-2 h-4 w-4" />
                  Mark Complete
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="p-6">
            <Tabs defaultValue="notes">
              <TabsList>
                <TabsTrigger value="notes">
                  <FileText className="mr-2 h-4 w-4" />
                  Notes
                </TabsTrigger>
                <TabsTrigger value="discussion">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Discussion
                </TabsTrigger>
              </TabsList>
              <TabsContent value="notes" className="mt-4">
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="font-semibold mb-4">Lesson Notes</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p>
                      Welcome to this lesson! In this video, we'll cover the fundamentals
                      of the topic and build a solid understanding of the core concepts.
                    </p>
                    <h4 className="text-foreground font-medium mt-4 mb-2">Key Takeaways:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Understanding the basic syntax and structure</li>
                      <li>Best practices for clean code</li>
                      <li>Common pitfalls to avoid</li>
                      <li>Practical examples and use cases</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="discussion" className="mt-4">
                <div className="bg-card rounded-lg border p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Join the Discussion</h3>
                  <p className="text-muted-foreground mb-4">
                    Ask questions and connect with other learners
                  </p>
                  <Button variant="outline">Start a Discussion</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar - Lesson List */}
        <div className="lg:w-80 border-l bg-card overflow-y-auto">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Course Content</h3>
          </div>
          <div className="divide-y">
            {curriculum.map((section) => (
              <div key={section.id} className="p-4">
                <h4 className="font-medium mb-3">{section.title}</h4>
                <div className="space-y-2">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setCurrentLesson(lesson)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                        currentLesson.id === lesson.id
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      }`}
                    >
                      {lesson.completed ? (
                        <div className="h-6 w-6 rounded-full bg-success flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 text-success-foreground" />
                        </div>
                      ) : lesson.isFree || lesson.id <= 3 ? (
                        <Play className="h-5 w-5 shrink-0" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
