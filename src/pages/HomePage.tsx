import { Button } from "@/components/ui/button";
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import PortfolioChatBot from '@/components/PortfolioChatBot';
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
            <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 bg-black/20 backdrop-blur-md border-b border-white/10 text-white">
                    
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 px-4 text-center">                    
                    <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })}>About Me</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>Education</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
                        <Button variant="link" className="text-white hover:text-cyan-300 transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
                    </nav>
                </div>
            </header>

            <main>
                <HeroSection />
                <AboutMe />
                <EducationSection />
                <ExperienceSection />
                <Skills />
                <ProjectsSection />
                <ContactSection />
            </main>

            <footer className="border-t py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-white">
                    <p>© {new Date().getFullYear()} Atharva Kulkarni | IIT Indore. All rights reserved.</p>
                </div>
            </footer>

            {/* AI Chatbot */}
            <PortfolioChatBot />
        </div>);

};

export default HomePage;