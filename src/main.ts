import createElement from "./CreateElement/CreateElement";
import render from "./Render/Render";
import mount from "./Mount/mount";

const createVApp = () =>
  createElement(
    "div",
    {
      id: "app",
    },
    [
      {
        ...createElement("img", {
          src: "https://media.geeksforgeeks.org/wp-content/uploads/Abstract-Class-vs-Interface.png",
        }),
      },
      {
        ...createElement("h1", {}, [{ ...createElement("text", "This is gon be amazing", []) }]),
      },
      {
        ...createElement("input", {}),
      },
      {
        ...createElement(
          "button",
          {
            onclick: () => {
              alert("clicked");
            },
          },
          [{ ...createElement("text", "Click Me") }]
        ),
      },
    ]
  );

let count = 0;
let vApp = createVApp();
const realApp = render(vApp);
let rootEl = mount(realApp, document.getElementById("app"));

setInterval(() => {
  const vNewApp = createVApp();
  vApp = vNewApp;
}, 1000);
