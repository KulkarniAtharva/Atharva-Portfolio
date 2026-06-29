import { motion } from 'motion/react';
import FlipCard from '@/components/FlipCard';
import { Sparkles, Award, Zap } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id='aboutme'
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 flex items-center">

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a MS Research scholar at the amazing IIT Indore with a strong interest in 
                Computer Vision & Digital Image Processing, along with hands-on experience 
                in Full-Stack & Mobile Application Development. I secured an AIR of 1880 out 
                of 2,07,851 candidates (99.10 %ile) in GATE CS 2025, reflecting my 
                consistency & dedication to learning.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I have worked on a range of academic & industry projects where I focused on
                 building reliable systems, solving real-world problems & developing 
                 features that connect different components of an application. I enjoy 
                 experimenting with images, patterns & visual data to transform ideas 
                 into meaningful solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Alongside my research, I am a self-taught developer with a strong interest in 
                Android & Flutter Development, as well as modern web technologies & 
                full-stack systems. I enjoy working on projects that challenge me to think 
                deeply & continuously improve as an engineer.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Outside of technology, I am a music enthusiast 🎵, swimmer, gym lover & enjoy fitness, as I 
                believe in maintaining a balanced mind & body.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-sky-200 text-sky-700 rounded-full text-sm font-medium">
                  CNN
                </span>
                <span className="px-4 py-2 bg-red-200 text-red-900 rounded-full text-sm font-medium">
                  VLM
                </span>
                <span className="px-4 py-2 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">
                  RAG
                </span>
                <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm font-medium">
                  React.js
                </span>
                <span className="px-4 py-2 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-pink-200 text-pink-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                  Flutter
                </span>
                <span className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  JAVA
                </span>
                <span className="px-4 py-2 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                  Trasformers
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Avatar and Fun Facts */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/atharva.jpg?raw=true"
                      alt="Professional Avatar"
                      className="w-56 h-56 rounded-full object-cover"/>

                  </div>
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}>

                  <Sparkles className="w-6 h-6 text-white"/>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Fun Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FlipCard
                  frontContent={{
                    icon: <Zap/>,
                    title: "Hobbies & Interests",
                    subtitle: "What I love beyond tech"
                  }}
                  backContent={{
                    title: "Beyond the Desk",
                    items: [
                    "🌍 Adventurous Traveler",
                    "🤿 Swimming Enthusiast",
                    "🏍️ Gym Lover",
                    "🎵 Music Listener ",
                    "📸 Photography Lover",
                    ]

                  }}/>


                <FlipCard
                  frontContent={{
                    icon: <Award/>,
                    title: "Certified & Curious",
                    subtitle: "Always learning & leveling up"
                  }}
                  backContent={{
                    title: "Certifications",
                    items: [
                    "• NPTEL - IIT Kharapur",
                    "• AWS Data Analytics",
                    "• Google Cloud & Data Analytics",
                    "• Microsoft AI Program",
                    "• Languages: English (C1), German (A2)"]

                  }}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutMe;
