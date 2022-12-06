import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close"></button>
          <div className="inner-box">
            <img src="/src/images/asdad.jpeg" alt="" />
            <div className="info">
              <h1>React 17 Design Patterns and Best Practices</h1>
              <h3>Prathames Sonpatki</h3>
              <h4>
                Packt Publishing Ltd <span>2016-04-21</span>
              </h4>
              <br />
              <a href="#">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
            Knowledge for free... Get that job, you aspire for! Want to switch
            and provides plenty of tips and tricks for using React JS
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
