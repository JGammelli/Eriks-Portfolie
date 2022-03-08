import React from "react";
import img from "../Img/profil.png";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="aboutProfile">
          <div className="aboutName">
            <div>
              <h2>About</h2>
              <h1>Erik Löfving</h1>
              <p>Game Designer</p>
            </div>
          </div>

          <div className="aboutBread">
            <p>Hi, I'm Erik!</p>
            <br />
            <p>
              I started playing video games at a young age and it has always
              been a passion of mine. My goal is to share the same kind of
              wonderful experiences that i have gotten through games with others
              and get the opportunity to inspire, excite and amaze players with
              adventures. I am a happy and driven person that likes to take
              responsibility, likes to work with others and loves to develop as
              a person. I am currently studying game design at the University of
              Skövde but i’m looking for a place where i can gain as much
              experience as possible, grow as a game designer and learn from
              others in a friendly team environment.
            </p>
            <img src={img} width="200" />
          </div>
        </section>
      </>
    );
  }
}

export default About;
