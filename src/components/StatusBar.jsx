import React, { useState, useEffect } from 'react';

export function StatusBar() {
  const [localTime, setLocalTime] = useState('');
  const [serverTime, setServerTime] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  useEffect(() => {
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', { hour12: false });
    };

    const serverTimeOffset = 1 * 60 * 60 * 1000; // 1 hour in milliseconds

    const updateTime = () => {
      const now = new Date();
      const local = formatTime(now);
      const server = formatTime(new Date(now.getTime() + serverTimeOffset));

      setLocalTime(local);
      setServerTime(server);
    };

    const interval = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(interval);
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex fixed justify-between w-[100%] z-50 items-center mt-0 px-6 py-3 bg-black">
        <div className="flex gap-8 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[22px] font-[600] big-shoulders text-[#7DFF68]">48</span>
            <span className="text-[14px] uppercase tracking-wider big-shoulders opacity-90">LEVEL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[22px] font-[600] big-shoulders text-[#7DFF68]">12</span>
            <span className="text-[14px] uppercase tracking-wider big-shoulders opacity-90">COFFEES EARNED</span>
            <button
              className="text-[14px] px-3 py-2 border-gray-800 border-[1px] font-[600] text-[#E84A4A]"
              onClick={handleModalToggle}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-8 text-xs">
          <div className="iceland tracking-[1px] text-[18px] text-white">CREDITS</div>
          <div className="iceland tracking-[1px] text-[18px] text-gray-500 flex flex-row">
            SERVER TIME:<p className="text-gray-100 ml-1">{serverTime}</p>
          </div>
          <div className="iceland tracking-[1px] text-[18px] text-gray-500 flex flex-row">
            LOCAL TIME:<p className="text-gray-100 ml-1">{localTime}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full uppercase bg-black bg-opacity-60 flex items-center justify-center z-50">

          <div className="relative bg-black p-12 rounded-lg shadow-lg text-left border-[1px] border-dashed border-[#E84A4A]/20">
            <div className="absolute w-2 h-2 top-0 left-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

            <div className="absolute w-2 h-2 top-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

            <div className="absolute w-2 h-2  left-0 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

            <div className="absolute w-2 h-2 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>
            <h2 className="text-lg font-bold mb-4 big-shoulders text-[#E84A4A]">Buy Me a Coffee</h2>
            <p className="mb-4 text-[14px] opacity-50 iceland">Support me by buying a coffee!</p>
            <div className="flex gap-4 justify-center">
              <button
                className="px-4 py-2 border-[2px] big-shoulders text-[#E84A4A] border-[#E84A4A] rounded-none hover:text-white  hover:bg-[#E84A4A]"
                onClick={() => alert('Thank you for your support!')}
              >
                BUY
              </button>
              <button
                className="px-4 py-2 text-gray-700 rounded-md"
                onClick={handleModalToggle}
              >
                CANCEL [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
