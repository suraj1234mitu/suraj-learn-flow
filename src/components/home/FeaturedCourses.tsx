import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/mockData";

export function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Courses</h2>
            <p className="text-muted-foreground">
              Start your coding journey with our most popular courses
            </p>
          </div>
          <Link to="/courses" className="mt-4 md:mt-0">
            <Button variant="ghost">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <div className="bg-card rounded-xl border overflow-hidden card-hover group">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <div className="absolute inset-0 gradient-primary opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary/50" />
                  </div>
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant={course.isFree ? "default" : "secondary"} className={course.isFree ? "gradient-success" : ""}>
                      {course.isFree ? "FREE" : `₹${course.price}`}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <p className="text-sm text-muted-foreground mb-4">
                    By {course.instructor}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{(course.students / 1000).toFixed(1)}k</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
