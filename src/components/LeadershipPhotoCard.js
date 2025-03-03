import React from "react";
// import profilePhoto from '../images/joseph-2024.jpg'
import presenting from "../images/presenting.jpg";

export default function ProfileCard() {
  return (
    <section>
      <div className="leadership-flex-box">
        <img
          src={presenting}
          alt="photograph of joseph schenk presenting an idea"
          className="leadership-photo"
        ></img>
      </div>
    </section>
  );
}
