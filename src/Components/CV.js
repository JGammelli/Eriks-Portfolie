import React from "react";
import img from "../Img/profil3.png";

class CV extends React.Component {
  render() {
    return (
      <section className="cvSection">
        <div className="cvWrap">
          <div className="headerBox">
            <img src={img} height="150" />
            <div>
              <h1>Cv</h1>
              <h2>Erik Löfving</h2>
              <p>Game Designer</p>
            </div>
          </div>
          <div className="cvContainer">
            <div className="cvLeft">
              <div className="profileBox">
                <h2>Profile</h2>
                <p>
                  I have had a passion for playing video games for as long as i
                  can remember and have dedicated myself to creating the same
                  kind of experiences with video games that i have had, to other
                  people. My passion lies in improving the gameplay experience
                  by testing different mechanics, solving problems and
                  discussing solutions with co-workers. I am a happy, social and
                  responsible person who like working with others and create a
                  good working environment.
                </p>
              </div>
              <div className="educationBox">
                <h2>Education</h2>
                <p>
                  Game Design, University College of Skövde, Skövde <br />
                  August 2019 — Present
                </p>
                <p>
                  During my years at the University College of Skövde i have
                  learned a ton! I have studied game development with a focus on
                  design and have become good at designing projects for
                  different players and users. During my three years i have
                  worked in multiple bigger projects with other students and
                  have become much more secure to work and collaborate with
                  people from from different specializations such as
                  programming, graphics, game writing and sound/music. I have
                  also had a lot of impact on how the games work from a
                  designperspective and gained a lot of knowledge working with
                  the game engines Unity and GameMaker studios. Boardgames have
                  also been an important part of the education and i have
                  learned what makes games fun, what common mistakes to avoid
                  when developing a game, as well as how to catch the players
                  attention with different techniques. A few meaningfull courses
                  during my education has been Experimental game mechanics, Rule
                  systems and game theory, and Game analysis.
                </p>
              </div>
              <div className="coursesBox">
                <h2>Courses</h2>
                <p>
                  Introduction to C# Programming, Lulea University of Technology{" "}
                  <br />
                  February 2022 — Present
                </p>
              </div>
            </div>
            <div className="cvRight">
              <div className="detailsBox">
                <h2>Details</h2>
                <ul>
                  <li>Lennart Torstenssons gata 4 C</li>
                  <li>Skövde, 54150</li>
                  <li>Sweden</li>
                  <li>(+46) 708-531117</li>
                  <li>eriklofving99@gmail.com</li>
                </ul>
                <p>Date / Place of birth</p>
                <ul>
                  <li>1999-07-02</li>
                  <li>Gothenburg</li>
                </ul>
                <p>Driving license</p>
                <ul>
                  <li>B, AM</li>
                </ul>
              </div>
              <div className="skillsBox">
                <h2>Skills</h2>
                <ul>
                  <li>Game Design </li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                  </svg>

                  <li>Level Design</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="108" width="28" height="5" fill="#C4C4C4" />
                  </svg>

                  <li>Unity</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="108" width="28" height="5" fill="#C4C4C4" />
                  </svg>

                  <li>Aseprite</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="86" width="50" height="5" fill="#C4C4C4" />
                  </svg>

                  <li>GameMaker Studios</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="108" width="28" height="5" fill="#C4C4C4" />
                  </svg>

                  <li>C#</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="61" width="75" height="5" fill="#C4C4C4" />
                  </svg>

                  <li>Git</li>
                  <svg
                    width="136"
                    height="5"
                    viewBox="0 0 136 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="136" height="5" fill="#5AA6FF" />
                    <rect x="61" width="75" height="5" fill="#C4C4C4" />
                  </svg>
                </ul>
              </div>
              <div className="languageBox">
                <h2>Languages</h2>
                <ul>
                  <li>Swedish</li>
                  <li>English</li>
                </ul>
              </div>
              <div className="otherBox">
                <h2>Hobbies</h2>
                <ul>
                  <li>
                    During my free time i like to go to the gym, golf, play
                    computer games, boardgames and hang out with friends. I also
                    collect vinyls and have an interest for nutrition and
                    health.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CV;
