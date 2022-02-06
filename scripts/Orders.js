import { getOrders, getSizes, getStyles, getMetals, getType } from "./database.js"

// metals list ----------
const buildOrderListItem = (order) => {
    // ------find prices and display html
const metals = getMetals()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price
return totalCost
}




// -----get sizes 
const buildOrderSizeItem = (order) => {
    // ------find prices and display html
    const sizes = getSizes()
// Remember that the function you pass to find() must return true/false
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
const totalCost = foundSize.price
return totalCost
}

// -----get styles function
const buildOrderStyleItem = (order) => {
    // ------find prices and display html
    const style = getStyles()
    
    const foundStyle = style.find(
    (style) => {
        return style.id === order.styleId
        }
    )
const totalCost = foundStyle.price
return totalCost
}

// -----get type 

const buildOrderTypeItem = (order) => {
    // ------find prices and display html
    const type = getType()
    const foundType = type.find(
    (type) => {
        return type.id === order.typeId
        }
    )
    const typeId = foundType.id
    return typeId

}

const addAllCosts = (order) => {
    const metalsCost = buildOrderListItem(order)
    const styleCost = buildOrderStyleItem(order)
    const sizeCost = buildOrderSizeItem(order)
    const type = buildOrderTypeItem(order)
    const costs = metalsCost + styleCost + sizeCost
    
    if (type === 1) {
        return costs
    } else if (type === 2) {
        return costs + costs
    } else if (type === 3) {
        return costs * 4
    } else {
        return "no type?"
    }


}


export const orderHTML = (order) => {
    const totalCost = addAllCosts(order)
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(orderHTML)

    html += listItems.join("")
    html += "</ul>"

    return html
}


