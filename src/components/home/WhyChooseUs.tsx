import { Code, Video, Award, Headphones, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "HD Video Lessons",
    description: "Crystal clear tutorials in Hindi & English with lifetime access.",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world projects to add to your portfolio.",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn recognized certificates to boost your resume.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help from our community and mentors anytime.",
  },
  {
    icon: Rocket,
    title: "Career Ready",
    description: "Interview prep, resume building, and job placement support.",
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description: "Access courses on any device, anytime, anywhere.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">SurajUltimate?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful developers who started their journey with us. Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
