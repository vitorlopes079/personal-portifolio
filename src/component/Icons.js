import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div className="p-4 absolute bottom-16 md:bottom-auto md:right-10">
      <a
        href="https://www.linkedin.com/in/vitorlopesdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl responsive1000:text-3xl text-gray-800 mr-4"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/vitorlopes079"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl responsive1000:text-3xl text-gray-800"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Icons;
