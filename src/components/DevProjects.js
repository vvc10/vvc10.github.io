'use client'

import React from 'react';
import ProjectCards from './ProjectCards';
import './css/styles.css'
import banner1 from './img/projectbanner/4.png';
import banner2 from './img/projectbanner/5.png';
import banner3 from './img/projectbanner/6.png';

const DevProjects = () => {
  const projects = [
    {
      title: "CampusCord ",
      description: "Binding Campus Life Together.",
      link: "https://github.com/vvc10/",
      banner: banner1,
    },
    {
      title: "MoodiPlay",
      description: "Play Your Mood, Feel the Music.",
      link: "https://github.com/vvc10/",
      banner: banner2,
    },
    {
      title: "Imageius",
      description: "A Genius Image Generator for genius creator.",
      link: "https://github.com/vvc10/",
      banner: banner3,
    }
  ];

  return (
    <section className="px-[5%] py-[5%] w-full h-fit" id="projects">
      <div className="flex flex-row justify-between items-center mb-[20px]" style={{paddingLeft:'0'}}>
        <h2 className="font-[500] text-[18px] text-left">
          My Projects
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
  );
};

export default DevProjects;

