import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      originalPrice: "$450",
      period: "/ Month",
      badge: "Most Pick",
      description: "Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.",
      features: [
        "100+ Projects",
        "75+ Revisions",
        "All templates unlocked",
        "Basic support"
      ]
    },
    {
      name: "Premium",
      price: "$2,599",
      period: "/ Month",
      badge: "Recommended",
      description: "Our pro pricing plan is designed for businesses looking for advanced features and premium support",
      features: [
        "650+ Projects",
        "250+ Revisions",
        "All templates unlocked",
        "Priority support"
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • Pricing
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Plans for all businesses, Suitable for<br />
            <span className="text-muted-foreground">Personal, Agencies, Startups.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Our pricing plans are designed to make getting started as effortless as possible. With<br />
            flexible options tailored to suit a variety of needs and budgets.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 border-border/40 transition-all duration-500 hover:shadow-glow ${
                index === 0 ? 'bg-gradient-dark' : 'bg-secondary/5'
              }`}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    {index === 0 ? (
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  {plan.badge}
                </Badge>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                  {plan.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through ml-2">{plan.originalPrice}</span>
                  )}
                </div>
                {index === 0 && (
                  <div className="w-4 h-4 bg-primary rounded-full" />
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {plan.features.slice(0, 2).map((feature, featureIndex) => (
                  <Badge 
                    key={featureIndex}
                    variant="outline" 
                    className="justify-center py-2 border-border/40 text-muted-foreground"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* Additional Features */}
              <div className="space-y-3 mb-8">
                {plan.features.slice(2).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant={index === 0 ? "hero" : "premium"} 
                size="lg" 
                className="w-full"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;