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
        images={
          isLargeScreen
            ? hauterCouture.desktopImages
            : hauterCouture.mobileImages
        }
        isEven={isEven(hauterCouture.id)}
        code={hauterCouture.code}
        live={hauterCouture.live}
        isLargeScreen={isLargeScreen}
      />
      <ProjectContainer
        title={redditMinimal.title}
        text={redditMinimal.text}
        images={
          isLargeScreen
            ? redditMinimal.desktopImages
            : redditMinimal.mobileImages
        }
        isEven={isEven(redditMinimal.id)}
        code={redditMinimal.code}
        live={redditMinimal.live}
        isLargeScreen={isLargeScreen}
      />

      <ProjectContainer
        title={jammingSpotify.title}
        text={jammingSpotify.text}
        images={
          isLargeScreen
            ? jammingSpotify.desktopImages
            : jammingSpotify.mobileImages
        }
        isEven={isEven(jammingSpotify.id)}
        code={jammingSpotify.code}
        live={jammingSpotify.live}
        isLargeScreen={isLargeScreen}
      />
    </div>
  );
}

export default Projects;
