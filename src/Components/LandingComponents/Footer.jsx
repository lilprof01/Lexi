import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Footer component for landing page
    <footer
      role="footer"
      className="footer-section flex flex-col lg:flex-row items-center justify-between gap-20 p-8 sm:p-32"
    >
      <div className="w-full flex flex-col align-middle gap-6">
        <h3 className="text-4xl">Learn with Lexi</h3>
        <p>
          Lexi is your go-to app for mastering new languages. With interactive lessons, personalized guidance, and a supportive community, Lexi makes language learning engaging and effective. Join us and start your journey to fluency today!
        </p>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row justify-between align-middle gap-8 sm:gap-0">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Lexi</h4>
          <ul className="flex flex-col gap-1">
            <Link to="/signup">Spanish</Link>
            <Link to="/signup">German</Link>
            <Link to="/signup">French</Link>
            <Link to="/signup">Italian</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Socials</h4>
          <ul className="flex flex-col gap-1">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <li className="flex gap-1 items-center align-middle">
                Facebook<FaFacebook />
              </li>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <li className="flex gap-1 items-center align-middle">
                Instagram<FaInstagram />
              </li>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <li className="flex gap-1 items-center align-middle">
                Twitter<FaXTwitter />
              </li>
            </a>
            <a href="https://www.lexi.com" target="_blank" rel="noopener noreferrer">
              <li className="flex gap-1 items-center align-middle">
                Lexi<FaGlobe />
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="flex flex-col gap-1">
            <li>Features</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <Link to="/addwords">Support</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;