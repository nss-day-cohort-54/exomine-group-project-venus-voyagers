// import getFacilities, getMinerals, getFacilityMinerals, 
// setMineral, getTransientState
import { getFacilities, getMinerals, getFacilityMinerals, getTransientState, setMineral } from "../database.js";

// Create a function that iterates through minerals

// Find which facility is active 
export const facilityMineralList = () => {
    
    // get minerals and facilityMinerals lists
    const minerals = getMinerals()
    const facilityMinerals = getFacilityMinerals()
    const facilities = getFacilities()

    // get transient state to find selected facility and selected mineral
    const transientState = getTransientState()
    const selectedFacility = transientState.selectedFacility
    const selectedMineral = transientState.selectedMineral
    
    // if there is a selectedFacility return a radio list string, else return default header string
    if(selectedFacility) {
    
        // initialize header of string
        // get facility name
        const facilityName = facilities.find(facility => facility.id === selectedFacility).name
        let html = `<h2 class="facility__header">Facility Minerals for ${facilityName}</h2>
        <ul class="facility mineralList">`
        
        // Check if quantity is more than 0
        const availableMinerals = facilityMinerals.filter(facilityMineral => {
            return facilityMineral.quantity > 0 && facilityMineral.miningFacilityId === selectedFacility 
            })
            
        // Add to array as a radio button with default based on current transient state
        const mineralArray = availableMinerals.map(availableMineral => {
            const mineralName = minerals.find(mineral => mineral.id === availableMineral.mineralsId).type
            // checks if there is a selectedMineral then if the available miner matches the selected mineral 
            if(selectedMineral && availableMineral.mineralsId === selectedMineral) {
                return `<li>
                <input type="radio" name="mineral" value="${availableMineral.mineralsId}" checked /> ${availableMineral.quantity} tons of ${mineralName}
            </li>`
            } else {
                return `<li>
                <input type="radio" name="mineral" value="${availableMineral.mineralsId}" /> ${availableMineral.quantity} tons of ${mineralName}
            </li>`
            }
        })
    
        // Return string of array using join
        html += mineralArray.join("")
        html += "</ul>"

        return html

    }
    // return if no facility is selected
    return '<h2 class="facility__header">Facility Minerals</h2>'

}

//  Add event listener for radio button state change
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {

            // Calls setMineral and sets it
            setMineral(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))

        }
    }
)





