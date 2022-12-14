import React from "react";
import Hero from "../../Hero";
import Portfolio from "../../Portfolio";
import Services from "../../Services";

import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Services {...homeObjThree} />
      <Portfolio />
    </>
  );
}

export default Home;
