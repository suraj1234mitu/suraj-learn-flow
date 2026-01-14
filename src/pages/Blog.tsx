import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/data/mockData";

const allBlogs = [
  ...blogs,
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    excerpt: "A deep dive into one of JavaScript's most powerful features...",
    author: "Suraj Kumar",
    date: "2024-01-01",
    readTime: "7 min",
    category: "JavaScript",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js",
    excerpt: "Complete guide to building scalable APIs with Express and Node...",
    author: "Suraj Kumar",
    date: "2023-12-28",
    readTime: "12 min",
    category: "Backend",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Git & GitHub for Beginners",
    excerpt: "Master version control and collaboration with this beginner guide...",
    author: "Suraj Kumar",
    date: "2023-12-25",
    readTime: "9 min",
    category: "Tools",
    thumbnail: "/placeholder.svg",
  },
];

const categories = ["All", "Career", "Web Development", "AI/ML", "JavaScript", "Backend", "Tools"];

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn, Grow, <span className="text-gradient">Succeed</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, tutorials, and insights to help you become a better developer.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-card rounded-2xl border overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center">
                <div className="gradient-primary opacity-20 absolute inset-0" />
                <span className="text-6xl">📚</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">Featured</Badge>
                <h2 className="text-2xl font-bold mb-3">{allBlogs[0].title}</h2>
                <p className="text-muted-foreground mb-4">{allBlogs[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{allBlogs[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(allBlogs[0].date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{allBlogs[0].readTime}</span>
                  </div>
                </div>
                <Button variant="hero" className="w-fit">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.slice(1).map((blog) => (
            <article key={blog.id} className="bg-card rounded-xl border overflow-hidden card-hover">
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                <div className="gradient-primary opacity-10 absolute inset-0" />
                <span className="text-4xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {blog.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </Layout>
  );
}
