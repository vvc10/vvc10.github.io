import React from 'react';

export function ProjectDetails({ creation }) {
  return (
    <div className="border-b border-[#E84A4A]/20 pb-4 mb-4">
      <h3 className="text-[14px] tracking-wider text-gray-500 mb-2">PROJECT NAME</h3>
      <h2 className="text-[#E84A4A] text-xl tracking-wider">{creation.title}</h2>
      
      <h3 className="text-[14px] tracking-wider text-gray-500 mt-4 mb-2">BRIEF</h3>
      <p className="text-[#E84A4A] uppercase">{creation.description}</p>
      
      <h3 className="text-[14px] tracking-wider text-gray-500 mt-4 mb-2">TECHNOLOGIES</h3>
      <div className="flex gap-2">
        {creation.skills.map((tech) => (
          <div key={tech} className="border bg-[#E84A4A]/50 border-[#E84A4A]/50 px-2 py-0">
            <span className="text-[12px] text-gray-400">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}