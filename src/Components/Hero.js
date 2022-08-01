import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import Typewriter from "typewriter-effect";

function Hero({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              Display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">
                  <Typewriter
                    options={{
                      strings: [`${topLine}`],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <h2 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h2>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <a
                  href="Fares Mansouri CV.pdf"
                  download="Fares Mansouri CV.pdf"
                >
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
