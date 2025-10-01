import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement => JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
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

// React Component - Everyting in react is a Component

// Class Based Components - OLD (Uses JS Classes)
// Functional Components - NEW (Uses JS Functions)

// React Functional Component => Just the noraml JS Function which return some JSXs

// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

// React Component => It is a normal JS functions which just retruns the piece of JSXs or React Elements.

// Component Composition  - Component inside components.

const Title = () => <h1>Hello World!! 🤓</h1>;

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>; // JSX single line

const jsxHeadingMultiLines = (
  <h1 className="heading" tabIndex={1}>
    Multi-line heading 😀
  </h1>
); // JSX multi line

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
