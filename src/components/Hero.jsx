import React from "react";
import { IPhotoGrid } from "../utils/icons";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src={IPhotoGrid} alt="image grid" className="hero-img" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts. <br />
        Either at exotic locations or at the comfort of your home.
      </p>
    </section>
  );
};

export default Hero;
