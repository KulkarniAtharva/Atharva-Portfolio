import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CertificationBadge from "@/components/CertificationBadge";

interface Education 
{
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  // description: string;
}

interface Certification 
{
  id: string;
  name: string;
  provider: string;
  icon:  string | React.ReactNode;
  color: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verified: boolean;
  link?: string;
}

const EducationSection = () => {
  const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science (Research)",
    field: "Computer Science & Engineering",
    institution: "Indian Institute of Technology, Indore - IIT Indore",
    location: "Indore, Madhya Pradesh",
    period: "2025 - 2027",
    gpa: "8.33 / 10",
    honors: ["Machine Learning", "Deep Learning", "CNN", "Vision Transformers", "RAG", "LLM", "VLM"],
    // description: "Specialized in Machine Learning and Artificial Intelligence with focus on Deep Learning architectures and Natural Language Processing."
  },
  {
    id: "2",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra",
    period: "2018 - 2022",
    gpa: "8.74 / 10.0",
    honors: ["Operating Systems", "Computer Networks", "DBMS", "Computer Organisation & Architecture", "Android", "Flutter", "React.js", "Node.js", "Project Management" , "Compiler Design", "Team Leadership"],
    // description: "Strong foundation in software engineering, algorithms, and data structures with hands-on experience in full-stack development."
  }];


  const certifications: Certification[] = [
  {
    id: "1",
    name: "Final Year Project Competition - 1st Prize",
    provider: "Computer Society of India",
    icon: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s' alt='Admin'/>,
    color: "border-orange-400",
    issueDate: "May 2022",
    credentialId: "5961451",
    verified: true,
    link: "https://www.salesforce.com/trailblazer/xmczz5a47sxgtxcci0"
  },
  {
    id: "2",
    name: "DSA & OOP Project Competition - 1st Prize",
    provider: "Computer Society of India",
    icon: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s' alt='AI'/>,
    color: "border-orange-400",
    issueDate: "Oct 2019",
    credentialId: "6122252",
    verified: true,
    link: "https://www.salesforce.com/trailblazer/xmczz5a47sxgtxcci0"
  },
  {
    id: "3",
    name: "Programming Contest - 2nd Prize",
    provider: "Computer Society of India",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s" alt="AWS" className="w-9 h-9" />,
    color: "border-blue-500",
    issueDate: "Sept 2019",
    credentialId: "9L5MFP4MK2NS",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/9L5MFP4MK2NS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "4",
    name: "Programming Contest(Source Code) - 1st Prize",
    provider: "Computer Society of India",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnicMMBfXdQJrZy9RvzmnhzvVw1bgLTs_qA&s" alt="Microsoft" className="w-8 h-8" />,
    color: "border-cyan-400",
    issueDate: "March 2019",
    credentialId: "",
    verified: true,
    link: "https://drive.google.com/file/d/1e0RuMoySCu78Ps3hnLxagI_yKqbpV_k-/view"
  },
  {
    id: "5",
    name: "Problem Solving in C",
    provider: "NPTEL - IIT Kharagpur",
    icon: <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/company-logo_200_200/0/1631333024279?e=2147483647&v=beta&t=WO-NzMSDCnOM3mAn4uNs-_WlQvA67CyOND1RuB7R_kU" alt="Google" className="w-8 h-8" />,
    color: "border-purple-400",
    issueDate: "2019",
    credentialId: "DBD3JABMJ69K",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/DBD3JABMJ69K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "6",
    name: "Programming in C++",
    provider: "NPTEL - IIT Kharagpur",
    icon: <img src="https://media.licdn.com/dms/image/v2/C4D0BAQHJZGa_G2gwUg/company-logo_200_200/company-logo_200_200/0/1631333024279?e=2147483647&v=beta&t=WO-NzMSDCnOM3mAn4uNs-_WlQvA67CyOND1RuB7R_kU" alt="Google" className="w-8 h-8" />,
    color: "border-purple-400",
    issueDate: "2019",
    credentialId: "ARFR9NVA6ERI",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/ARFR9NVA6ERJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
    {
    id: "7",
    name: "Python Programming",
    provider: "University of Michigan",
    icon: <img src="https://images.icon-icons.com/1508/PNG/512/python_104451.png" alt="Google" className="w-8 h-8" />,
    color: "border-purple-400",
    issueDate: "Aug, 2020",
    credentialId: "k8emxkbmwc7r",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/certificate/5G5M6QNZMGTD"
  },
];


  return (
    <section id="education" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">

          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>

              <GraduationCap className="h-8 w-8 text-blue-600"/>
            </motion.div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education &amp; Certifications
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence and professional certifications that drive innovation and expertise
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">

          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600"/>
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu) =>
            <motion.div
              key={edu.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}>

                <Card className="overflow-hidden border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="mt-1">
                            <GraduationCap className="h-5 w-5 text-blue-600"/>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {edu.degree} in {edu.field}
                            </h4>
                            <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4"/>
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span >{edu.period}</span>
                          </div>
                          {edu.gpa &&
                        <div className="flex items-center gap-1">
                              <Award className="h-4 w-4"/>
                              <span>GPA: {edu.gpa}</span>
                            </div>
                        }
                        </div>

                        {/* <p className="text-gray-700 mb-3">{edu.description}</p> */}

                        {edu.honors && edu.honors.length > 0 &&
                      <div className="flex flex-wrap gap-2">
                            {edu.honors.map((honor, idx) =>
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">

                                {honor}
                              </span>
                        )}
                          </div>
                      }
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>

        {/* Certifications Section */}
        <div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-indigo-600"/>
            Professional Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert) =>
            <div key={cert.id}>
                <CertificationBadge {...cert}/>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/atharvaiitian/details/certifications/")}
              className="group border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300">

              <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200"/>
              View All Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default EducationSection;
