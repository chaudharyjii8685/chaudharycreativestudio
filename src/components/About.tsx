const About = () => {
  return (
    <section id="about" className="section-spacing bg-card brush-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">About Us</h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Welcome to <span className="font-semibold text-foreground">Chaudhary Creative Studio</span>, 
            where innovation meets artistry. We are a passionate team dedicated to bringing your digital 
            dreams to life through cutting-edge design and development.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our mission is simple: to create stunning, functional, and impactful digital experiences 
            that help brands stand out in the crowded digital landscape. From eye-catching visuals 
            to powerful web applications, we craft every project with precision and creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-background rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-2">Creative</h3>
              <p className="text-muted-foreground">Pushing boundaries with unique designs</p>
            </div>
            <div className="p-6 bg-background rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-muted-foreground">Delivering excellence in every project</p>
            </div>
            <div className="p-6 bg-background rounded-lg glow-hover">
              <h3 className="text-2xl font-bold mb-2">Innovative</h3>
              <p className="text-muted-foreground">Using latest technology and trends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
