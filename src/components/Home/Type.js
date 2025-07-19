import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student werktuigbouwkunde",
          "Enthousiast",
          "Leergierig",
          "Serieus",
          "Aanpakker",
          "Sociaal",
          "Hobbyist programmeur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
