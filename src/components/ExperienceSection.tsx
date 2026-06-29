import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TechBadge from '@/components/TechBadge';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyType?: string;
}

const experiences: Experience[] = [
{
  id: '0',
  role: 'Android & Full-Stack Developer (Founding Engineer)',
  company: 'Ekatvam Innovations Pvt. Ltd',
  location: 'Thane, Maharashtra',
  duration: 'Nov 2020 - March 2022',
  description: 'Worked as a Founding Engineer, developing scalable Android (Java), Flutter, and MERN stack applications with real-time systems, REST APIs, Firebase integration, and full-stack product deployment.',
  achievements: [
    'Developed a production-grade Android application from scratch for digital water governance and village water budgeting systems.',
    'Built scalable Android applications using Java, Firebase Authentication, Cloud Firestore, Retrofit, and MVVM architecture.',
    'Implemented secure user authentication, real-time data synchronization, local caching, and offline-first workflows for low-connectivity rural environments.',
    'Integrated RESTful APIs using Retrofit and optimized asynchronous background operations for efficient network communication and improved responsiveness.',
    'Tested and validated application functionality across multiple Android devices and versions using 40+ real-world test scenarios.',
    'Implemented animations, responsive UI components, and smooth navigation flows to enhance user experience and accessibility.',
    'Published and maintained production Android builds on Google Play Store with continuous feature updates and bug fixes.',
    'Designed and developed full-stack web dashboards using MERN stack (MongoDB, Express.js, React.js, Node.js) for real-time monitoring and analytics.',
    'Built responsive web interfaces with secure authentication, role-based access, and API-driven data visualization.',
    'Implemented backend services and API workflows for real-time water budgeting, reporting, and simulation systems.',
    'Designed reusable React components and optimized frontend rendering for improved dashboard responsiveness and maintainability.',
    'Configured MySQL databases and developed optimized SQL queries for structured data management and reporting workflows.',
    'Developed internal admin dashboards and management portals to support monitoring and operational decision-making.',
    'Worked on backend integration, API validation, error handling, and secure data exchange between mobile and web applications.',
    'Worked as a Founding Engineer in an early-stage startup, contributing across product development, architecture, deployment, and engineering strategy.',
    'Led end-to-end software development from ideation to deployment in a fast-paced startup environment.',
    'Collaborated directly with founders, mentors, and stakeholders to convert product ideas into deployable technical solutions.',
    'Coordinated Git/GitHub workflows, version control practices, and CI/CD pipelines across the engineering team.',
    'Led and mentored Android developers, conducted code reviews, and ensured smooth feature integration across releases.',
    ''
  ],
  technologies: ['Android-JAVA', 'Node.js', 'React.js', 'Firebase', 'HTML', 'JavaScript', 'SQL', 'Git-Github Actions', 'APIs', 'MongoDB', 'Express.js', 'Flutter', 'AdobeXD'],
  companyType: 'AgriTech Startup'
},
{
  id: '1',
  role: 'Innovator & Project Tech Lead',
  company: 'Digital Impact Square - a TCS foundation Initiative',
  location: 'Nashik, Maharashtra',
  duration: 'Nov 2020 - Nov 2021',
  description: 'Developed technology driven solutions for rural water governance & colaborated with TCS mentors. Contributed across product research, problem identification, rapid prototyping, UI/UX planning, engineering execution, and stakeholder presentations.',
  achievements: [
    'Contributed to the frontend and backend development of enterprise-scale Shopify-based platforms including Parachute Home and JUNOCO',
    'Built and optimized reusable React components for scalable UI across multiple projects',
    'Integrated REST and GraphQL APIs for product listings, filtering, and cart management',
    'Implemented responsive design systems using Tailwind CSS and Framer Motion to ensure high performance and visual polish',
    'Collaborated with senior developers to resolve production issues and improve Lighthouse scores across both web platforms',
    'Assisted in setting up CI/CD workflows and deployment automation using GitHub Actions'
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'Kubernetes', "MySQL", "Express.js", "Tailwind CSS", "REST APIs", "Shopify Payments", 'Cloudinary', "GraphQL", 'Google Analytics', 'Stripe', 'Framer Motion'],
  companyType: 'Innovation center'
},
{
  id: '2',
  role: 'Python Developer (Intern)',
  company: 'CyberEdge Web Solutions Pvt. Ltd.',
  location: 'Nashik, Maharashtra',
  duration: 'June 2021 - Aug 2021',
  description: 'Worked on building and maintaining cross-platform mobile applications using Flutter and Firebase for clients in the health and sustainability domains.',
  achievements: [
    'Developed key features for two production-grade Flutter apps focused on environmental action and healthcare support',
    'Integrated Firebase services including Firestore, Cloud Functions, and Push Notifications for real-time app functionality',
    'Implemented responsive UI designs based on Figma prototypes for both Android and iOS platforms',
    'Collaborated with designers and backend developers to deliver seamless user experiences',
    'Performed bug fixes, performance tuning, and contributed to app releases on the Play Store',
    'Wrote clean, maintainable Dart code and followed Git-based version control practices within a team environment'],

  technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Functions', 'Firebase Auth', 'REST API', 'Git', 'Figma'],
  companyType: 'Technology Startup'
},

/*
{
  id: '3',
  role: 'Data Science (Intern)',
  company: 'Argus System',
  location: 'Pune, India',
  duration: 'May 2020 - Jan 2021',
  description: 'Contributed to the development and evaluation of machine learning models for real-world data-driven applications using Python and key ML libraries.',
  achievements: [
    'Worked on supervised learning models for classification and regression tasks using scikit-learn',
    'Performed data preprocessing, feature selection, and model evaluation on structured datasets',
    'Implemented training pipelines with cross-validation, hyperparameter tuning, and metrics tracking',
    'Visualized model performance and feature importance using Matplotlib and Seaborn',
    'Collaborated with data scientists to optimize model accuracy and reduce overfitting'],

  technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  companyType: 'IT Services and Consulting'
}
  
*/

];




interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex items-center mb-12">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>

      {/* Timeline Dot */}
      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10">
      </div>

      {/* Card */}
      <div className={`ml-32 w-full max-w-2xl mr-auto`}>

        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.role}</h3>
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <span>{experience.company}</span>
                  {experience.companyType &&
                  <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {experience.companyType}
                    </span>
                  }
                </div>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2"/>
                {experience.duration}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2"/>
                {experience.location}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">{experience.description}</p>

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) =>
                <TechBadge key={tech} tech={tech} size="sm"/>
                )}
              </div>
            </div>

            {/* Expandable Content — kept as interaction animation */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, idx) =>
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start">

                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </motion.li>
                  )}
                </ul>
              </div>
            </motion.div>

            {/* Expand/Collapse Button */}
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">

              {isExpanded ?
              <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4"/>
                </> :

              <>
                  <span>Show Achievements</span>
                  <ChevronDown className="w-4 h-4"/>
                </>
              }
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>);

};

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
  link.download = 'Prajwal-Thite-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through my career milestones, showcasing growth, impact, and technical expertise
            across diverse projects and technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experiences.map((experience, index) =>
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}/>

          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3" onClick={handleDownloadCV}>
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>);

};

export default ExperienceSection;
