import React, { useState, useEffect } from "react";
import ProjectContainer from "./ProjectContainer";

import { hauterCouture, redditMinimal, jammingSpotify } from "../projects";

function Projects() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isEven = (id) => {
    return id % 2 === 0;
  };

  return (
    <div>
      <ProjectContainer
        title={hauterCouture.title}
        text={hauterCouture.text}
        image={isLargeScreen ? hauterCouture.image : hauterCouture.mobilePhoto1}
        gif={isLargeScreen ? hauterCouture.gif : hauterCouture.mobilePhoto2}
        isEven={isEven(hauterCouture.id)}
        code={hauterCouture.code}
        live={hauterCouture.live}
        isLargeScreen={isLargeScreen}
      />
      <ProjectContainer
        title={redditMinimal.title}
        text={redditMinimal.text}
        image={isLargeScreen ? redditMinimal.image : redditMinimal.mobilePhoto1}
        isEven={isEven(redditMinimal.id)}
        gif={isLargeScreen ? redditMinimal.gif : redditMinimal.mobilePhoto2}
        code={redditMinimal.code}
        live={redditMinimal.live}
        isLargeScreen={isLargeScreen}
      />

      <ProjectContainer
        title={jammingSpotify.title}
        text={jammingSpotify.text}
        image={
          isLargeScreen ? jammingSpotify.image : jammingSpotify.mobilePhoto1
        }
        isEven={isEven(jammingSpotify.id)}
        gif={isLargeScreen ? jammingSpotify.gif : jammingSpotify.mobilePhoto2}
        code={jammingSpotify.code}
        live={jammingSpotify.live}
        isLargeScreen={isLargeScreen}
      />
    </div>
  );
}

export default Projects;
