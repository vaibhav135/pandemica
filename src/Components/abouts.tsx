import React from "react";
import { FaGithub, FaGithubAlt, FaLinkedin } from "react-icons/fa";
import "../Style/about.css";

const About = () => {
  return (
    <div className="about_container">
      <h2> Intro </h2>
      <p id="about_p">
        {" "}
        Hii, I am vaibhav a Computer Science Graduate. This is a fun project
        that I've started working recently.
        <br /> The motive to create this project was to provide covid visualized
        data, covid news and covid guidelines at one place.
        <br /> All the data was took from{" "}
        <a
          id="about_link"
          href="https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"
        >
          {" "}
          CSSEGISandData/COVID-19{" "}
        </a>{" "}
        and{" "}
        <a id="about_link" href="https://github.com/govex/COVID-19">
          {" "}
          govex/COVID-19{" "}
        </a>
      </p>
      <div>
        Please support the project by contributing on{" "}
        <FaGithubAlt
          id="about_icons"
          onClick={() => window.open("https://github.com/vaibhav135/pandemica")}
        />
        <footer id="about_footer">
          <strong> follow me on </strong>
          <div id="footer_icons">
            <FaGithub
              id="about_icons"
              onClick={() => window.open("https://github.com/vaibhav135")}
            />
            <FaLinkedin
              id="about_icons"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vaibhav-singh-bisht-81619b126/"
                )
              }
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
