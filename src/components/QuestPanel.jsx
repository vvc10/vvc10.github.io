import { Settings } from 'lucide-react';
import React from 'react';

export function QuestPanel() {
  return (
    <div className="fixed w-[15%] bottom-0 top-12 right-0 p-4 border-l bg-black border-[#ff2a6d]/0  flex flex-col">
      {/* Active Quest Section */}
      <div
        variant="ghost"
        className="text-xs p-0 w-full flex flex-col h-max rounded-none uppercase border-l-[4px] border-red-500 bg-black"
      >
        <span
          className="h-[40%] text-left px-2 py-2 items-center text-[22px] tracking-[1px] bg-[#E84A4A] big-shoulders"
        >
          ACTIVE QUEST
        </span>
        <p className="h-[60%] text-left px-2 py-2 text-gray-400 w-full text-[14px] iceland">
          AI Merch Mockups
        </p>

        <div>
          <p className="h-[60%] text-left px-2 py-2 text-gray-100 w-full text-[14px] iceland">
            QUEST NAME
          </p>
          <span
            className="h-[40%] text-left px-2 py-2 items-center text-[22px] tracking-[1px] font-[600] text-[#E84A4A] big-shoulders"
          >
            ACTIVE QUEST
          </span>
        </div>

        <br />
        <div className="gap-0 flex flex-col">
          <p className="h-[60%] text-left px-2 text-gray-100 w-full text-[14px] iceland">
            GOAL
          </p>
          <p className="h-[60%] text-left px-2 text-gray-400 w-full text-[14px] iceland">
            ABOUT GOAL
          </p>
        </div>
        <br />
        <div className="gap-0 flex flex-col">
          <p className="h-[60%] text-left px-2 text-gray-100 w-full text-[14px] iceland">
            REWARDS
          </p>
          <p className="h-[60%] text-left px-2 text-gray-400 w-full text-[14px] iceland">
            USERS
          </p>
        </div>
      </div>

      {/* Port Control Section */}
      <div className="port-control flex flex-col mt-4 flex-grow justify-end space-y-3">
        {/* Sound Effects */}
        <div className="flex flex-row justify-between items-center text-[#E84A4A] border-[#E84A4A]/20 px-3 py-2 border rounded-md">
          <span className="big-shoulders text-[18px]">SOUND EFFECTS</span>
          <input
            type="checkbox"
            className="w-5 h-5 border border-[#E84A4A] bg-[#E84A4A]/20 checked:bg-[#E84A4A] focus:ring-[#E84A4A]"
          />
        </div>

        {/* Music */}
        <div className="flex flex-row justify-between items-center text-[#E84A4A] px-3 py-2 border border-[#E84A4A]/20 rounded-md">
          <span className="big-shoulders text-[18px]">MUSIC</span>
          <input
            type="checkbox"
            className="w-5 h-5 border border-[#E84A4A] bg-[#E84A4A]/20 checked:bg-[#E84A4A] focus:ring-[#E84A4A]"
          />
        </div>

        {/* Visual Settings */}
        <div className="flex flex-row justify-between items-center text-[#E84A4A] px-3 py-2 border border-[#E84A4A]/20 rounded-md">
          <span className="big-shoulders text-[18px]">VISUAL SETTINGS</span>
          <Settings className="text-[#E84A4A]" />
        </div>
      </div>

    </div>
  );
}
