import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    "h1", 
    {
        id: "title",
        key: "h1" //whenever we create something we should give a key to uniquely identify that 
    },
    "Heading 1 "
)
const heading2 = React.createElement(
    "h2", 
    {
        id: "title",
        key: "h2"
    },
    "Heading 2 k"
)
const container = React.createElement(
    "div",
    {
        id: "container"
    }, 
    [heading1, heading2]
)

const containerjsx = (<div id= "container2"> {[heading1, heading2]} </div>);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(containerjsx)