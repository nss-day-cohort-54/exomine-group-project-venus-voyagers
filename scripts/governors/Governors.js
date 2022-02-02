// import getGovernor, setGovernor, getTransientState
import { getGovernors, getTransientState, setGovernor } from "../database.js"
// export string containing dropdown menu containing only active governers

const governors = getGovernors()

export const SelectGovernor = () => {
    let presetId = ""
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
