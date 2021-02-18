
import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top: 0,
  });

  const updateXY = (x1 , y1) => {
    setBallPosition({
        left: x1,
        top: y1,
    }); 
};

  const handleListener= (event)=>{
    switch (event.key){
        case "ArrowRight":
            updateXY(ballPosition.left + 5,ballPosition.top);
            break;
        case "ArrowDown":
            updateXY(ballPosition.left,ballPosition.top + 5);
            break;
        case "ArrowLeft":
            updateXY(ballPosition.left - 5,ballPosition.top);
            break;
        case "ArrowUp":
            updateXY(ballPosition.left ,ballPosition.top - 5);
            break;
            default:
            break;
    }
};

  useEffect(()=>{
  document.addEventListener("keydown", handleListener);
    return function () {
        document.removeEventListener("keydown", handleListener);
    };
},[ballPosition]);

  const reset = () => {
    setRenderBall(false);
    setBallPosition({left: 0, top: 0});
  };
  const renderChoice = () => {};

  const start = (event) => {
    setRenderBall(true);
    event.target.style.display = "none";
  }

  const renderBallOrButton=()=> {
		if (renderBall) {
		    return (
            <div className="ball" style={{
                left: ballPosition.left + "px",
                top: ballPosition.top + "px",
                position: "absolute",
            }}></div>
            );
		} else {
		    return <button className="start" onClick={start} >start</button>
		}
    };

  return (
    <div className="playground">
      <button className="reset" onClick={reset}>reset</button>
      {renderBallOrButton()}
    </div>
  );
};

export default App;