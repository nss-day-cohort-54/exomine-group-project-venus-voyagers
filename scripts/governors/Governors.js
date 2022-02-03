// import getGovernor, setGovernor, getTransientState
import { getGovernors, getTransientState, setGovernor } from "../database.js"

// call the governor array into a new variable
const governors = getGovernors()

// create a fuction to export a string containing dropdown menu of only active governers
export const SelectGovernor = () => {
    // initiate html string
    let presetId = ""
    // 
    let HTMLString = `<div class="governorDropdown">
    <label for="gov-names">Choose a governor:</label>
    <select name="gov-names" id="gov-names">`
    
    const state = getTransientState()
    if (state.selectedGovernor) {
        presetId = state.selectedGovernor
    } else {
        HTMLString += `<option value="" disabled selected hidden>Choose a governor...</option>`
    }
        const governorFound = governors.map(governor => {
            if (governor.active && governor.id === presetId) {
                return `<option value="${governor.id}" selected>${governor.name}</option>`
            } else if (governor.active) {
                return `<option value="${governor.id}">${governor.name}</option>`
            }
        })
    HTMLString += governorFound.join("")
        
    HTMLString += `</select></div>`

    return HTMLString
}

// add an eventListener that invokes setGovernor

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "gov-names") {
            setGovernor(parseInt(event.target.value))
        }
    }
)
