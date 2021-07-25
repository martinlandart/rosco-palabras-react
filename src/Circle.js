import React, { useState } from "react";

const Circle = (props) => {
  const [square, setSquare] = useState([]);

  const buildCircle = () => {
    const num = 25; //Number of Square to be generate
    const type = 1;
    let radius = "200"; //distance from center
    let start = -90; //shift start from 0
    let slice = (360 * type) / num;

    let items = [];
    let i;
    for (i = 0; i < num; i++) {
      let rotate = slice * i + start;
      let rotateReverse = rotate * -1;

      items.push({
        radius: radius,
        rotate: rotate,
        rotateReverse: rotateReverse,
      });
    }
    setSquare(items);
  };

  return (
    <div>
      <div className="circle">
        <div className="circle-hold">
          {square.map(function (value, index) {
            const css = value;
            return (
              <div
                className=""
                style={{
                  transform:
                    "rotate(" +
                    css.rotate +
                    "deg) translate(" +
                    css.radius +
                    "px) rotate(" +
                    css.rotateReverse +
                    "deg)",
                }}
              >
                {props.children[index]}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={buildCircle}>Show Square</button>
    </div>
  );
};

export default Circle;
