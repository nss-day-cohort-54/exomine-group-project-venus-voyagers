// import getGovernor, setGovernor, getTransientState
import { getGovernors, getTransientState, setGovernor } from "../database.js"
// export string containing dropdown menu containing only active governers

const governors = getGovernors()
const state = getTransientState()

export const SelectGovernor = () => {

    let HTMLString = `<div class="governorDropdown">
    <label for="gov-names">Choose a governor:</label>
    <select name="gov-names" id="gov-names">`

    if (state.selectedGovernor) {
        for (const governor of governors) {
            if (governor.active && governor.id === state.selectedGovernor) {
                HTMLString += `option value="${governor.name}" selected>${governor.name}</option>`
            } else {
                HTMLString += `option value="${governor.name}">${governor.name}</option>`
            }
        }
    }
    else {
        HTMLString += `<option value="" disabled selected hidden>Choose a governor...</option>`
        for (const governor of governors) {
            HTMLString += `option value="${governor.name}">${governor.name}</option>`
        }
    }


    HTMLString += `</select></div>`

    return HTMLString
}

// add an eventListener that invokes setGovernor

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "gov-names") {
            setGovernor(event.target.value)
        }
    }
)
