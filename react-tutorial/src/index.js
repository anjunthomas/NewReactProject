import React from "react"; // need to import React for below to work
import ReactDOM from "react-dom/client";  // import statement for ReactDom that is React 18 specific
import App from "./App";
import "./index.css";

function MainContent(){
  return (
    <div>
      <h1>
        Hello my name is Anju!
      </h1>
      <p>
        I'm learning React using the scrimba tutorial!
      </p>
    </div>
  )
}

const navbar =  (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>
)

// this is another way to do that
//ReactDOM.createRoot(document.getElementById("root")).render(navbar)
/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
// create root first, and then render the created root

// DOM - 
root.render( // this is a method used in React 18 and later versions for rendering React componenets
  // components should be first letter lowercase
  <div>  
    <MainContent />
    {navbar}
    <ul><li>Thing 1</li><li>Thing 2</li></ul> 
  </div>,
  // for HTML elements, but those inside the curly braces
  
document.getElementById("root")); // standard DOM API call in Javascript
// finds an HTMLelement with the ID root.
// this is where the react application will be mounted or rendered
// serves as the entry point for your React app

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)


// this doesn't work
//ReactDOM.render(navbar, document.getElementById("root"))