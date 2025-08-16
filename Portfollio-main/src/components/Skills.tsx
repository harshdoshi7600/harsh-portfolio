
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const headingRef = useScrollAnimation();
  const certHeadingRef = useScrollAnimation({ threshold: 0.2 });
  
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "TailwindCSS", "Bootstrap", "Pandas", "NumPy", "TensorFlow","Flask", "Django", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit","sklearn"]
    },
    {
      title: "Tools & Technologies",
      skills: [ "GitHub", "VS Code","IntelliJ IDEA", "MongoDB", "MySQL", "PostgreSQL", "Jupyter Notebook", "Anaconda",]
    },
    {
      title: "Other Skills",
      skills: ["Problem Solving", "Data Structures", "Algorithms", "Responsive Design", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="w-full px-4 md:px-6">
      <h2 className="numbered-heading section-heading text-2xl sm:text-3xl font-bold mb-10 animated-slide-right" ref={headingRef as React.RefObject<HTMLHeadingElement>}>My Skills</h2>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 stagger">
        {skillCategories.map((category, index) => {
          const cardRef = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });
          return (
            <Card 
              key={index} 
              className="glass-card overflow-hidden group gradient-border animated-scale tilt-card"
              ref={cardRef as React.RefObject<HTMLDivElement>}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-light mb-4 group-hover:text-highlight transition-colors duration-300">{category.title}</h3>
                <div className="flex flex-wrap stagger">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="mr-2 mb-2 px-3 py-1 text-sm bg-navy rounded-full text-slate border border-slate-dark hover:border-highlight hover:text-highlight transition-colors duration-300 animated-fade-in"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-16 animated-slide-up" ref={certHeadingRef as React.RefObject<HTMLDivElement>}>
        <h3 className="text-2xl font-semibold text-slate-light mb-6">Certifications</h3>
        <div className="space-y-4 stagger">
          {[
            {
              year: "2023",
              title: "Introduction to Java",
              institution: "Coursera"
            },
            {
              year: "2024",
              title: "Introduction to HTML, CSS, & JavaScript",
              institution: "Coursera"
            },
            {
              year: "2024",
              title: "Inheritance and Data Structures in Java",
              institution: "Coursera"
            },
            {
              year: "2025",
              title: "Exploratory Data Analysis for Machine Learning",
              institution: "coursera"
            },
          ].map((cert, index) => {
            const certRef = useScrollAnimation({ threshold: 0.1, rootMargin: "30px" });
            return (
              <div 
                key={index}
                className="p-4 border border-slate-dark rounded-md hover:border-highlight/50 transition-colors duration-300 bg-navy-light/50 hover:bg-navy-light transform transition-transform hover:-translate-y-1 animated-slide-right"
                ref={certRef as React.RefObject<HTMLDivElement>}
              >
                <p className="text-highlight font-mono text-sm">{cert.year}</p>
                <h4 className="text-lg font-medium text-slate-light mt-1">{cert.title}</h4>
                <p className="text-slate">{cert.institution}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
