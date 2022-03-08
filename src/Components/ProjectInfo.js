import React from "react";
import Projects from "./Projects";

const data = [
  {
    title: "A Vista",
    video: "https://www.youtube.com/embed/LdAxoRfmuDQ",
    information:
      "A Vista is a strategic rhythm game that i worked on during my second year at the University of Skövde. This project took place during the hight of covid-19 and therefore took place remotely. Therefore this 10-week project required a lot of planning and teamwork but also gave a lot of insight on how to work as a team from a distance. Most of my time as a designer during this project was focused on how the battle mechanics were supposed to work, how to make the game fun, and different character abilities and how they should interact with each other. It was a fun project where i got better at compromising and finding solutions for problems and even though it has many problems it was a good learning experience. ",
    //link: "Methuselah, some design thoughts",
    // href: (
    //   <>
    //     Itch.io:{" "}
    //     <a
    //       href="https://felltree-interactive.itch.io/methuselah"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="gameLink"
    //     >
    //       Methuselah
    //     </a>
    //   </>
    // ),
  },

  {
    title: "Animals on the run",
    file: "",
    information:
      "Animals on the run was a game project that i was a part of during my first year at the University of Skövde. This was a 12-week project where students from different specializations of game development came together to create a game. Animals on the run is targeted towards younger children and during development i encountered a lot of different scenarios and problems that required different solutions. It is far from perfect but was a great introduction to the world that is game development. It also gave a lot of insight of how to work in a team, what problems other specializations e.g. programming and graphics can encounter. ",
    // href: (
    //   <>
    //     Google drive:{" "}
    //     <a
    //       href="https://drive.google.com/file/d/1t1PiOq7WooLDD2WEnwM4h8R93yx3gA-l/view?usp=sharing"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="gameLink"
    //     >
    //       Astra
    //     </a>
    //   </>
    // ),
  },
  {
    title: "Unnamed project (WIP)",
    mp4: require("../Img/unnamed.mp4").default,
    information:
      "This is the first of two unnamed projects that i’m currently working on. The goal with this project is to get better at 2D level design, work on my programming skills and to create a game that is more unique and stands out from the crowd. This is also the project that i’m using as a testobject for my thesis on game level design.",
    // href: (
    //   <>
    //     Google drive:{" "}
    //     <a
    //       href="https://drive.google.com/file/d/1eveHOMsnAGDD3V2LAl2RvD9iPa0ja_yk/view?usp=sharing"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="gameLink"
    //     >
    //       Bouncing Ball
    //     </a>
    //   </>
    // ),
  },
  {
    title: "Unnamed project (WIP)",
    file: "",
    information:
      "The second of my two unnamed projects i use to learn new skills that i later on can implement into the game engine. Right now my focus is on learning 2D graphics, animations and to get better at programming. This game is also going to be more focused on combat with different bosses, enemies and adventures to encounter.",
  },
];

class ProjectInfo extends React.Component {
  render() {
    return data.map((project, index) => (
      <Projects
        key={index}
        title={project.title}
        information={project.information}
        file={project.file}
        image={project.image}
        link={project.link}
        href={project.href}
        other={project.other}
        video={project.video}
        mp4={project.mp4}
      />
    ));
  }
}

export default ProjectInfo;
