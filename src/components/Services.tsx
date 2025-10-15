import { Video, Image, Database, FileText, Layout, Code } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing with creative transitions and effects",
    details: "Transform your raw footage into compelling stories with our expert video editing services. We specialize in color grading, transitions, motion graphics, and sound design to create professional content for YouTube, social media, advertisements, and more.",
    features: ["Color Grading", "Motion Graphics", "Sound Design", "4K/8K Support", "Fast Turnaround"],
    gradient: "from-primary/20 to-secondary/20"
  },
  {
    icon: Image,
    title: "Image Editing",
    description: "Photo retouching, enhancement, and creative manipulation",
    details: "Bring your images to life with professional photo editing. From basic retouching to complex manipulations, we handle product photography, portraits, real estate, and creative composites with precision and artistic vision.",
    features: ["Photo Retouching", "Background Removal", "Color Correction", "Creative Composites", "Batch Processing"],
    gradient: "from-secondary/20 to-accent/20"
  },
  {
    icon: Database,
    title: "Data Entry",
    description: "Accurate and efficient data management solutions",
    details: "Streamline your business with accurate and efficient data entry services. We handle data migration, digitization, database management, and quality assurance to keep your information organized and accessible.",
    features: ["Fast & Accurate Entry", "Data Migration", "Spreadsheet Management", "Quality Assurance", "Confidential Handling"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    icon: FileText,
    title: "Thumbnails & Graphics",
    description: "Eye-catching thumbnails, banners, posters, and logos",
    details: "Stand out with eye-catching visual designs. We create custom thumbnails for YouTube, social media graphics, posters, banners, and logos that capture attention and represent your brand perfectly.",
    features: ["YouTube Thumbnails", "Social Media Graphics", "Logo Design", "Banner & Poster Design", "Brand Identity"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    icon: Layout,
    title: "Templates & Resumes",
    description: "Custom resume, portfolio, and template designs",
    details: "Make a lasting impression with professionally designed templates. From resumes and CVs to presentation templates and portfolio designs, we create layouts that showcase your skills and experience effectively.",
    features: ["Professional Resume Design", "Portfolio Layouts", "Presentation Templates", "Cover Letters", "LinkedIn Optimization"],
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Modern, responsive websites and mobile applications",
    details: "Build your digital presence with modern web and app development. We create responsive websites, web applications, and mobile apps using the latest technologies, ensuring performance, security, and user experience.",
    features: ["Responsive Web Design", "Custom Web Apps", "E-commerce Solutions", "Mobile Apps", "API Integration"],
    gradient: "from-accent/20 to-secondary/20"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
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
                onClick={() => setSelectedService(service)}
                className="p-8 bg-card rounded-lg border-2 border-border glow-hover group cursor-pointer"
              >
                <service.icon className="w-12 h-12 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className={`max-w-2xl bg-gradient-to-br ${selectedService?.gradient} backdrop-blur-sm border-2`}>
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              {selectedService && <selectedService.icon className="w-8 h-8" />}
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-lg mt-4">
              {selectedService?.details}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-3">What We Offer:</h4>
            <ul className="space-y-2">
              {selectedService?.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;
