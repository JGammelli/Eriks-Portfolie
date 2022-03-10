import React from "react";
import img from "../Img/profil2.png";
class Contact extends React.Component {
  render() {
    return (
      <section id="contactSection">
        <div className="contactWrap">
          <div className="contactBox">
            <h1>Feel free to contact me if you have any questions!</h1>
          </div>
          <div className="contactInfo">
            <p>Email: Eriklofving@hotmail.com</p>
            <br />
            <p>Phone: +46 708 531 117</p>
            <br />
            <p>
              Itch.io:{" "}
              <a href="https://itch.io/c/2240268/mrlofvings-collection">
                MrLofving
              </a>
            </p>
          </div>
          <img src={img} height="300" />
        </div>
      </section>
    );
  }
}

export default Contact;
