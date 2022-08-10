import React, { useState } from "react";

import "./App.css";

import tabData from "./data";

// for (var i = 0; i < tabData.length; i++) {
// const activeBtn =  () =>{
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   }
// }

const App = () => {
  const [info, setInfo] = useState(0);

  return (
    <div className="container">
      <div className="scroll">

      <div className="tabs">
        {tabData.map((obj, id) => {
          return (
            <>
              <div
                key={id}
                className="tab"
                onClick={() => setInfo(obj.content)}
                // onClick={() => activeBtn}
              >
                {obj.title}
              </div>
            </>
          );
        })}
      </div>
      </div>
      <p className="information">{info}</p>
      <div className="animation start-home"></div>
    </div>
  );
};

export default App;
