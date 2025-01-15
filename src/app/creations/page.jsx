'use client'

import { useState } from 'react'
import { CreationsPanel } from '../../components/CreationsPanel'
import { StatusBar } from '../../components/StatusBar';
import { ProfilePanel } from '../../components/ProfilePanel';
import { QuestPanel } from '../../components/QuestPanel';
import BottomBar from '../../components/BottomBar';
import '../../app/globals.css';
import { playSound } from '../utils/playsound';

const creations = [
  {
    title: "Campuscord",
    description: "Binding Campus Life Together",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    details: "",
    level: 5,
    coins: 1200,
    publishedDate: "3 months ago",
    skills:  ['React', 'Node.js', 'TypeScript', 'Tailwind'],
    link: ""
  },
  {
    title: "MoodiPlay",
    description: "Play Your Mood, Feel the Music",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    details: "Real-time analytics dashboard powered by AI, providing actionable insights through interactive visualizations.",
    level: 8,
    coins: 2400,
    publishedDate: "2 months ago",
    skills:  ['React', 'Node.js', 'TypeScript', 'Tailwind'],

  },
  {
    title: "Imageius",
    description: "A Genius Image Generator for genius creator",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    details: "Feature-rich e-commerce platform with AI-powered recommendations and real-time inventory management.",
    level: 12,
    coins: 3600,
    publishedDate: "1 month ago",
    skills:  ['React', 'Node.js', 'TypeScript', 'Tailwind'],

  }
];



export default function Creations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [playerLevel] = useState(48);
  const [coins] = useState(1425);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % creations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + creations.length) % creations.length);
  };


  return (

    <>
      <div className={`min-h-screen bg-black text-white overflow-hidden transition-all duration-500 ${isModalOpen ? 'scale-95' : ''}`}>
        <StatusBar />

        <div className="mx-auto flex gap-2">
          <ProfilePanel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOpenModal={handleOpenModal} />
          <CreationsPanel
            creations={creations}
            currentSlide={currentSlide}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            onSlideSelect={setCurrentSlide} />
          <QuestPanel />
          <BottomBar />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 big-shoulders flex flex-col bg-[black]/95 items-center justify-center z-50"
          onClick={handleCloseModal}
        >

          <div
            className="relative   w-[30%] h-3/4 p-6 rounded shadow-lg transform transition-all duration-500 scale-0"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: isModalOpen ? 'scale(1)' : 'scale(0)' }}
          >
            <h2 className="text-lg uppercase font-bold text-[18px]  text-white mb-1">OPEN FOR HIRE</h2>
            <p className="text-gray-300 text-[18px] iceland mb-4 tracking-[.5px]">I would love to hear about your projects!</p>

            <form className="space-y-4 bg-[#E84A4A]/20 p-8 mb-5 flex flex-col gap-4 tracking-[1px]">
              <div className='flex flex-col gap-2'>
                <label className='big-shoulders text-[#E84A4A] text-[18px] '>NAME</label>
                <input
                  type="text"
                  placeholder="SPIDERMAN"
                  className="w-full p-3 rounded bg-black border-[.5px] border-gray-800 text-white iceland mb-2"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='big-shoulders text-[#E84A4A] text-[18px]'>EMAIL</label>
                <input
                  type="email"
                  placeholder="EXAMPLE@GMAIL.COM"
                  className="w-full p-3 rounded bg-black border-[.5px] border-gray-800 text-white iceland mb-2"
                />
              </div>
              <div className='flex flex-col gap-2'>
                <textarea
                  placeholder="I WANT TO HIRE YOU FOR MY PROJECT"
                  rows="5"
                  className="w-full p-3 rounded bg-black border-[.5px] border-gray-800 text-white iceland mb-2"
                />
              </div>


            </form>

            <div className='flex flex-row'>
              <button
                type="submit"
                className="w-full bg-[#E84A4A] py-2 rounded text-black font-bold"
              >
                Send Message
              </button>
              <button
                onClick={handleCloseModal}
                className=" text-white"
              >
                CANCEL [ESC]
              </button>

            </div>
          </div>
        </div>
      )}
    </>


  )
}

