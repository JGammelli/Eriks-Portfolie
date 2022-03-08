import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

class Projects extends React.Component {
  render() {
    return (
      <div className="fade-in slideContainer gameContainer">
        <h2 className="slide-in from-right">{this.props.title}</h2>
        <img src={this.props.file} alt="Gif of project" />
        {this.props.video && (
          <iframe
            src={this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {this.props.mp4 && (
          <video poster={this.props.image} controls>
            <source src={this.props.mp4} />
          </video>
        )}
        <p className="slide-in from-left musicItem">{this.props.information}</p>
        <p className="slide-in from-left">
          {this.props.information}
          <br />
          <br />
          <Link to={`/${this.props.title}`} className="gameLink">
            {this.props.link}
            {this.props.link && (
              <svg
                width="19"
                height="8"
                viewBox="0 0 19 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5L18 4.5V3.5L0 3.5L0 4.5Z"
                  fill="white"
                />
              </svg>
            )}
          </Link>
          <br />
          {this.props.href}
        </p>
      </div>
    );
  }
}

export default Projects;
