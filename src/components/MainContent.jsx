import React from 'react'

const MainContent = () => {
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
      Hello
    </div>
  )
}

export default MainContent
