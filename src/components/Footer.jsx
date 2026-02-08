import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900">
      <p>
        Designed & Built by <span className="text-blue-500">Piyush Kumar</span>
      </p>
      <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
