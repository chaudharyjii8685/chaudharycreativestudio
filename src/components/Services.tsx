import { Video, Image, Database, FileText, Layout, Code } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing with creative transitions and effects"
  },
  {
    icon: Image,
    title: "Image Editing",
    description: "Photo retouching, enhancement, and creative manipulation"
  },
  {
    icon: Database,
    title: "Data Entry",
    description: "Accurate and efficient data management solutions"
  },
  {
    icon: FileText,
    title: "Thumbnails & Graphics",
    description: "Eye-catching thumbnails, banners, posters, and logos"
  },
  {
    icon: Layout,
    title: "Templates & Resumes",
    description: "Custom resume, portfolio, and template designs"
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Modern, responsive websites and mobile applications"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground handmade-text">
            Comprehensive creative solutions for your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-card rounded-lg border-2 border-border glow-hover group"
            >
              <service.icon className="w-12 h-12 mb-4 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
