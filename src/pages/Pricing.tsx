import { Check, X, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingPlans } from "@/data/mockData";

export default function Pricing() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="mr-2 h-4 w-4" />
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Learning Path</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free or unlock unlimited access to all courses. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-primary">Most Popular</Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === 0 ? "Free" : `₹${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-muted-foreground">/{plan.duration}</span>
                  )}
                </div>
              </div>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full mb-8"
              >
                {plan.price === 0 ? "Get Started" : "Subscribe Now"}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-50">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <X className="h-3 w-3" />
                    </div>
                    <span className="text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            30-day money-back guarantee • Cancel anytime • Secure payment
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            <span className="text-sm font-medium">Trusted by 50,000+ learners</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
