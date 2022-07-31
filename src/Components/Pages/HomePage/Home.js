import React from "react";
import Hero from "../../Hero";
import Hero_a from "../../Hero_a";
import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero_a {...homeObjThree} />
    </>
  );
}

export default Home;
