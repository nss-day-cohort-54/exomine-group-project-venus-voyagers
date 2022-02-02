// import getFacility, setFacility, getTransientState
import { getFacilities, setFacility, getTransientState} from "../database.js";


// export string containing dropdown menu containing only active facilities and only after a governor has been selected
export const FacilitiesHTML = () => {
// get state and governor list
    const state = getTransientState();
    const facilities = getFacilities();
    
    // start drop down html select tag
    const facilityList = `<select name="facilities">`
    // check to make sure state of governorId is not undefined (option has been selected)
    if (state.governorId != undefined) {
        // map out facilities which meet criteria
        const facilityFound = facilities.map(facility => {
            // check if facility is active
            if (facility.active === true) {
                // add options to facilityList
                facilityList += `
                <option value="${facility.id}">${facility.name}</option>`
            }
        })
        // join all facilities found and then add closing select tag
        facilityList += facilityFound.join("")
        facilityList += `</select>`
    }
    // return list
    return facilityList
}

// add an eventListener that invokes setFacility
document.addEventListener(
    "change",
    (event) => {
        if (event.target.value === `${facility.id}`) {
            setFacility(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

