// import type 
import { getType } from "./database.js";
import { setType } from "./database.js";

const type = getType();
// name function that will build a <ul> string using map
export const TypeList = () => {
    // declare variable for html to open <ul>
    let html = "<ul>" 
    // use map to map out <li> interpolation 
    const listTypeArray = type.map(type => {
        return `<li>
        <input type="radio" name="type" value="${type.id}" /> ${type.name}
        </li>`
    })
    html += listTypeArray.join("")
    return html
}

    // join all strings in array into single html string
    // return html string
// add event listener

document.addEventListener(
    "change", 
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)