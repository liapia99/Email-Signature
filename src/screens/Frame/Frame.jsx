import React from "react";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">J</div>
          <div className="text-wrapper-2">P</div>
        </div>
        <div className="text-wrapper-3">Julia Piascik</div>
        <p className="honors-computer">
          Honors Computer Science and Engineering Student
          <br />
          Welch College of Business and Technology
          <br />
          Sacred Heart University
        </p>
        <p className="mobile">
          <span className="span">
            Mobile: 203-968-3389
            <br />
          </span>
          <span className="text-wrapper-4">
            <br />
            <br />
          </span>
        </p>
        <a
          href="www.linkedin.com/in/juliapiascik"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="linked-in"
            alt="Linked in"
            src="https://generation-sessions.s3.amazonaws.com/906f3faf167b2fe4765db98d8e90456e/img/linkedin@2x.png"
          />
        </a>
        <div className="text-wrapper-5">www.linkedin.com/in/juliapiascik</div>
        <p className="email-mail">
          <span className="span">Email: </span>
          <span className="text-wrapper-4">
            piascikj2@mail.sacredheart.edu
            <br />
            <br />
            <br />
          </span>
        </p>
      </div>
    </div>
  );
};
