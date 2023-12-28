import hauteDesktop1 from "./images/hautecuouture/hauteDesktop1.png"
import hauteDesktop2 from "./images/hautecuouture/hauteDesktop2.png"
import hauteDesktop3 from "./images/hautecuouture/hauteDesktop3.png"
import hauteDesktop4 from "./images/hautecuouture/hauteDesktop4.png"
import hauteMobile1 from "./images/hautecuouture/hauteMobile1.png"
import hauteMobile2 from "./images/hautecuouture/hauteMobile2.png"
import hauteMobile3 from "./images/hautecuouture/hauteMobile3.png"
import hauteMobile4 from "./images/hautecuouture/hauteMobile4.png"

import redditDesktop1 from "./images/reddit/redditDesktop1.png"
import redditDesktop2 from "./images/reddit/redditDesktop2.gif"
import redditMobile1 from "./images/reddit/redditMobile1.png"
import redditMobile2 from "./images/reddit/redditMobile2.png"

import jammingDesktop1 from "./images/jamming/jammingDesktop1.png";
import jammingDesktop2 from "./images/jamming/jammingDesktop2.gif";
import jammingMobile1 from "./images/jamming/jammingMobile1.png";
import jammingMobile2 from "./images/jamming/jammingMobile2.png";

export const hauterCouture = {
  id: 1,
  title: "HAUTE COUTURE",
  text: "Discover Haute Couture, a virtual fashion store crafted using React for efficient UI building and routing, Redux for streamlined state management, and Tailwind CSS for intuitive styling. Integrated with Firestore for product data storage, it offers a responsive design ideal for mobile users, showcasing modern web development techniques in a fashion context",
  code: "https://github.com/vitorlopes079/mock-store",
  live: "https://hautecouturestore.netlify.app",
  mobileImages: [hauteMobile1, hauteMobile2, hauteMobile3, hauteMobile4],
  desktopImages:  [hauteDesktop1, hauteDesktop2, hauteDesktop3, hauteDesktop4],
};

export const redditMinimal = {
  id: 2,
  title: "Reddit Minimal",
  text: "Reddit Minimal is a responsive web application, streamlined for browsing Reddit. Utilizing HTML, CSS, JavaScript, React, and the Reddit API, it offers a minimalist interface for easy access to posts, comments, and media. Its responsive design ensures a seamless experience across devices, embodying efficiency and simplicity in web development.",
  code: "https://github.com/vitorlopes079/RedditMinimal",
  live: "https://redditminimal1.netlify.app",
  mobileImages: [redditMobile1, redditMobile2],
  desktopImages: [redditDesktop1, redditDesktop2],
};

export const jammingSpotify = {
  id: 3,
  title: "Jamming",
  text: "Jamming is a web application developed with React and JavaScript, focused on creating Spotify playlists. It offers a responsive design, ensuring smooth operation on different devices. Users can search for music, compile their favorite tracks into a custom playlist. Once created, these playlists can be saved directly to a user's Spotify account, employing POST and GET requests for efficient data handling.",
  code: "https://github.com/vitorlopes079/jamming",
  live: "https://jammingplay.netlify.app",
  mobileImages: [jammingMobile1, jammingMobile2],
  desktopImages: [jammingDesktop1, jammingDesktop2],
};
