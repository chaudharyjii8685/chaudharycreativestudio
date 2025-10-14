const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden brush-texture pt-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Chaudhary Creative Studio
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-muted-foreground handmade-text animate-fade-in delay-200">
            Where Creativity Meets Technology
          </p>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="mt-8 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg text-lg font-semibold glow-hover animate-fade-in delay-300 shadow-lg shadow-primary/50"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
