// import getFacilities, getMinerals, getFacilityMinerals, 
// setMineral, getTransientState
import { getFacilities, getMinerals, getFacilityMinerals, getTransientState } from "../database.js";

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
    
    // if there is a selectedFacility return a radio list string, else return empty string
    if(selectedFacility) {
    
        // initialize header of string
        // get facility name
        const facilityName = facilities.find(facility => facility.id === selectedFacility).name
        let html = `<h2 class="facility__header">Facility Minerals for ${facilityName}</h2>
        <ul class="facility mineralList">`
        
        // Check if quantity is more than 0
        const availableMinerals = facilityMinerals.filter(facilityMineral => {
            return facilityMineral.amount > 0 && facilityMineral.facilityId === selectedFacility 
            })
            
        // Add to array
        const mineralArray = availableMinerals.map(availableMineral => {
            const mineralName = minerals.find(mineral => mineral.id === availableMineral.id).name
            if(selectedMineral && availableMineral.id === selectedMineral) {
                return `<li>
                <input type="radio" name="mineral" value="${availableMineral.id}" checked /> ${availableMineral.amount} tons of ${mineralName}
            </li>`
            } else {
                return `<li>
                <input type="radio" name="size" value="${availableMineral.id}" /> ${availableMineral.amount} tons of ${mineralName}
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

// Filter minerals at active facility
export const getFacilityMineralAmount = (facilityId) => {
    return ""
} 


//  Add event listener for radio button state change


// Calls setMineral and sets it




