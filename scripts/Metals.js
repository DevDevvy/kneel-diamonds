import { getCustomOrder, getMetals, setMetal } from "./database.js"
const order = getCustomOrder()
const metals = getMetals()


// export const Metals = () => {
//     let html = "<ul>"
    
//     // This is how you have been converting objects to <li> elements
//     for (const metal of metals) {
//         html += `<li>
//         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
//         </li>`
//     }
    
//     html += "</ul>"
//     return html
// }


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)


// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === 'metal') {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

export const Metals = () => {
    let html = "<ul>"
    const order = getCustomOrder()
    // Use .map() for converting objects to <li> elements
    const listItems = metals.map(metal => {
        if (order.metalId === undefined) {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        } else if (order.metalId === metal.id) {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
        }

    })
    html += listItems.join("")
    html += "</ul>"
    return html
}