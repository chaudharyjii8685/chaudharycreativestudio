import { useState, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  projectType: z.string().trim().max(100).optional().or(z.literal("")),
  description: z.string().trim().min(10, "Description must be at least 10 characters").max(1000, "Description must be less than 1000 characters"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    selectedPackage: "",
    packagePrice: "",
    description: ""
  });

  useEffect(() => {
    const handlePackageSelection = (event: CustomEvent) => {
      const { packageName, packagePrice } = event.detail;
      setFormData(prev => ({
        ...prev,
        selectedPackage: packageName,
        packagePrice: packagePrice,
        projectType: packageName
      }));
    };

    window.addEventListener('packageSelected', handlePackageSelection as EventListener);
    return () => window.removeEventListener('packageSelected', handlePackageSelection as EventListener);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      description: formData.description,
    });

    if (!result.success) {
      const firstError = result.error.issues[0];
      toast({
        title: "Invalid input",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    const safePackage = formData.selectedPackage.replace(/[<>]/g, "").slice(0, 100);
    const safePrice = formData.packagePrice.replace(/[<>]/g, "").slice(0, 50);
    const packageInfo = safePackage ? ` for ${safePackage} package (${safePrice})` : "";

    toast({
      title: "Request Received!",
      description: `We'll get back to you within 24 hours${packageInfo}.`,
    });

    setFormData({ name: "", email: "", projectType: "", selectedPackage: "", packagePrice: "", description: "" });
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Start Your Project</h2>
            <p className="text-xl text-muted-foreground handmade-text">
              Let's bring your ideas to life
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border-2 border-border">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <Input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Your name"
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <Input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Selected Package</label>
              <Select 
                value={formData.projectType}
                onValueChange={(value) => setFormData({...formData, projectType: value, selectedPackage: value})}
              >
                <SelectTrigger className="bg-background" aria-label="Select a package">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Basic">Basic - Starter Website (₹7,500 - ₹9,000)</SelectItem>
                  <SelectItem value="Standard">Standard - Business Pro Website (₹24,000 - ₹26,000)</SelectItem>
                  <SelectItem value="Premium">Premium - Advanced Website (₹43,000 - ₹45,000)</SelectItem>
                  <SelectItem value="video">Video Editing</SelectItem>
                  <SelectItem value="image">Image Editing</SelectItem>
                  <SelectItem value="data">Data Entry</SelectItem>
                  <SelectItem value="graphics">Graphics Design</SelectItem>
                  <SelectItem value="templates">Templates & Resumes</SelectItem>
                  <SelectItem value="web">Other Web & App Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Project Description</label>
              <Textarea 
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Tell us about your project..."
                className="bg-background min-h-32"
              />
            </div>

            <Button type="submit" className="w-full glow-hover text-lg py-6">
              Submit Project Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
