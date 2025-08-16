
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const headingRef = useScrollAnimation();
  const formRef = useScrollAnimation({ threshold: 0.2 });
  const socialsRef = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // You would normally handle form submission here
    // This is just a mock implementation
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="text-center w-full px-4 md:px-6">
      <div className="max-w-2xl mx-auto animated-fade-in" ref={headingRef as React.RefObject<HTMLDivElement>}>
        <p className="text-highlight font-mono mb-2">04. What's Next?</p>
        <h2 className="text-4xl font-bold text-slate-light mb-5">Get In Touch</h2>
        <p className="text-slate mb-10">
          I'm currently looking for internship opportunities and collaborative projects. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
      </div>
      
      <form 
        onSubmit={handleSubmit} 
        className="bg-navy-light/70 p-6 rounded-lg backdrop-blur-sm border border-slate-dark/50 mb-10 animated-scale max-w-2xl mx-auto"
        ref={formRef as React.RefObject<HTMLFormElement>}
      >
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-3 bg-navy border border-slate-dark rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50 text-slate-light" 
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="w-full p-3 bg-navy border border-slate-dark rounded-md focus:outline-none focus:ring-2 focus:ring-highlight/50 text-slate-light"
            required
          ></textarea>
        </div>
        <Button type="submit" className="border-highlight text-highlight bg-transparent hover:bg-highlight/10 text-base px-8 py-6 gradient-border animated-slide-up">
          Say Hello
        </Button>
      </form>
      
      <Button className="border-highlight text-highlight bg-transparent hover:bg-highlight/10 text-base px-8 py-6 gradient-border animated-slide-up max-w-2xl mx-auto" style={{ transitionDelay: "200ms" }}>
        <a href="mailto:hd4861588@gmail.com">Or Email Me Directly</a>
      </Button>
      
      <div 
        className="mt-20 flex justify-center space-x-8 animated-slide-up"
        style={{ transitionDelay: "300ms" }}
        ref={socialsRef as React.RefObject<HTMLDivElement>}
      >
        <a href="https://www.linkedin.com/in/harsh-doshi-587345285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/harshdoshi7600" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float" style={{ animationDelay: "0.5s" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.instagram.com/harsh_0985_/" className="text-slate hover:text-highlight transform transition-transform hover:scale-110 duration-300 float" style={{ animationDelay: "1.5s" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
