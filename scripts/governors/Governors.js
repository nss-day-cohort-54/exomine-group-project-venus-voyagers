// import getGovernor, setGovernor, getTransientState
import { getGovernors, setGovernor } from "../database.js"
// export string containing dropdown menu containing only active governers

const governors = getGovernors()


export const SelectGovernor = () => {
    let HTMLSting = `<div class="governorDropdown">
    <label for="gov-names">Choose a governor:</label>
    <select name="gov-names" id="gov-names">
    <option value="" disabled selected hidden>Choose a governor...</option>`

    for (const governor of governors) {
        if (governor.active) {
            HTMLSting += `<option value="${governor.name}">${governor.name}</option>`
        }
    }

    HTMLSting += `</select></div>`

    return HTMLSting
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
