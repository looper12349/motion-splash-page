import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const ResultsSection = () => {
  const projects = [
    {
      title: "Oslo.",
      subtitle: "Sling Interactive Tech",
      badge: "NEW",
      image: "/lovable-uploads/83d2aa86-8f5d-4549-85d7-15d0b724a233.png",
      bgColor: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Basel",
      subtitle: "Crimson Studio",
      badge: "NEW",
      image: "/lovable-uploads/83d2aa86-8f5d-4549-85d7-15d0b724a233.png",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "London",
      subtitle: "Beyond",
      badge: "",
      image: "/lovable-uploads/83d2aa86-8f5d-4549-85d7-15d0b724a233.png",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            • Results
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Delivering Tangible Results<br />
            <span className="text-muted-foreground">That Propel Your Success</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            At the core of everything we do lies a commitment to delivering<br />
            measurable outcomes that drive your success.
          </p>
          
          <Button variant="hero" size="xl">
            Book a 15-min call
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden bg-card border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.bgColor} p-8 relative`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {project.badge && (
                    <div className="self-start">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {project.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80">{project.subtitle}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <Button variant="premium" size="sm">
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;