import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Gamer",
          "Youtuber",
          "FiveM Developer",
          "Discord Developer",
          "Minecraft Developer",
          "Discord Bot Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
