import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message
    // Once Lovable Cloud is enabled, this will save to database
    toast({
      title: "Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", projectType: "", description: "" });
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
              <label className="block text-sm font-semibold mb-2">Project Type</label>
              <Select 
                value={formData.projectType}
                onValueChange={(value) => setFormData({...formData, projectType: value})}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video Editing</SelectItem>
                  <SelectItem value="image">Image Editing</SelectItem>
                  <SelectItem value="data">Data Entry</SelectItem>
                  <SelectItem value="graphics">Graphics Design</SelectItem>
                  <SelectItem value="templates">Templates & Resumes</SelectItem>
                  <SelectItem value="web">Web & App Development</SelectItem>
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
