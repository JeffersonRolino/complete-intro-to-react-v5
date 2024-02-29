import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", { id: "something-important" }, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Pandora",
            animal: "Dog",
            breed: "Mixed",
        }),
        React.createElement(Pet, {
            name: "Cacau",
            animal: "Dog",
            breed: "Mixed",
        }),
        React.createElement(Pet, {
            name: "Toy",
            animal: "Cat",
            breed: "Mixed",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));
