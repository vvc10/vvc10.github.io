import React from 'react'
import './css/styles.css'
import ProjectCards from './ProjectCards';
import banner1 from './img/designbanner/1.png';
import banner2 from './img/designbanner/2.png';
import banner3 from './img/designbanner/3.png';

const DesignProjects = () => {
  const projects = [
    {
      title: "The Luxury Hotel Conceirge | UI Design",
      description: "Complete UI Design (12+ pages)",
      link: "https://www.behance.net/pankajy",
      banner: banner1,
    },
    {
      title: "AIDEOA - An Association Website",
      description: "Complete UI Design (8+ pages)",
      link: "https://www.behance.net/pankajy",
      banner: banner3,
    },
    {
      title: "HedgeMyFunds",
      description: "Complete desktop + Mobile UI",
      link: "https://www.behance.net/pankajy",
      banner: banner2,
    },
  ];

  return (
    
    <div>
        <section className="px-[5%] py-[5%] w-full h-fit" id="projects">
      <div className="flex flex-row justify-between items-center mb-[20px] text-left">
        <h2 className="font-[500] text-[18px] text-left">
          UI/UX Projects
          <p className="text-gray-500 font-[400] text-[15px] py-2">Featured projects</p>
        </h2>
        <button className="w-fit px-4 py-2 rounded-[20px] text-white border-white text-[15px] hover:text-black hover:bg-white transition-all">
          View gallery
        </button>
      </div>

      <div className="grids_form">
        {projects.map((project, index) => (
          <ProjectCards project={project} key={index} />
        ))}
      </div>
    </section>
    </div>
  )
}

export default DesignProjects
