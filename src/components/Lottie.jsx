import React from "react";
import { useLottie } from "lottie-react";
import ScientistAnimation from "/src/assets/lottie/scientist.json";

const App = () => {
  const options = {
    animationData: ScientistAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;