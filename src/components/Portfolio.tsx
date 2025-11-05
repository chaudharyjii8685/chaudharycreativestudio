const Portfolio = () => {
  const projects = [
    { title: "Brand Logo Design", category: "Design" },
    { title: "E-commerce Website", category: "Development" },
    { title: "YouTube Thumbnails", category: "Graphics" },
    { title: "Mobile App UI", category: "Development" },
    { title: "Video Editing Project", category: "Video" },
    { title: "Marketing Banners", category: "Design" }
  ];

  const videos = [
    { title: "Creative Mind Presentation", src: "/videos/presentation.mp4" }
  ];

  return (
    <section id="portfolio" className="section-spacing bg-card brush-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-muted-foreground handmade-text">
            A glimpse of our creative projects
          </p>
        </div>

        {/* Video Portfolio */}
        <div className="mb-12">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg bg-background border-2 border-border glow-hover max-w-4xl mx-auto"
            >
              <video 
                controls 
                className="w-full"
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-background aspect-video border-2 border-border glow-hover cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow to-glow-strong opacity-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-transform group-hover:scale-105">
                <span className="text-sm font-semibold text-muted-foreground mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
