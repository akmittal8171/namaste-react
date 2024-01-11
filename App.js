const heading=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hell0 1"),
        React.createElement("h2",{},"Hello world 1")
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Hell0 2"),
        React.createElement("h2",{},"Hello world 2")
    ])
])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)