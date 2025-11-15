import { Github, Mail, Linkedin, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-24 relative">
          <div className="flex items-center justify-between mb-8">
            <div className="h-px bg-white w-20 transition-all duration-700"
                 style={{ width: hoveredSection === 'header' ? '120px' : '80px' }}
                 onMouseEnter={() => setHoveredSection('header')}
                 onMouseLeave={() => setHoveredSection(null)}>
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-wider text-center flex-1"
                style={{ fontFamily: 'Georgia, serif' }}>
              禅
            </h1>
            <div className="h-px bg-white w-20 transition-all duration-700"
                 style={{ width: hoveredSection === 'header' ? '120px' : '80px' }}
                 onMouseEnter={() => setHoveredSection('header')}
                 onMouseLeave={() => setHoveredSection(null)}>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-light tracking-wide">
              Your Name
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest">
              Human-Computer Interaction | Human-Centered AI
            </p>
            <div className="pt-6 flex justify-center gap-6">
              <a href="https://github.com/yourusername"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-gray-400 transition-colors duration-300">
                <Github size={28} />
              </a>
              <a href="mailto:your.email@example.com"
                 className="hover:text-gray-400 transition-colors duration-300">
                <Mail size={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-gray-400 transition-colors duration-300">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </header>

        <section className="mb-24 relative">
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest">ABOUT</h3>
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="hover:text-white transition-colors duration-300">
                I am a researcher and designer specializing in Human-Computer Interaction and Human-Centered AI,
                bridging the gap between advanced technology and human needs.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                My work focuses on creating intuitive, meaningful experiences that harmonize technological
                capabilities with human values and cognitive patterns.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 relative">
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest">EXPERTISE</h3>
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ExpertiseCard
                icon={<GraduationCap size={32} />}
                title="Human-Computer Interaction"
                description="Designing interfaces that feel natural and intuitive, informed by cognitive science and user research."
              />
              <ExpertiseCard
                icon={<BookOpen size={32} />}
                title="Human-Centered AI"
                description="Developing AI systems that augment human capabilities while maintaining transparency and control."
              />
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest">PROJECTS</h3>
              <div className="h-px bg-white flex-1 transition-all duration-500 group-hover:bg-gray-400"></div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <ProjectCard
                title="Project Title 1"
                description="An exploration of adaptive interfaces that respond to user context and cognitive load."
                technologies={['React', 'TensorFlow', 'Python']}
              />
              <ProjectCard
                title="Project Title 2"
                description="Research on explainable AI systems for enhancing human decision-making processes."
                technologies={['Machine Learning', 'UX Research', 'Data Visualization']}
              />
              <ProjectCard
                title="Project Title 3"
                description="Designing accessible AI tools for creative professionals and knowledge workers."
                technologies={['TypeScript', 'NLP', 'Design Systems']}
              />
            </div>
          </div>
        </section>

        <footer className="pt-16 pb-8 text-center">
          <div className="h-px bg-white w-full mb-8 opacity-30"></div>
          <p className="text-gray-500 font-light tracking-widest text-sm">
            © 2025 - Crafted with intention
          </p>
        </footer>
      </div>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="border border-white border-opacity-20 p-8 hover:border-opacity-60 transition-all duration-500 group">
      <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-light mb-3 tracking-wide">{title}</h4>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({ title, description, technologies }: { title: string; description: string; technologies: string[] }) {
  return (
    <div className="border-l-2 border-white border-opacity-20 pl-6 py-4 hover:border-opacity-100 transition-all duration-500 group">
      <h4 className="text-2xl font-light mb-3 tracking-wide group-hover:text-gray-300 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs tracking-widest border border-white border-opacity-30 px-3 py-1 group-hover:border-opacity-60 transition-all duration-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
