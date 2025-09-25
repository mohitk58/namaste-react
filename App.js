const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", xyz: "abc" },
      "Hello World from React!"
    ),
    React.createElement(
      "h2",
      { id: "heading", xyz: "abc" },
      "Hello World from React!"
    ),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", xyz: "abc" },
      "Hello World from React!"
    ),
    React.createElement(
      "h2",
      { id: "heading", xyz: "abc" },
      "Hello World from React!"
    ),
  ]),
]);

// ReactElement(Object) => HTML (Browser understands)

// const h1 = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
