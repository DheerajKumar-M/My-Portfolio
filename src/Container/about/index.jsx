import React from "react";
import PageHeaderContent from "../../Components/pageContentHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { Value } from "sass";
import "./styles.scss";
import { GoServer } from "react-icons/go";
import { FaFileCode } from "react-icons/fa6";
import { FaLinkedin, FaDatabase, FaDev } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const jobSummary =
  "  I am a highly motivated Full Stack Developer with over 2 years of professional experience in designing, developing, and deploying scalable web applications. I specialize in backend development using **Java**, **Spring Boot**, and **Hibernate**, as well as frontend technologies like **ReactJS**, **HTML**, and **CSS3**. I have a strong background in creating RESTful APIs, microservices, and single-page applications, ensuring performance optimization and seamless user experiences. My expertise includes implementing CI/CD pipelines using Jenkins,Docker, and Kubernetes, and managing version control with Git**. I am proficient in Agile methodologies, having successfully collaborated in cross-functional teams to deliver high-quality projects within tight deadlines. I have a proven track record of delivering user-focused solutions, including data visualization tools, automation of workflows, and efficient migration of systems to cloud platforms. My passion for software engineering drives me to continually enhance my skills and contribute to innovative and impactful projects. I am based in **Texas, USA**, and I am open to travel or relocation to pursue challenging opportunities in software development.";

const personalDetails = [
  {
    label: "Name",
    Value: "Dheeraj Kumar Maddineni",
  },
  {
    label: "Age",
    Value: "25",
  },
  {
    label: "Location",
    Value: "Texas, USA",
  },
  {
    label: "Contact",
    Value: "yournName@gmail.com",
  },
  {
    label: "GitHub",
    Value: "https://github.com/dheerajmaddineni",
  },
  {
    label: "Contact Number",
    Value: "+1 (999) 999-9999",
  },
];
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((items, i) => (
                <li key={i}>
                  <span className="title">{items.label} :</span>
                  <span className="value">{items.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaFileCode size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaLinkedin size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <BiLogoGmail size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
