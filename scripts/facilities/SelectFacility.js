// import getFacility, setFacility, getTransientState
import { getFacilities, setFacility, getTransientState} from "../database.js";
// export string containing dropdown menu containing only active facilities and only after a governor has been selected
export const FacilitiesHTML = () => {

    const state = getTransientState();
    const facilities = getFacilities();
    const governorList = `<select name="governors" id="gov">`

    if (state.governorId != undefined) {
        const facilityFound = facilities.map(facility => {
            if (facility.active === true) {
                governorList += `
                <option value="${governor.id}">${governor.name}</option>`
            }
        })
        governorList += "</select>"
    }
    return governorList
}
// add an eventListener that invokes setFacility


document.querySelector(
    "change",
    (event) => {
        if (event.target.value === `${governor.id}`) {
            setFacility(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)