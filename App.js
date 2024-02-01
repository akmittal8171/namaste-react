import React from "react"
import ReactDOM from "react-dom/client"
const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hell0 1"),
        React.createElement("h2", {}, "Hello world 1")
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hell0 2"),
        React.createElement("h2", {}, "Hello world 2")
    ])
])

// jsx => babel transpiles it to React.createElement => ReactElement- js object => HTMLElement(render)

const jsxHeading = <h1>namaste React using JSX 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)