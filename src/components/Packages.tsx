import { Check, Zap, Rocket, Star, Clock, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

const packages = [
  {
    icon: Zap,
    name: "Basic",
    subtitle: "Starter Website",
    price: "₹7,500 - ₹9,000",
    delivery: "3 Days",
    revisions: "Unlimited",
    description: "🚀 Ideal for startups or personal use",
    features: [
      "1 Page Responsive Website (Landing or Portfolio)",
      "Front-end design using React / HTML / CSS / JavaScript",
      "Basic SEO Optimization",
      "Mobile Friendly Design",
      "Contact Form Integration",
      "Free Deployment Help",
      "✅ Fast delivery & full responsive layout"
    ],
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    borderColor: "border-green-500/50",
    popular: false
  },
  {
    icon: Rocket,
    name: "Standard",
    subtitle: "Business Pro Website",
    price: "₹24,000 - ₹26,000",
    delivery: "6 Days",
    revisions: "Unlimited",
    description: "Perfect for growing businesses that want a complete online presence",
    features: [
      "Up to 5 Custom Pages",
      "Full Stack Development (React + Node / PHP + MySQL)",
      "Basic Admin Dashboard",
      "Payment Gateway / Booking System",
      "Social Media Integration",
      "Speed Optimization",
      "SEO-Friendly URLs and Tags",
      "15 Days Free Support",
      "✅ Professional design + strong backend structure"
    ],
    gradient: "from-yellow-500/20 via-amber-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/50",
    popular: true
  },
  {
    icon: Star,
    name: "Premium",
    subtitle: "Advanced Website / Web App",
    price: "₹43,000 - ₹45,000",
    delivery: "10 Days",
    revisions: "Unlimited",
    description: "For established brands needing a custom, high-performance website",
    features: [
      "Up to 10 Pages or Full Web App",
      "React / Next.js + Node.js / Laravel + MongoDB / MySQL",
      "Full Admin Panel / Dashboard",
      "E-commerce or Booking Functionality",
      "Payment Gateway & API Integration",
      "User Authentication (Login / Signup)",
      "Speed, Security & SEO Optimization",
      "Hosting Setup & Deployment",
      "30 Days Free Maintenance",
      "✅ Complete professional solution for your business"
    ],
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20",
    borderColor: "border-red-500/50",
    popular: false
  }
];

const addons = [
  { name: "Figma to Website Conversion", price: "₹3,000" },
  { name: "Extra Fast Delivery (2 Days)", price: "₹1,500" },
  { name: "Logo or Branding Kit", price: "₹2,000" },
  { name: "Monthly Maintenance Plan", price: "₹4,000" }
];

const Packages = () => {
  return (
    <section id="packages" className="section-spacing bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            💰 Packages
          </h2>
          <p className="text-xl text-muted-foreground handmade-text">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-gradient-to-br ${pkg.gradient} backdrop-blur-sm rounded-2xl border-2 ${pkg.borderColor} glow-hover group transition-all duration-300 ${pkg.popular ? 'scale-105 shadow-2xl' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-background/50 rounded-xl">
                  <pkg.icon className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.delivery}
                  </div>
                  <div className="flex items-center gap-1">
                    <RefreshCw className="w-4 h-4" />
                    {pkg.revisions}
                  </div>
                </div>
              </div>

              <p className="mb-6 text-sm font-medium">{pkg.description}</p>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl border-2 border-accent/30 p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">🌟 Add-ons</h3>
            <p className="text-muted-foreground">Optional extras to enhance your package</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((addon, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <span className="font-medium">{addon.name}</span>
                <span className="text-xl font-bold text-primary">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
