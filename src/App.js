import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Pandora" animal="Dog" breed="Mixed" />
            <Pet name="Cacau" animal="Dog" breed="Mixed" />
            <Pet name="Toy" animal="Cat" breed="Mixed" />
        </div>
    );
};

render(<App />, document.getElementById("root"));
