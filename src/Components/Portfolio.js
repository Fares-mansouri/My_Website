import React from "react";
import "./Portfolio.css";
import { IconContext } from "react-icons/lib";

function Portfolio() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Portfolio</h1>
          <div className="pricing__container">
            <a
              href="https://www.behance.net/gallery/148079455/Kaelle"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-image1" />
                <div className="card-text">
                  <span className="date">4 days ago</span>
                  <h2>Kaelle</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                  </p>
                </div>
                <div className="card-stats">
                  <div className="stat border">
                    <div className="value">Read more</div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://www.behance.net/gallery/148258681/UBOOK"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-image2" />
                <div className="card-text">
                  <span className="date">4 days ago</span>
                  <h2>Ubook</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                  </p>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <div className="value">Read more</div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://www.behance.net/gallery/133641659/Solar-Drop"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-image3" />
                <div className="card-text">
                  <span className="date">4 days ago</span>
                  <h2>Solar Drop</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                  </p>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <div className="value">Read more</div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="https://www.behance.net/gallery/133504131/Logo-concept-Art-of-code"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-image4" />
                <div className="card-text">
                  <span className="date">4 days ago</span>
                  <h2>Art of code </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                    temporibus omnis illum maxime quod deserunt eligendi dolor
                  </p>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <div className="value">Read more</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <h1 className="pricing__heading1">Other projects soon...</h1>
      </div>
    </IconContext.Provider>
  );
}
export default Portfolio;
