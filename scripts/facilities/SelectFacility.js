// import getFacility, setFacility, getTransientState
import { getFacilities, setFacility, getTransientState} from "../database.js";


// export string containing dropdown menu containing only active facilities and only after a governor has been selected
export const FacilitiesHTML = () => {
// get state and governor list
    const state = getTransientState();
    const facilities = getFacilities();
    let presetId = ""
    let facilityList = `<label for="facilities">Choose a facility:</label>
                        <select name="facilities">`

    if(state.selectedFacility) {
        presetId = state.selectedFacility
    } else {
        facilityList += `<option value="" disabled selected hidden>Choose a facility...</option>`
    }
    // start drop down html select tag
    // check to make sure state of governorId is not undefined (option has been selected)
    if (state.selectedGovernor) {
        // map out facilities which meet criteria
        const facilityFound = facilities.map(facility => {
            // check if facility is active
            if (facility.active && facility.id === presetId) {
                // add options to facilityList
                return `<option value="${facility.id}" selected>${facility.name} </option>`
            } else if (facility.active) { 
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        })
        facilityList += facilityFound.join("")
    }
    
    facilityList += `</select>`
    // return list
    return facilityList
}

// add an eventListener that invokes setFacility
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facilities") {
            setFacility(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

