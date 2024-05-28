import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Anwar Allal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
