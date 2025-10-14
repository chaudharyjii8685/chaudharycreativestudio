import { Sparkles, Shield, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Creativity",
    description: "Unique designs that make your brand stand out"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Reliable and transparent communication"
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "High-quality work delivered on time"
  },
  {
    icon: Heart,
    title: "Quality Work",
    description: "Attention to detail in every project"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-spacing bg-card brush-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground handmade-text">
            What sets us apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-background rounded-lg glow-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
