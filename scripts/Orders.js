// import getMinerals, purchaseMineral, getTransientState
import { getMinerals, getFacilities, getTransientState } from "./database.js";

// const cartArea = document.querySelector(".purchasedMinerals")

//  a function that lists out mineral name and quantity
export const displayCart = () => {
    // get minerals, facilities, and transient state
    const minerals = getMinerals()
    const facilities = getFacilities()
    const transientState = getTransientState()
    // initiate html string
    let html = ""

    // check if facilitySelected and selectedMineal is in transient state
    if(transientState.allOrders.length){
        for(const order of transientState.allOrders) {
        // find facility name that has an id equal to the selected facility in transient state
        const facilityName = facilities.find(facility => facility.id === order.facilityId).name
        // find mineral name making sure it has an id equal to selected mineral in state
        const mineralName = minerals.find(mineral => mineral.id === order.mineralId).type
        // add string to html variable with message containing interpolated mineral and facility name
        html += `<div id="cartContents">1 ton of ${mineralName} from ${facilityName}</div>`
        //const spaceCart = document.querySelector(".spaceCart")
        }
        return html
    }


    return ""
}

// document.addEventListener(
//     "stateChanged", 
//     displayMineral)


// add purchase button

// add click event to listen for purchase button
