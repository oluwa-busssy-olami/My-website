import React from "react";
import "./About.css";
import reading_book from "../../assets/reading.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about">
      <img src={reading_book} alt="" className="my-profile" />
      <div>
        <p>
          I recently graduated with a degree in Chemistry from Olabisi Onabanjo
          University. My journey, however, is far from ordinary. In 2021, I was
          deeply moved by the tragic story of a young man who took his own life
          after not getting into university. His story inspired me to share my
          own experiences to give hope to others. Initially, I was hesitant to
          share my thoughts publicly. Doubt held me back, but with encouragement
          from friends, I decided to take a leap of faith. What started as a
          small step soon turned into something remarkable. After writing just
          two blog posts, I explored Frontend development, diving into it with
          excitement and a thirst for knowledge. While I’m still learning, the
          journey has been incredibly rewarding. I proudly graduated last month,
          on January 30th, 2024. But this is just the beginning of my story. As
          I look ahead to endless possibilities, I invite you to join me on this
          adventure. Let’s embrace the unknown, dare to dream, and shape our own
          futures. Stay tuned for more updates. The best is yet to come.
        </p>
        <h3>You can also reach me on my socials:</h3>
        <div className="social">
          <a href="https://github.com/oluwa-busssy-olami">
            <FontAwesomeIcon icon={faGitAlt} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/busolami-oluwabi-546b63308/">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://x.com/BussyOlami">
            <FontAwesomeIcon icon={faTimes} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
