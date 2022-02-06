import { KneelDiamonds } from "./KneelDiamonds.js"
// select the container id in the html and store into variable
const mainContainer = document.querySelector("#container")
// make function that calls the container variable, accesses the html
// using innerhtml and sets it equal to the function that renders
// the main body of the html found in the KneelDiamonds module component
const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// listener event that listens for state change to regenerate all HTML
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
