import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const headingRef = useScrollAnimation();
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const educationRef = useScrollAnimation({ threshold: 0.3 });
  const imageRef = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <section id="about" className="relative w-full">
      <h2 className="numbered-heading section-heading text-2xl sm:text-3xl font-bold mb-10 animated-slide-right" ref={headingRef as React.RefObject<HTMLHeadingElement>}>About Me</h2>
      
      {/* Background accent */}
      <div className="absolute -z-10 top-40 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      
      <div className="grid md:grid-cols-5 gap-12 px-4 md:px-6">
        <div className="md:col-span-3">
          <div className="space-y-4 text-slate animated-slide-up" ref={textRef as React.RefObject<HTMLDivElement>}>
            <p>
              Hello! I'm <span className="text-highlight">Harsh Doshi</span>, a passionate B.Tech student specializing in 
              Computer Science at <span className="text-highlight">L.J. INSTITUTE OF ENGINEERING & TECHNOLOGY</span>.
            </p>
            <p>
              I have a deep interest in solving complex problems and building applications that 
              make a real impact.
            </p>
            <p>
              Currently, I'm focused on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 stagger">
              <li className="flex items-center animated-fade-in">
                <span className="text-highlight mr-2">▹</span> 
                Building accessible web apps
              </li>
              <li className="flex items-center animated-fade-in">
                <span className="text-highlight mr-2">▹</span> 
                Exploring AI/ML applications
              </li>
              <li className="flex items-center animated-fade-in">
                <span className="text-highlight mr-2">▹</span> 
                Contributing to open source
              </li>
              <li className="flex items-center animated-fade-in">
                <span className="text-highlight mr-2">▹</span> 
                Hackathons & competitions
              </li>
            </ul>
            <p>
              Outside of programming,I'm always looking for new opportunities to learn and grow in the tech field.
            </p>
          </div>
          
          <div className="mt-8 animated-slide-up" ref={educationRef as React.RefObject<HTMLDivElement>}>
            <h3 className="text-xl font-medium text-slate-light mb-4">Education</h3>
            <Card className="glass-card transform transition-all duration-300 hover:translate-y-[-5px] gradient-border tilt-card">
              <CardContent className="p-6">
                <p className="text-highlight font-medium">2023 - 2027</p>
                <p className="text-slate-light font-medium mt-2">Bachelor of Technology in Computer Science & Technology</p>
                <p className="text-slate">L.J. INSTITUTE OF ENGINEERING & TECHNOLOGY</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="relative group max-w-xs mx-auto md:mx-0 animated-rotate" ref={imageRef as React.RefObject<HTMLDivElement>}>
            <div className="relative rounded-md overflow-hidden z-10">
              <img 
                src="/harsh_photo.jpg"
                alt="Harsh Doshi" 
                className="rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-highlight/20 mix-blend-multiply rounded-md group-hover:opacity-0 transition-all duration-500"></div>
            </div>
            <div className="absolute -inset-2 border-2 border-highlight rounded-md z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
