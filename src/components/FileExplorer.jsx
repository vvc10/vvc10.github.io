import React from 'react';

const mockFiles = [
  { name: 'homepage.jpg', size: '23KB' },
  { name: 'archive-view.jpg', size: '23KB' },
  { name: 'user-facing-part.jpg', size: '23KB' },
  { name: 'dashboard-home-view.jpg', size: '23KB' }
];

export function FileExplorer() {
  return (
    <div className="border-b border-[#E84A4A]/20 pb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[14px] tracking-wider text-gray-500">FILE EXPLORER</h3>
        <button className="text-[#E84A4A]">×</button>
      </div>
      
      <div className="text-[12px] text-gray-500 mb-2">
        LOCATION: /PROJECTS/{'{PROJECT_NAME}'}
      </div>
      
      <div className="space-y-2">
        {mockFiles.map((file) => (
          <div key={file.name} className="flex items-center gap-4 p-2 hover:bg-[#E84A4A]/5">
            <div className="w-4 h-4 border border-[#E84A4A]/20" />
            <span className="text-gray-400">{file.name}</span>
            <span className="text-gray-500 ml-auto">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}