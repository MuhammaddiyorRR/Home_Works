// import React , { useState }from "react";
// import { tabData } from "./data";

// const Tab = () => {
//     return (
// tabData.map((data) => (
//     console.log({data})
// ))
// //   return <>{}</>;
// )
// };
// export default Tab;

import React, { Component } from "react";
import { tabData } from "./data";

export default class tab extends Component {
  render() {
    return (
      <div>
        {tabData.map((tag, id) => (
          <span>{tag.name}</span>
        ))}
      </div>
    );
  }
}
