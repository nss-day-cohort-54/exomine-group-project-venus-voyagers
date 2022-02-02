// import getMinerals, purchaseMineral, getTransientState
import { getMinerals, getFacilities, getTransientState } from "./database.js";

// const cartArea = document.querySelector(".purchasedMinerals")

// list out mineral name and quantity
export const displayCart = () => {
    const minerals = getMinerals()
    const facilities = getFacilities()
    const transientState = getTransientState()

    let html = ""

    if(transientState.selectedFacility && transientState.selectedMineral){
        const facilityName = facilities.find(facility => facility.id === transientState.selectedFacility).name
        const mineralName = minerals.find(mineral => mineral.id === transientState.selectedMineral).type

        html += `<div id="cartContents">1 ton of ${mineralName} from ${facilityName}</div>`
        //const spaceCart = document.querySelector(".spaceCart")
        return html
    }


    return ""
}

// document.addEventListener(
//     "stateChanged", 
//     displayMineral)


// add purchase button

// add click event to listen for purchase button
