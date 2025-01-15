'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import Input from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Badge } from '../components/ui/badge'
import { Calendar, LinkIcon, Clock, Moon, Sun } from 'lucide-react'
import BlogPost from '../app/blog/blogpost'
import InteractiveBanner from '../app/utils/interactivebanner'
import { GoArrowUpRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import Link from 'next/link'
import './globals.css'
import { SiGooglemeet } from "react-icons/si";
import { IoIosCall } from "react-icons/io";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false)
  const [guestbookEntries, setGuestbookEntries] = useState([
    {
      name: "Pranav Dhingra - Hedgemyfunds (CEO)",
      role: "CEO at Hedgemyfunds",
      message: "Working with you was fantastic. Truly a reliable and efficient work.",
      date: "May 10, 2023"
    },
    {
      name: "R.K. Tiwary",
      message: "Mr.Pankaj Yadav has delivered excellent work. Collaborating with him was a great experience. His dedication and results are truly commendable.!",
      role: "National General Secretary at AIDEOA",
      date: "May 5, 2023"
    },
    {
      name: "Vinay Nath Tiwary",
      message: "Your latest project is amazing. Can't wait to see what you do next!",
      role: "Tech Lead at HMF",
      date: "April 28, 2023"
    }
  ]);

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEntry = {
      name: formData.get('name'),
      message: formData.get('message'),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    setGuestbookEntries([newEntry, ...guestbookEntries]);
    e.target.reset();
  };

  return (
    <main
      className={`main-box fixed ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
        } flex items-center justify-center w-full h-screen font-sans`}
    >
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${darkMode ? 'text-gray-900' : ' text-white'
            }`}
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}

        </Button>
      </div>

      <div className="relative h-[96vh] w-full flex items-center justify-center">
        <div
          className={`relative overflow-y-auto h-[96vh] w-full max-w-4xl ${darkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-lg`}
        >
          {/* Interactive Banner */}
          <div className="h-[200px] mb-8">
            <InteractiveBanner />
          </div>

          {/* Profile Section */}
          <div className="max-w-2xl mx-auto px-4 -mt-16 relative z-10">
            <div className="relative flex flex-col items-center text-center mb-12">
              <div className="rounded-full border-4 border-white shadow-lg overflow-hidden w-32 h-32 mb-4">
                <Image
                  src="/assets/bg/pf01.jpeg"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mb-2">Pankaj Yadav</h1>
              <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Bringing ideas to life with code! ✨
              </p>
              <p className={`text-sm max-w-md mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Web developer, UIX Designer, Content writter
                and Content Creator.
              </p>

              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Available
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <LinkIcon className="w-3 h-3" />
                  /links
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <GrLocation className="w-3 h-3" />
                  India
                </Badge>
              </div>


              <div className='relative'>
                <Button className="bg-[#E84A4A] hover:bg-[#E84A4A]/90 text-white"><a href='tel:+123456789'>Book a call</a></Button>
                {/* <div className='absolute m-auto bg-gray-800 px-4 py-3 rounded-full top-[40px] flex flex-row gap-4'>
                  <span className='text-[30px] text-white'><SiGooglemeet /></span>
                  <span className='text-[30px] text-white'><IoIosCall /></span>
                </div> */}
              </div>

            </div>

            {/* Newsletter */}
            <div className="text-center mb-12">
              <h2 className="text-xl font-semibold mb-4">
                Keep up to date with my latest projects and adventures!
              </h2>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input type="email" placeholder="Email Address" className="flex-1 bg-gray-100" />
                <Button className="bg-[#E84A4A] hover:bg-[#E84A4A]/90 text-white">Subscribe!</Button>
              </div>
              <p className={`text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                No spam. Unsubscribe any time.
              </p>
            </div>

            {/* Navigation */}
            <Tabs defaultValue="feed" className="mb-12">
              <TabsList className="grid w-full font-[400] grid-cols-4 bg-gray-0 border rounded-[10px] text-gray-400">
                <TabsTrigger
                  value="feed"
                  className="data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 rounded-[10px]"
                >
                  Feed
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 rounded-[10px]"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 rounded-[10px]"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="guestbook"
                  className="data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 rounded-[10px]"
                >
                  Guestbook
                </TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="mt-6">
                <BlogPost />
              </TabsContent>
              <TabsContent value="about" className="mt-6 animate-fadeIn">
                <h2 className="font-bold text-2xl mb-4">About Me</h2>
                <div className="prose dark:prose-invert max-w-none border rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Hi there! I'm <strong>Pankaj</strong>, a passionate web engineer with a knack for crafting beautiful, interactive, and performant web applications. With over a decade of experience, I've been fortunate to work on a diverse array of projects, from startups to enterprise-level solutions.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    My expertise spans modern web technologies such as <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>. I’m deeply invested in web performance optimization, accessibility, and building delightful user experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Beyond coding, I love sharing knowledge through <em>tech conferences</em>, <em>writing articles</em>, and <em>experimenting with new technologies</em>. Let's connect and build something amazing together!
                  </p>
                  <a
                    href="#contact"
                    className="text-primary-500 hover:underline font-semibold inline-flex items-center space-x-1"
                  >
                    <span>Contact Me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="content" className="animate-fadeIn">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
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
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative h-[280px] w-[300px] bg-transparent p-3 rounded-[20px] border transition-shadow duration-300 group overflow-hidden"
                    >
                      {/* Image */}
                      <Image
                        src={item.image}
                        alt="Profile"
                        layout="fill" // Ensures the image fills the container
                        objectFit="cover" // Ensures proper scaling of the image
                        className="absolute inset-0 w-full h-full z-[-1] transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Text */}

                      <div className="relative z-10 h-full flex flex-col justify-end">
                        <Link href={item.link}>
                          <h3 className="font-[500] cursor-pointer text-[10px] w-fit rounded-full px-2 py-1 bg-gray-100 mb-0 flex items-center">
                            <span className="text-[10px] mr-2">{item.icon}</span>
                            {item.title}
                            <span className='p-[2px] rounded-full border bg-white hover:bg-red-400 text-gray-400 hover:text-white ml-2'><GoArrowUpRight /></span>
                          </h3>
                        </Link>

                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guestbook" className="mt-6 animate-fadeIn">
                <div className="space-y-6">
                  <h3 className="font-bold text-2xl mb-4 flex items-center justify-between">
                    <span>💬 Feedbacks</span>
                    <button className="bg-gray-200 text-gray-500 font-[400] px-3 py-0 rounded-[8px] h-fit text-[14px]">
                      Drop Feedbacks
                    </button>
                  </h3>

                  <div className="space-y-4">
                    {guestbookEntries.map((entry, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                        <p className="font-semibold text-lg">{entry.name}</p>
                        <p className="font-[400] text-[14px] text-gray-500 mb-4">{entry.role}</p>

                        <p className="text-sm text-gray-600 dark:text-gray-500">{entry.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{entry.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

