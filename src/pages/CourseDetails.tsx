import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Play, Clock, Users, Star, BookOpen, Award, 
  ChevronDown, Check, Lock, Share2, Heart 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { courses, curriculum } from "@/data/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id)) || courses[0];
  const [isEnrolled, setIsEnrolled] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-card border-b">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
                {course.isFree && <Badge className="gradient-success">FREE</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{course.instructor.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created by</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Right - Course Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-card rounded-xl border shadow-lg overflow-hidden">
                {/* Preview */}
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="h-16 w-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold">
                      {course.isFree ? "Free" : `₹${course.price}`}
                    </span>
                    {!course.isFree && (
                      <span className="text-muted-foreground line-through">₹{course.price * 2}</span>
                    )}
                  </div>

                  {isEnrolled ? (
                    <Link to={`/courses/${course.id}/learn`}>
                      <Button variant="hero" size="lg" className="w-full mb-3">
                        <Play className="mr-2 h-4 w-4" />
                        Continue Learning
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full mb-3"
                      onClick={() => setIsEnrolled(true)}
                    >
                      {course.isFree ? "Enroll Now - Free" : "Buy Now"}
                    </Button>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span>Mobile & TV access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
        
        <Accordion type="multiple" className="space-y-4">
          {curriculum.map((section) => (
            <AccordionItem key={section.id} value={String(section.id)} className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{section.title}</span>
                  <Badge variant="secondary">{section.lessons.length} lessons</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pb-4">
                  {section.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        lesson.completed ? "bg-success/10" : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.completed ? (
                          <div className="h-6 w-6 rounded-full bg-success flex items-center justify-center">
                            <Check className="h-4 w-4 text-success-foreground" />
                          </div>
                        ) : lesson.isFree ? (
                          <Play className="h-5 w-5 text-primary" />
                        ) : (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className={lesson.completed ? "text-muted-foreground" : ""}>
                          {lesson.title}
                        </span>
                        {lesson.isFree && !lesson.completed && (
                          <Badge variant="outline" className="text-xs">Preview</Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* What you'll learn */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Build real-world projects from scratch",
              "Master core programming concepts",
              "Write clean, maintainable code",
              "Debug and troubleshoot like a pro",
              "Prepare for technical interviews",
              "Deploy applications to production",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
