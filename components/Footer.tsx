import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
          <a href="/" className="text-lg hover:underline">
            Home
          </a>
          <a href="/about" className="text-lg hover:underline">
            About
          </a>
          <a href="/contact" className="text-lg hover:underline">
            Contact
          </a>
          <a href="/privacy" className="text-lg hover:underline">
            Privacy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
