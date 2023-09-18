import React, { useState } from "react";
import {
  Daw,
  VocalsProccing,
  bg0element,
  frequecies,
  mastering,
  mixing,
  mixingconsole,
} from "../../assets";
import "./Topics.css";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequecies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn ?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequecies)}>What are frequencies ?</li>
            <li onMouseEnter={() => setCurrentImage(Daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(VocalsProccing)}>Vocals Processing</li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingconsole)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Matering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} />
          </div>
        </div>
        <img src={bg0element} className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
