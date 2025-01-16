import { useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, MapPin, ExternalLink, Clock } from 'lucide-react';
import { GoArrowUpRight } from "react-icons/go";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "The Luxury Hotel Concierge",
      content: "Optimizing React Applications for Performance",
      icon: "📝",
      image: "/assets/cover/cover01.png",
      link: "https://theluxuryhotelconcierge.com/"
    },
    {
      title: "ArtX UIX",
      content: "Building a Responsive Dashboard with Next.js",
      icon: "🎥",
      image: "/assets/cover/cover02.png",
      link: "https://behance.com/pankajy",
    },
    {
      title: "Flashypanels",
      content: "Building a Responsive Dashboard with Next.js",
      icon: "🎥",
      image: "/assets/cover/flashycover.png",
      link: "https://flashypanels.com/",

    },
    {
      title: "AIDEOA",
      content: "The Future of Web Development at ReactConf 2023",
      icon: "🎤",
      image: "/assets/cover/cover05.png",
      link: "https://www.aideoa.org.in/",
    },
    {
      title: "Hedgemyfunds",
      content: "AI-Powered Code Assistant for VS Code",
      icon: "💻",
      image: "/assets/cover/cover06.jpg",
      link: "https://hedgemyfunds.com/",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-900'
          } shadow-lg transition-all`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Profile */}
          <div className="lg:w-1/3 space-y-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src="/assets/bg/pf01.jpeg"
                  alt="Profile"
                  className="rounded-2xl object-cover w-full h-full shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>

              <h1 className="text-2xl font-bold text-center mb-2">Pankaj Yadav</h1>
              <p className={`text-center mb-6 ${darkMode ? 'text-gray-500' : 'text-gray-800'}`}>
                Web developer & UIX Designer.
                {/* Content writter  and Content Creator. */}
              </p>
              <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Bringing ideas to life with code! ✨
              </p>
              <div className="space-y-4">
                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock size={18} />
                  <span>Available </span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin size={18} />
                  <span>India</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <a href="https://github.com/vvc10" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/pankaj-yadav-23b688250/" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <Linkedin size={20} />
                </a>
                <a href="mailto:pankajy8928@gmail.com" className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <Mail size={20} />
                </a>

              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl font-semibold mb-4">Know Me</h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Passionate about creating beautiful, functional, and user-friendly digital experiences.
                With 5+ years of experience in full-stack development and UI design.
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    className="group relative overflow-hidden rounded-xl aspect-video"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <h3 className="font-[500] cursor-pointer text-[10px] w-fit rounded-full px-2 py-1 bg-gray-100 text-gray-600 mb-0 flex items-center">
                        <span className="text-[10px] mr-2">{project.icon}</span>
                        {project.title}
                        <span className='p-[2px] rounded-full border bg-white hover:bg-red-400 text-gray-400 hover:text-white ml-2'><GoArrowUpRight /></span>
                      </h3>
                      {/* <p className="text-gray-200 text-sm">{project.content}</p> */}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl font-semibold mb-6">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;