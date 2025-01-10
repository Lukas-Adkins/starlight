import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface p-4 text-center text-dark-textSecondary">
      © {new Date().getFullYear()} TTRPG Tools. All rights reserved.
    </footer>
  );
};

export default Footer;
