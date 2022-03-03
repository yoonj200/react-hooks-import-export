import React from "react";
import howManyParks from "./parks/howManyParks"; 
// 'import' accesses 'howManyParks' variable 
// from howManyParks.js

import MesaVerde from "./parks/MesaVerde";

// function ColoradoStateParks() {
//   howManyParks(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;
// }

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde /> 
    </div>
  )
}

export default ColoradoStateParks;

import { trees, wildlife } from "./parks/RockyMountain";
console.log(trees);
wildlife();