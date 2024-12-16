import React from 'react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Forecast', href: '#', active: false },
  { label: 'Radar', href: '#', active: false },
  { label: 'Alerts', href: '#', active: false },
  { label: 'Settings', href: '#', active: false },
];

function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`${
            item.active ? 'text-gray-900' : 'text-gray-500'
          } hover:text-gray-600`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;