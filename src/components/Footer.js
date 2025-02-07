import { FaPython, FaJava, FaDatabase, FaBlog, FaUsers, FaDiscord, FaBriefcase, FaLock } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-gradient-to-r from-indigo-700 to-purple-800 text-gray-200 py-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        {[
          { title: "Courses", links: ["Python", "Java", "C/C++", "MySQL"], icons: [<FaPython />, <FaJava />, <FaDatabase />, <FaDatabase />] },
          { title: "Resources", links: ["Blog", "Docs", "Tutorials", "Projects"], icons: [<FaBlog />, <FaDatabase />, <FaDatabase />, <FaDatabase />] },
          { title: "Community", links: ["Forums", "Discord", "Events", "FAQ"], icons: [<FaUsers />, <FaDiscord />, <FaUsers />, <FaUsers />] },
          { title: "Company", links: ["About Us", "Careers", "Contact", "Privacy"], icons: [<FaBriefcase />, <FaBriefcase />, <FaBriefcase />, <FaLock />] }
        ].map((section, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold text-white text-xs">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-1 text-gray-300 text-xs">{section.icons[i]}</span>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 text-xs"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center text-gray-400 text-xs border-t border-gray-600 pt-2">
        
        © {new Date().getFullYear()} Learn Without Limits. All rights reserved.
      </div>
    </div>
  </footer>
);