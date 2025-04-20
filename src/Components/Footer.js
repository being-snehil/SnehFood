import React from "react";
import { faLinkedin, faGithub, faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
        <p className="mt-3 justify-between">Made with ❤️ by Snehil</p>
        <div className="my-3 flex items-center justify-center">
          <a
            className="ml-3 text-4xl transition-all hover:text-linkedIn"
            href="https://www.linkedin.com/in/snehil-verma-1b685b252/"
            target="_blank"
            title="Snehil Verma's Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            className="ml-3 text-4xl transition-all hover:text-github"
            href="https://github.com/being-snehil"
            target="_blank"
            title="Snehil Verma's GitHub repo"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        <p className="pb-10" title="Just Kiddin' There is no Copyright for this">©️ 2025 SnehFood</p>
    </div>
  );
};

export default Footer;
