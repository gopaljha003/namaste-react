const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, " i am a h1 tag "),
        React.createElement("h2", {}, " i am a h2 tag ")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, " i am a h1 tag "),
        React.createElement("h2", {}, " i am a h2 tag ")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "Namaste react from react ");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
