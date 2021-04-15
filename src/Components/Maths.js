import React from "react";

const sum = (a, b) => {
  return a + b;
};

const random = (a) => {
  var random = Math.random() * a;
  return random;
};

function Maths() {
  return (
    <div>
      Sum of 2 + 3 = {sum(2, 3)} 
      <br></br>
      Random is: {random(10)}
    </div>
  );
}
export { Maths, sum, random };
