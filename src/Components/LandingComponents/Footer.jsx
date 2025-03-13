import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      role="footer"
      className="footer-section flex flex-col lg:flex-row items-center justify-between gap-20 p-32 text-center lg:text-left"
    >
      <div className="w-full flex flex-col align-middle gap-6">
        <h3 className="text-4xl">Learn with Lexi</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse deleniti culpa molestias ea iste error sit quo, sunt magni amet rerum saepe velit dolorum in assumenda corporis nobis architecto tempora.</p>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row justify-between align-middle gap-8 sm:gap-0">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Lexi</h4>
          <ul className="flex flex-col gap-1">
            <li>About</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Socials</h4>
          <ul className="flex flex-col gap-1">
            <li className="flex gap-1 justify-center lg:justify-start items-center align-middle">Facebook<FaFacebook /></li>
            <li className="flex gap-1 justify-center lg:justify-start items-center align-middle">Instagram<FaInstagram /> </li>
            <li className="flex gap-1 justify-center lg:justify-start items-center align-middle">Twitter<FaXTwitter /> </li>
            <li className="flex gap-1 justify-center lg:justify-start items-center align-middle">Lexi<FaGlobe /> </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">LEXI</h4>
          <ul className="flex flex-col gap-1">
            <li>About</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
