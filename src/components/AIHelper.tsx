import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you with any questions about our services. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response (you can connect to Lovable AI later)
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        video: "Our video editing services include color grading, transitions, motion graphics, and sound design. We work with 4K/8K footage and offer fast turnaround times!",
        image: "We provide professional photo editing including retouching, background removal, color correction, and creative composites. Perfect for products, portraits, and more!",
        data: "Our data entry services are accurate and efficient. We handle data migration, digitization, spreadsheet management with complete confidentiality.",
        thumbnail: "We create eye-catching thumbnails for YouTube, social media graphics, logos, banners, and posters that capture attention and represent your brand!",
        template: "We design professional resumes, CVs, portfolio layouts, and presentation templates that make a lasting impression.",
        web: "We build modern, responsive websites and web applications using the latest technologies. From e-commerce to custom web apps, we've got you covered!",
        price: "Our pricing is competitive and depends on the complexity and scope of your project. Please fill out the contact form with your requirements for a custom quote!",
        time: "Turnaround time varies by service. Simple projects: 1-3 days, Medium projects: 3-7 days, Complex projects: 1-2 weeks. Rush delivery is available!",
        contact: "You can reach us through the contact form on this page, or scroll down to find our email and social media links in the footer!"
      };

      const lowerMessage = userMessage.toLowerCase();
      let response = "I'd be happy to help! Our services include Video Editing, Image Editing, Data Entry, Thumbnails & Graphics, Templates & Resumes, and Web & App Development. Click on any service card to learn more, or ask me a specific question!";

      Object.entries(responses).forEach(([key, value]) => {
        if (lowerMessage.includes(key)) {
          response = value;
        }
      });

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-card border-2 border-border rounded-lg shadow-2xl flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-white" />
              <h3 className="font-bold text-white">AI Helper</h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIHelper;
