import React from 'react';

const Header = () => {
  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <header className="">
      <nav className="max-w-6xl mx-auto px-4 py-5">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.path}
                className="text-white hover:text-orange-500 transition-colors duration-200 text-lg font-medium"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;