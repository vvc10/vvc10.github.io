import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav
        className="w-[60%] h-auto fixed mx-auto bottom-5 left-0 right-0"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="mx-auto h-auto flex justify-between px-4 py-2">
          {['beginnings', 'logs', 'achievements', 'creations', 'games'].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                className="text-xs p-0 flex flex-col h-max w-[160px] bg-black rounded-none uppercase border-l-[4px] border-red-500/100"
              >
                <span
                  className={`h-[40%] text-left px-2 py-2 items-center text-[18px] tracking-[1px] bg-[#242425] w-[100%] ${
                    pathname === `/${item}`
                      ? 'text-white bg-[#E84A4A] big-shoulders'
                      : 'text-gray-400 hover:bg-[#E84A4A] hover:text-white big-shoulders'
                  }`}
                >
                  {item}
                </span>
                <p className="h-[60%] text-left px-2 py-2 text-gray-400 w-[100%] text-[10px] iceland">
                  {pathname === `/${item}` ? 'Active' : 'Inactive'}
                </p>
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
