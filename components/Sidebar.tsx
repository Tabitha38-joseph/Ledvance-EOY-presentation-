
import React from 'react';
import { SlideData } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  slides: SlideData[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentSlide, onSelectSlide, slides }) => {
  return (
    <aside className={`bg-darkgrey text-white transition-all duration-300 flex-shrink-0 flex flex-col ${isOpen ? 'w-72' : 'w-0 lg:w-20 overflow-hidden'}`}>
      <div className="p-6 border-b border-white/10 flex items-center space-x-3">
        <div className="w-8 h-8 bg-ledvance rounded flex items-center justify-center font-bold">L</div>
        {isOpen && <span className="font-bold text-lg tracking-tight">LEDVANCE <span className="font-normal opacity-60">ABR</span></span>}
      </div>
      
      <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-1">
          {slides.map((slide, index) => (
            <li key={slide.id}>
              <button
                onClick={() => onSelectSlide(index)}
                className={`w-full text-left px-6 py-3 flex items-center space-x-4 transition-all group ${currentSlide === index ? 'bg-ledvance text-white' : 'hover:bg-white/5 text-gray-400'}`}
              >
                <span className={`${currentSlide === index ? 'text-white' : 'group-hover:text-ledvance'}`}>
                  {slide.icon}
                </span>
                {isOpen && (
                  <div className="flex flex-col">
                    <span className={`text-xs uppercase font-bold tracking-widest ${currentSlide === index ? 'text-white/60' : 'text-gray-500'}`}>Slide 0{index + 1}</span>
                    <span className="text-sm font-medium truncate">{slide.title}</span>
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          {isOpen && <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">2025 Review Session</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
