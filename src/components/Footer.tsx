import { Mail } from "lucide-react";
import instagramQr from "@/assets/instagram-qr.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border brush-texture">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:Chaudharyjii8685@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Chaudharyjii8685@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <a
              href="https://instagram.com/aditya.__65"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scan to visit our Instagram"
              className="inline-block"
            >
              <img
                src={instagramQr}
                alt="Instagram QR code for @adii._8"
                className="w-40 h-40 rounded-lg bg-background p-2"
                loading="lazy"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground handmade-text text-lg">
            © 2025 Chaudhary Creative Studio – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
