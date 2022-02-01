const database = {
    // governors

    // colonies

    // facilities

    // minerals

    // facilityMinerals

    // colonyMinerals

    transientState: {
        // selectedFacility
        // selectedGovernor
        // selectedMineral
    }
}

// Get Governor Names Function
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

// Get Facilities
export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

// Get Colony Names Function
export const getColonies = () => {
    return database.colonys.map(colony => ({...colony}))
}

// Get Minerals List
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}


// Get facilityMinerals list
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

// Get colonyMinerals list
export const getcolonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

// Set Active Governer Function
export const setActiveGovernor = (governorId) => {
    return ""
}

// Get Mineral amount from facilityMinerals given Facility
export const getFacilityMineralAmount = (facilityId) => {
    return ""
} 

// Get Mineral amount from colonyMinerals given Colony
export const getColonyMineralAmount = (colonyId) => {
    return ""
} 

// Get Transient State
export const getTransientState = () => {
    return ""
}

// Set Mineral in transient state
export const setMineral = (mineralId) => {
    return ""
}

// Set Facility
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// Set Governor in transient state (note, different than "active" governors!)
export const setGovernor = (governorId) => {
    return ""
}

// Set Mineral amount from facilityMinerals given Facility
export const setFacilityMineral = (facilityId, mineralId) => {
    return ""
}

// Set Mineral amount from colonyMinerals given Colony
export const setColonyMineral = (colonyId, mineralId) => {

}


// Purchase Minerals and update state
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
