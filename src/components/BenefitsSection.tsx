import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Brain, Palette, BarChart3, Calendar, TrendingUp, Zap } from "lucide-react"

const BenefitsSection = () => {
  const benefits = [
    "Auto-generates Content", "Trending Topics", "Smart Scheduling", "Real-time Analysis",
    "Data-backed Strategy", "Cross-platform", "AI-powered", "Autopilot Mode",
    "Brand Consistency", "Growth Focused"
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Brain className="w-3 h-3 mr-1" />
            Jomobit Does It All
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            All done by AI.<br />
            <span className="text-muted-foreground">So you can focus on the bigger picture.</span>
          </h2>
        </div>

        {/* Benefits Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {benefits.map((benefit, index) => (
            <Badge 
              key={index} 
              variant={index === benefits.length - 1 ? "default" : "outline"}
              className={`px-4 py-2 text-sm ${
                index === benefits.length - 1 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border/40 text-muted-foreground hover:border-primary/30 transition-colors"
              }`}
            >
              {benefit}
            </Badge>
          ))}
          <Button variant="premium" size="sm" className="ml-4">
            <Zap className="w-3 h-3 mr-1" />
            Start Automating
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Feature */}
          <Card className="bg-gradient-primary p-8 border-none relative overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Auto-generates scroll-stopping content</h3>
                <p className="text-white/80">Posts, carousels, videos & ads</p>
              </div>
              
              <div className="absolute bottom-8 right-8 opacity-60">
                <div className="text-6xl font-bold text-white/20">AI</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute bottom-16 left-8 w-8 h-8 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-500" />
          </Card>

          {/* Right Feature */}
          <Card className="bg-secondary/10 p-8 border border-border/40 relative overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground font-semibold">Analytics</span>
                
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center ml-4">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground font-semibold">Growth</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-foreground">Analyzes & Improves</h3>
                  <Badge className="bg-primary text-primary-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    Real-time
                  </Badge>
                </div>
                
                <p className="text-muted-foreground">
                  Analyzes results & sends improvement tips in real-time<br />
                  while scheduling & publishing across all major platforms<br />
                  automatically.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;