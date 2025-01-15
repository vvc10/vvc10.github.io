import React, { useState } from 'react';
import { motion } from 'framer-motion';

const logs = [
  { date: '2023-06-01', content: 'Initiated personal website project', details: 'Started brainstorming and gathering resources for the project.' },
  { date: '2023-06-15', content: 'Completed initial design mockups', details: 'Used Figma to create wireframes and mockups for the website.' },
  { date: '2023-07-01', content: 'Started frontend development', details: 'Set up React project structure and implemented basic components.' },
  { date: '2023-07-15', content: 'Implemented core functionality', details: 'Added routing, state management, and responsive design.' },
  { date: '2023-08-01', content: 'Added animations and sound effects', details: 'Integrated framer-motion for animations and audio effects.' },
  { date: '2023-08-15', content: 'Conducted user testing and gathered feedback', details: 'Invited users to test the beta version and collected feedback for improvements.' },
  { date: '2023-09-01', content: 'Made final adjustments and optimizations', details: 'Optimized performance and fixed critical bugs.' },
  { date: '2023-09-15', content: 'Launched personal website', details: 'Deployed the website and announced it on social platforms.' },
];

const LogsPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openLog, setOpenLog] = useState(null);

  const filteredLogs = logs.filter(log =>
    log.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.date.includes(searchTerm)
  );

  const toggleDropdown = (index) => {
    setOpenLog(openLog === index ? null : index);
  };

  return (

    <div className="fixed top-16 bottom-2 left-[15%] w-[70%] mx-auto iceland border-[.1px] border-dashed border-[#E84A4A]/20 p-14 overflow-scroll">

    <div className="fixed w-2 h-2 top-16 left-[15%] border-2 border-transparent 
          border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 top-16 right-[15%] border-2 border-transparent 
          border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 bottom-2 left-[15%] border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 bottom-2 right-[15%] border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[18px] text-primary mb-8 text-center tracking-[2px]"
      >
        SYSTEM LOGS
      </motion.h1>


      {/* 
      <input
        type="text"
        placeholder="Search logs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-[#E84A4A] rounded text-primary placeholder:text-[#E84A4A]/60 focus:outline-none focus:ring-2 focus:ring-[#E84A4A]/50"
      /> */}

      <div className="space-y-4 overflow-y-scroll">
        {filteredLogs.map((log, index) => (
          <motion.div
            key={log.date}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-[#E84A4A] text-[22px] uppercase tracking-[1px] text-[#E84A4A] hover:bg-[#E84A4A] hover:text-white px-4 py-2 cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <div className="flex justify-between items-center">
              <span>{log.content}</span>
              <span>{log.date}</span>
            </div>
            {openLog === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] text-white  mt-2 p-2 rounded"
              >
                {log.details}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default LogsPanel;
