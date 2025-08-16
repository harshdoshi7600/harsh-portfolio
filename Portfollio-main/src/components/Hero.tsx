
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  // State for the typewriter effect
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // For developer text animation
  const [developerText, setDeveloperText] = useState("B.Tech Student & Developer.");
  const developerOptions = [
    "Full Stack Developer.",
    "Software Engineer.",
    "Frontend Engineer.",
    "Full Stack Developer.",
    "MERN Stack Developer.",
    "Web Developer.",

  ];
  const [currentDeveloperIndex, setCurrentDeveloperIndex] = useState(0);
  
  // Ref for the developer text element
  const developerTextRef = useRef<HTMLSpanElement>(null);
  
  const fullText = "B.Tech Computer Science student passionate about full-stack development and continuously improving modern software design, development, and deployment.";
  
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation({ threshold: 0.2 });
  const buttonsRef = useScrollAnimation({ threshold: 0.3, rootMargin: "10px" });
  
  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        
        if (displayText.length === fullText.length) {
          setIsTyping(false);
        }
      }, 30);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, fullText]);

  // Reset typing effect
  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setIsTyping(true);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [isTyping]);
  
  // Developer text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (developerTextRef.current) {
        developerTextRef.current.classList.add('animate-out');
        
        setTimeout(() => {
          setCurrentDeveloperIndex((prev) => (prev + 1) % developerOptions.length);
          setDeveloperText(developerOptions[(currentDeveloperIndex + 1) % developerOptions.length]);
          
          if (developerTextRef.current) {
            developerTextRef.current.classList.remove('animate-out');
            developerTextRef.current.classList.add('animate-in');
          }
          
          setTimeout(() => {
            if (developerTextRef.current) {
              developerTextRef.current.classList.remove('animate-in');
            }
          }, 500);
        }, 500);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentDeveloperIndex, developerOptions]);

  return (
    <section className="flex flex-col justify-center pt-16 relative overflow-hidden" id="home">
      {/* Background gradient effect */}
      <div className="absolute -left-40 w-80 h-80 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-highlight/10 rounded-full blur-3xl float"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 px-4 md:px-6 lg:px-0">
        <p className="text-highlight font-mono mb-5 animated-fade-in" ref={titleRef as React.RefObject<HTMLParagraphElement>}>Hi, my name is</p>
        <h1 className="font-bold mb-4 animated-slide-right" ref={titleRef as React.RefObject<HTMLHeadingElement>}>
          <span className="text-slate-light block relative">
            <span className="relative z-10 inline-block">Harsh Doshi</span>
          </span>
          <span className="text-slate block mt-5 text-3xl sm:text-4xl relative overflow-hidden" ref={developerTextRef}>
            <span className="developer-text">{developerText}</span>
          </span>
        </h1>
        <div className="text-slate max-w-lg text-lg mb-10 animated-slide-up h-34 bg-navy-light/30 p-4 rounded-md backdrop-blur-sm border border-slate-dark/20" ref={descriptionRef as React.RefObject<HTMLDivElement>}>
          <p>{displayText}<span className={`inline-block w-1 h-4 bg-highlight ml-1 align-middle ${isTyping ? 'animate-pulse' : ''}`}></span></p>
        </div>
        <div className="animated-fade-in flex space-x-4" ref={buttonsRef as React.RefObject<HTMLDivElement>}>
          <Button 
  asChild 
  variant="outline" 
  className="ml-4 border-highlight text-highlight hover:bg-highlight/10 gradient-border"
>
  <a 
    href="Harsh_resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <span>Resume</span>
  </a>
</Button>

          <Button variant="outline" size="lg" className="text-slate-light hover:text-highlight">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-10 bottom-20 opacity-20 text-highlight hidden lg:block animated-fade-in delay-800">
        <pre className="font-mono text-xs float">
          {`function init() {
  const developer = new Developer('Harsh Doshi');
  developer.createAmazingThings();
}`}
        </pre>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute left-1/4 top-1/4 w-8 h-8 border border-highlight/30 rounded-md animate-spin-slow opacity-20"></div>
      <div className="absolute right-1/3 bottom-1/3 w-5 h-5 bg-highlight/20 rounded-full animate-float opacity-30"></div>
      <div className="absolute left-1/3 bottom-1/4 w-3 h-10 bg-highlight/10 animate-pulse opacity-20"></div>
    </section>
  );
};

export default Hero;
