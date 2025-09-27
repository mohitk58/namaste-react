import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

console.log(heading);

// JSX => JavaScript Syntax (Its not the part of React)
// JSX is not HTML inside JS
// JSX is the HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel (Transpiled the JSX code into React.createElement)

// JSX => Babel transpiles it => React.createElement => ReactElement => JS Object => HTMLElement(render)
// JSX => HTML + JS
// JSX => className, HTML => class
// Attributes - JSX => tabIndex (camelCase), HTML => tabindex

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>; // JSX single line

const jsxHeadingMultiLines = (
  <h1 className="heading" tabIndex={1}>
    Multi-line heading 😀
  </h1>
); // JSX multi line

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeadingMultiLines);
