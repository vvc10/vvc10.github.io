"use client";

import React, { useState } from 'react';
import { Signal } from 'lucide-react';

export function ProfilePanel({ isModalOpen, setIsModalOpen, handleOpenModal }) {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => setIsModalOpen(true);
    // const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="fixed w-[15%] bottom-0 inset-0 top-12">

            <div
                className={`space-y-6 p-4`}
            >

            
                <div className="relative border-2 border-[.1px] border-dashed border-[#E84A4A]/20 p-3">
                    <div className="absolute w-2 h-2 top-0 left-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

                    <div className="absolute w-2 h-2 top-0 right-0 bottom-0 border-2 border-transparent 
          border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>

                    <div className="absolute w-2 h-2  left-0 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>

                    <div className="absolute w-2 h-2 right-0 bottom-0 border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>
                    <img
                        src="https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                        alt="Profile"
                        className="w-full aspect-square object-cover"
                    />
                </div>

                <div className="space-y-4">
                    {/* Name Section */}
                    <div>
                        <div className="text-[14px] uppercase text-gray-200 iceland">NAME</div>
                        <div className="text-[22px] -tracking-5 font-[600] text-[#E84A4A] font-mono big-shoulders">WEB DEVELOPER</div>
                    </div>

                    {/* Occupation Section */}
                    <div>
                        <div className="text-[14px] uppercase text-gray-200 iceland">OCCUPATION</div>
                        <div className="text-[22px] font-[600] text-[#E84A4A] font-mono big-shoulders">WEB DEVELOPER</div>
                    </div>

                    {/* Corporation Section */}
                    <div>
                        <div className="text-[14px] uppercase text-gray-200 iceland">CORPORATION</div>
                        <div className="text-[22px] font-[600] text-[#E84A4A] font-mono big-shoulders">FREELANCER</div>
                    </div>

                    {/* Availability Section */}
                    <div className="space-y-2">
                        <div className="text-[14px] uppercase text-gray-200 iceland">Availability</div>
                        <button
                            onClick={handleOpenModal}
                            className="text-[22px] font-[600] w-full text-left bg-[#E84A4A] border border-[#E84A4A] px-1 py-0 font-mono big-shoulders text-black"
                        >
                            OPEN FOR HIRE
                        </button>
                    </div>

                    {/* Socials Section */}
                    <div className="space-y-2">
                        <div className="text-[14px] uppercase text-gray-200 iceland">SOCIALS</div>
                        <button className="text-[22px] font-[600] w-full text-left bg-transparent border border-[#E84A4A] px-1 py-0 font-mono big-shoulders text-[#E84A4A]">
                            INSTAGRAM
                        </button>
                    </div>


                    {/* Super Intro */}

                </div>

                <div className="mt-8 flex-grow justify-end">
                    <div className="text-xs uppercase mb-2">Super Intro</div>
                    <div className="text-xs font-mono text-gray-400 uppercase">
                        Passionate creator merging tech, design, and innovation.
                        <br />
                        Driven by ideas that inspire and disrupt.
                        <br />
                        Turning visions into extraordinary realities.
                    </div>
                </div>
            </div>


        </div>
    );
}
