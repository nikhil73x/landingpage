'use client';

import React from 'react';
import {
  IoHomeOutline,
  IoClipboardOutline,
  IoTimeOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
  IoCameraOutline,
  IoShareSocialOutline,
  IoHeartOutline
} from 'react-icons/io5';

export interface MenuItem {
  title: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  href?: string;
  onClick?: () => void;
}

// Configured with Home, Attendance, Timetable, Notification with active routing
export const attendanceMenuItems: MenuItem[] = [
  { title: 'Home', icon: <IoHomeOutline />, gradientFrom: '#a955ff', gradientTo: '#ea51ff', href: '/login' },
  { title: 'Attendance', icon: <IoClipboardOutline />, gradientFrom: '#56CCF2', gradientTo: '#2F80ED', href: '/attendance' },
  { title: 'Timetable', icon: <IoTimeOutline />, gradientFrom: '#FF9966', gradientTo: '#FF5E62', href: '#timetable' },
  { title: 'Notification', icon: <IoNotificationsOutline />, gradientFrom: '#80FF72', gradientTo: '#7EE8FA', href: '#notifications' }
];

export const defaultMenuItems: MenuItem[] = [
  { title: 'Home', icon: <IoHomeOutline />, gradientFrom: '#a955ff', gradientTo: '#ea51ff', href: '/login' },
  { title: 'Video', icon: <IoVideocamOutline />, gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
  { title: 'Photo', icon: <IoCameraOutline />, gradientFrom: '#FF9966', gradientTo: '#FF5E62' },
  { title: 'Share', icon: <IoShareSocialOutline />, gradientFrom: '#80FF72', gradientTo: '#7EE8FA' },
  { title: 'Tym', icon: <IoHeartOutline />, gradientFrom: '#ffa9c6', gradientTo: '#f434e2' }
];

export interface GradientMenuProps {
  items?: MenuItem[];
  className?: string;
}

export default function GradientMenu({
  items = attendanceMenuItems,
  className = ''
}: GradientMenuProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <ul className="flex flex-wrap justify-center gap-6 p-4">
        {items.map(({ title, icon, gradientFrom, gradientTo, href, onClick }, idx) => (
          <li
            key={idx}
            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
            onClick={() => {
              if (onClick) {
                onClick();
              } else if (href) {
                window.location.href = href;
              }
            }}
            title={`Navigate to ${title}`}
            className="relative w-[60px] h-[60px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer select-none active:scale-95"
          >
            {/* Gradient background on hover */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none"></span>
            {/* Blur glow */}
            <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50 pointer-events-none"></span>

            {/* Icon */}
            <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0 flex items-center justify-center">
              <span className="text-2xl text-gray-500">{icon}</span>
            </span>

            {/* Title */}
            <span className="absolute text-white uppercase font-medium tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-150 whitespace-nowrap">
              {title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
