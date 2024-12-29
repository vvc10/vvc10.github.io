import React from 'react';

const About = () => {
  const allSkills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Sass",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Python",
    "Django",
    "REST APIs",
    "Git",
    "GitHub",
    "GitLab",
    "Jest",
    "Mocha",
    "Chai",
    "Postman",
    "Heroku",
    "Vercel",
    "Netlify",
    "AWS",
    "Figma",
    "Adobe XD",
    "Wireframing",
    "Prototyping",
  ];

  return (
    <section className="px-5 py-5 w-full h-full" id="about">
      <div className="flex flex-col mb-5">
        <h2 className="font-medium text-xl">About Me</h2>
        <p className="text-gray-500 font-normal text-base py-2">A passionate web developer.</p>
        <p className="text-gray-300 text-base mt-2 leading-6">
          I create engaging and user-friendly websites, leveraging modern technologies to deliver high-quality solutions.
        </p>
      </div>

      <div className="mb-5">
        <h3 className="font-medium text-lg">Skills</h3>
        <p className="text-gray-500 font-normal text-base py-2">Technologies I work with:</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <SkillBadge skills={allSkills} />
      </div>
    </section>
  );
};

const SkillBadge = ({ skills }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <span key={index} className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full border border-gray-700">
        {skill}
      </span>
    ))}
  </div>
);

export default About;
