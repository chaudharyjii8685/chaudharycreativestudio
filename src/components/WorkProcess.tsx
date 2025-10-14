import { Lightbulb, Palette, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Understanding your vision and requirements"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating stunning visual concepts"
  },
  {
    icon: Cpu,
    title: "Develop",
    description: "Building with cutting-edge technology"
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Launching your project to success"
  }
];

const WorkProcess = () => {
  return (
    <section id="process" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground handmade-text">
            Our streamlined creative process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-card rounded-full border-4 border-primary glow-hover mx-auto">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
