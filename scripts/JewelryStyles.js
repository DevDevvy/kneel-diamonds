import { getCustomOrder, getStyles, setStyle } from "./database.js"
const order = getCustomOrder()
const styles = getStyles()

// document.addEventListener(
//     "change",
//     (event) => {
//     }
// )

// export const JewelryStyles = () => {
//     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItemsArray = styles.map(style => {
//         return `<li>
//         <input type="radio" name="style" value="${style.id}" /> ${style.style}
//         </li>`
//     })


//     // Join all of the strings in the array into a single string
//     html += listItemsArray.join("")

//     html += "</ul>"
//     return html
// }


// event listener listening for change of style option
// add event listener to document, name it as the "change" listener,
// it takes a parameter for the event, checks if the event target name
// is equal to he targeted name value in html string, then broadcast
// the custom event stateChanged to reload the main html
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"
    const order = getCustomOrder()
    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(style => {
        if (order.styleId === undefined) {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        } else if (order.styleId === style.id) {
            return `<li>
                <input type="radio" name="style" value="${style.id}" checked/> ${style.style}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        }

    })
    html += listItems.join("")
    html += "</ul>"
    return html
}