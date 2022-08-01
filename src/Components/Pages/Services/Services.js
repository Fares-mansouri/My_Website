import React from "react";

import Services from "../../Services";

import { homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <Services {...homeObjThree} />
    </>
  );
}

export default Home;
