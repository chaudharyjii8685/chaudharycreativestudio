import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Chaudhary Creative Studio" 
            className="w-12 h-12 object-contain rounded-lg glow-hover"
          />
          <span className="font-bold text-lg bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Chaudhary Creative Studio
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Portfolio</a>
          <a href="#login" className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg text-sm font-semibold transition-colors">
            Login
          </a>
          <a href="#signup" className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-semibold glow-hover">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
