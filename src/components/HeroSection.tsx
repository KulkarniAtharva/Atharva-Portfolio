import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useMouseParallax } from '@/hooks/use-mouse-parallax';
import FloatingTechLogos from '@/components/FloatingTechLogos';
import HireMeButton from '@/components/HireMeButton';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {

  const mouseParallax = useMouseParallax(0.02);

  const handleDownloadCV = () => {

    // sharing link to download link
    const fileId = '14-0SlAGEp4ZwobvnrBPZH0_3uTpU9HsF';
    const cvUrl = `https://drive.google.com/file/d/${fileId}/view`;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Open PDF in new tab
    window.open(cvUrl, '_blank');

    // Trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Atharva-Kulkarni-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/code2.jpg')"
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating tech logos */}
      <FloatingTechLogos />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white">
            Atharva Kulkarni
          </h1>

        </motion.div>

        {/* Continuous Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 h-16 flex items-center justify-center"
        >

          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-medium">

            <Typewriter
              words={[
                'IITian',
                'AI/ML Researcher',
                'Full-Stack Developer',
                'Mobile App Developer'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={20}
              deleteSpeed={40}
              delaySpeed={1500}
            />

          </h2>

        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >

          {/* GitHub */}
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            onClick={() => window.open('https://github.com/KulkarniAtharva', '_blank')}
          >

            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            GitHub
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />

          </Button>

          {/* LinkedIn */}
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/atharvaiitian/', '_blank')}
          >

            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            LinkedIn
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />

          </Button>

          {/* Resume Download */}
          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
            onClick={handleDownloadCV}
          >

            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Download CV

          </Button>

        </motion.div>

        {/* Hire Me Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >

          <HireMeButton />

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;