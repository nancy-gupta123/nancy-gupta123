import React from "react";
import ReactDOM from "react-dom/client";


const heading=React.createElement("h1",{id:"heading"},"Hello World");
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

 const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"chlid1"},
       [React.createElement("h1",{},"This is namaste react"),React.createElement("h1",{},"I am an h1 tag")]
    ),
    React.createElement("div",{id:"chlid2"},
        [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h1",{},"I am an h1 tag")]
     )]
 )
 root.render(parent);