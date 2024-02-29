const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
