import { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";
import "./TrafficLight.css";

function App() {
  const trafficLightData = [
    { lightColor: "red", duration: 4000, nextLightColor: "green" },
    { lightColor: "yellow", duration: 500, nextLightColor: "red" },
    { lightColor: "green", duration: 3000, nextLightColor: "yellow" },
  ];

  const [currentColor, setCurrentColor] = useState();

  useEffect(() => {
    let id;
    switch (currentColor) {
      case "red":
        id = setTimeout(() => {
          setCurrentColor("green");
        }, 4000);
        break;
      case "yellow":
        id = setTimeout(() => {
          setCurrentColor("red");
        }, 500);
        break;
      case "green":
        id = setTimeout(() => {
          setCurrentColor("yellow");
        }, 3000);
        break;
      default:
        setCurrentColor("red");
        break;
    }
    // setTimeout(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
    return () => clearTimeout(id);
  }, [currentColor]);

  return (
    <div className="center">
      <TrafficLight data={trafficLightData} activeColor={currentColor} />
    </div>
  );
}

export default App;
