import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface pt-6 pb-4 text-center text-dark-textSecondary">
      © {new Date().getFullYear()} TTRPG Tools. All rights reserved.
    </footer>
  );
};

export default Footer;
