import { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  demoVideoUrl?: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [

{
  id: '1',
  title: 'Medical Image Classification',
  description: 'A Python toolkit for combining and analyzing human feedback in Reinforcement Learning from Human Feedback (RLHF) pipelines.',
  longDescription: `RLHFBlender is a modular and extensible toolkit designed to support the analysis, blending, and refinement of human feedback signals within RLHF pipelines. It facilitates structured extraction of actions and rewards from natural language feedback and offers utilities for feedback classification and improvement. The toolkit is intended for researchers and developers working on training large language models with human feedback.`,
  techStack: ['Python', 'CNN', 'Node.js', 'PostgreSQL', 'GPT-4o', 'REST API', 'Typescript' , 'Javascript', 'ML', 'Tensor-Flow', 'Transformer'],
  githubUrl: 'https://github.com/Prajwal-Thite/rlhfblender',
  liveUrl: '', // Add if a live demo is available
  imageUrl: 'https://github.com/Prajwal-Thite/rlhfblender/blob/main/Task_Interface%20(1).png?raw=true', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'AI',
  featured: true
},

{
  id: '2',
  title: 'E-Commerce Website',
  description: 'A modern home essentials brand offering premium bedding, bath, and decor with a focus on comfort, quality, and sustainability.',
  longDescription: `Parachute Home is a Los Angeles-based lifestyle brand founded in 2014 by Ariel Kaye. Initially launched as an online-only, direct-to-consumer company specializing in high-quality bedding, Parachute has since expanded its product line to include bath linens, decor, and furniture. The brand emphasizes comfort, quality, and sustainability, sourcing premium materials like European flax and long-staple Turkish cotton. Parachute is committed to environmentally responsible practices, including a linen recycling program and the use of sustainable materials such as organic cotton and recycled polyester. With a growing number of brick-and-mortar stores across the United States, Parachute continues to blend modern design with a commitment to wellness and sustainability.`,
  techStack: ['React', 'Node.js', "MySQL", "Express.js", 'Typescript', "Tailwind CSS", "REST APIs", "Shopify Payments", "Kubernetes"],
  githubUrl: 'https://github.com/Prajwal-Thite', // Not applicable
  liveUrl: 'https://parachutehome.com/',
  imageUrl: 'https://cdn.prod.website-files.com/6778d1207e03199a243db033/6778d1207e03199a243db710_parachute-cover-673d7853dacea.webp', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: false
},

{
  id: '3',
  title: 'Portfolio Website',
  description: 'A sustainable skincare brand offering minimalist, high-performance products with a focus on intentional ingredients and eco-friendly practices.',
  longDescription: `JUNOCO is a California-based skincare brand committed to sustainability and minimalism. Founded by Kyle Jiang, the company emphasizes the use of fewer than 20 ingredients in its products to ensure efficacy without unnecessary fillers. JUNOCO's offerings, such as the Clean 10 Cleansing Balm, are designed to deliver high performance while being environmentally conscious. The brand also focuses on reducing waste through initiatives like refillable packaging and FSC-certified materials. JUNOCO's mission extends beyond skincare, aiming to challenge conventional beauty standards and promote inclusivity through campaigns like #ToBeHuman.`,
  techStack: ['React', 'Node.js', 'TypeScript', 'REST API', "GraphQL", 'Express.js', 'Stripe',  'Google Analytics', 'Tailwind CSS',  'Framer Motion',  'Groq AI SDK',  "Vercel" ],
  githubUrl: 'https://github.com/Prajwal-Thite', // Not applicable
  liveUrl: 'https://www.junoco.com/',
  imageUrl: 'https://laurakatelucas.com/wp-content/uploads/2023/10/PA130122-scaled-1024x768.jpg', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: true
},

{
  id: '4',
  title: 'Chatbot',
  description: 'A wearable device that automatically darkens in sunlight using sensors and electrochromic film.',
  longDescription: `Auto-Shading Smart Glasses is a physical computing project that aims to create adaptive sunglasses using two alternative implementations. The first approach uses a mechanical shutter system inspired by motorized window blinds, mounted on ski goggles for stability. The second approach explores a more elegant solution using electrochromic glass—smart film wrapped around conventional glasses that darkens automatically when exposed to sunlight. This system relies on UV sensors and Arduino-based microcontrollers to detect sunlight and trigger shading via a low-voltage electric current. Designed for everyday use, the project highlights comfort, adaptability, and real-world usability in wearable electronics.`,
  techStack: ['Arduino', 'Electronics', 'UV Sensors', 'Smart Film', 'Embedded Systems', 'Physical Computing'],
  githubUrl: 'https://gitlab.inf.uni-konstanz.de/ag-hci/lectures/physical-computing/ss23-physical-computing/phys-comp-ss-23-group-1',
  imageUrl: 'https://i.imgur.com/KfdMIV8.jpeg', // Replace with real photo if available
  demoVideoUrl: '', // Add if you have a demo
  category: 'AI', // Can also be 'Web' or 'Mobile' if it's digitally controlled
  featured: true
},

{
  id: '5',
  title: 'Artistic Image Generation using Neural Style Transfer',
  description: 'A smart robotic hand with app, hardware, and AI integration for autonomous and remote control.',
  longDescription: `Servo Hand is an innovative AI-driven robotic hand that supports multiple control mechanisms including potentiometers, an Android app, and autonomous navigation. Designed for precision and adaptability, the system features 3-axis movement adjustment and global control via IoT. The hand intelligently learns its environment over 20–25 hours using reinforcement learning and Thompson sampling to ensure safe, smooth operation. Built with Java-based Android app communication, embedded C for hardware control, and NodeMCU ESP8266 microcontroller, it represents a fusion of machine learning, embedded systems, and mobile development.`,
  techStack: ['Python', 'CNN'],
  githubUrl: 'https://github.com/Prajwal-Thite/Servohand',
  imageUrl: 'https://github.com/adwaitgondhalekar/Artistic-Image-Generation-using-NST-with-UI/raw/master/Screenshot%20(159).png', // You can replace this with a real image if available
  demoVideoUrl: '', // Optional: Add if you have one
  category: 'AI',
  featured: false
},

{
  id: '6',
  title: 'E-Commerce App',
  description: 'A mobile app that empowers users to plant trees, report environmental issues, and access green knowledge.',
  longDescription: `Planet is a cross-platform mobile application designed to promote environmental awareness and action. Users can plant a tree under their name, report harmful environmental activities to authorities, and explore the latest environmental news through a built-in web scraper. At nurseries, users can scan QR codes on plants to learn care instructions, pricing, and other useful data. The app is built with Flutter and Firebase, and leverages Python APIs for backend services. Planet is a powerful tool for individuals who want to make a meaningful environmental impact.`,
  techStack: ['Flutter', 'Dart', 'Android', 'JAVA', 'Firebase'],
  githubUrl: 'https://github.com/Prajwal-Thite/Planet',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.planet&hl=en', // Replace with actual Play Store link if available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/ecommerce.jpg?raw=true',
  demoVideoUrl: '', // Add a link if you have a video demo
  category: 'Mobile',
  featured: false
},
{
  id: '7',
  title: 'Messenger App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Built a full-stack real-time messaging platform using Android (Java), Flutter, Firebase \& modern mobile application architecture principles. The application supports seamless communication through 1-1 chats, group chats, media sharing, push notifications, unread message tracking, delivered/read receipts, typing indicators \& online/offline presence monitoring.

Designed scalable client-server communication using Firebase Authentication, Cloud Firestore \& Firebase Storage, enabling real-time synchronization of messages, user states \& media across multiple devices. Implemented offline persistence \& local caching to ensure uninterrupted user experience during network fluctuations.

Architected the Android application using MVVM architecture with ViewModel, LiveData, Room Database, Dependency Injection \& asynchronous operations to improve maintainability, modularity \& lifecycle-aware state management. The Flutter version followed Bloc architecture for reactive state handling \& scalable UI management.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/messenger.jpg?raw=true', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},
{
  id: '8',
  title: 'Movie Finder App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/moviefinder.jpg?raw=true', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},
{
  id: '9',
  title: 'Weather App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/weather.png?raw=true', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},
{
  id: '10',
  title: 'Bus Tracker App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://play-lh.googleusercontent.com/OzxkC-rcqtbEfsWWfjZJt98GCClUYjdtYnLw5TOclbJj9FMl3h6O_1wsXTx0aaIGqg=w240-h480-rw', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},
{
  id: '11',
  title: 'KKW Alerts App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://play-lh.googleusercontent.com/OzxkC-rcqtbEfsWWfjZJt98GCClUYjdtYnLw5TOclbJj9FMl3h6O_1wsXTx0aaIGqg=w240-h480-rw', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},
{
  id: '12',
  title: 'PokeDex App',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/pokedex.jpg?raw=true', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},

{
  id: '13',
  title: 'Tic-Tac-Toe Game',
  description: 'A React-based application designed to facilitate comprehensive conflict analysis using structured datasets.',
  longDescription: `The Conflict Analysis Toolkit is a web application developed with React, aimed at providing users with tools to analyze conflicts through structured data. It includes comprehensive datasets for in-depth analysis and offers an interactive interface for users to explore various aspects of conflicts. The application is bootstrapped with React App, uses D3 library for visualisation and utilizes JSON datasets to present information in an accessible format with insights`,
  techStack: ['React', 'JavaScript', 'D3', 'JSON', 'HTML', 'CSS'],
  githubUrl: 'https://github.com/Prajwal-Thite/Conflict_Analysis_Toolkit',
  liveUrl: 'https://prajwal-thite.github.io/Conflict_Analysis_Toolkit/', // Add if a live demo is available
  imageUrl: 'https://github.com/KulkarniAtharva/Atharva-Portfolio/blob/main/images/tictactoe.png?raw=true', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: true
},

];


const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory.toLowerCase() === 'all' ?
  projects :
  projects.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions across AI, web development, and mobile applications.
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">

          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <TabsTrigger
                value="All"
                onClick={() => setSelectedCategory('All')}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">

                All
              </TabsTrigger>
              <TabsTrigger
                value="AI"
                onClick={() => setSelectedCategory('AI')}
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">

                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="Web"
                onClick={() => setSelectedCategory('Web')}
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white">

                Web
              </TabsTrigger>
              <TabsTrigger
                value="Mobile"
                onClick={() => setSelectedCategory('Mobile')}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">

                Mobile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        {/* <motion.div

          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project, index) =>
          <ProjectCard
            key={project.id}
            project={project}
            index={index}/>
            
          )}
        </motion.div> */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/KulkarniAtharva?tab=repositories', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            View All Projects on GitHub
          </motion.button>
        </div>
      </div>
    </section>);

};

export default ProjectsSection;