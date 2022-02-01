const database = {
    // governors
    govornors: [
        {id: 1, name: "Simon Rockslayer", active: true, ColoniesId: 2},
        {id: 2, name: "Brockton Mistershackles", active: false, ColoniesId: 1},
        {id: 3, name: "President Whitmores", active: true, ColoniesId: 3},
        {id: 4, name: "Lelu Dallas", active: true, ColoniesId: 4},
    ],
    // colonies
    colonies: [ 
        {id: 1, name: "Kthulu Drillers"},
        {id: 2, name: "Downside Dwellers"},
        {id: 3, name: "The Trolls"},
        {id: 4, name: "Basecamp Five"},

    ],
    // facilities
    facilities: [
        {id: 1, name: "Dark Science Lab",active: true},
        {id: 2, name: "Moonanites Medical",active: false},
        {id: 3, name: "Stargate",active: true},
        {id: 4, name: "Bright Side Labs",active: false},
        {id: 5, name: "Assteroid Laundromat",active: true},
    ],
    // minerals
    minerals: [
        {id: 1, type: "Moonstone"},
        {id: 2, type: "Helium 3"},
        {id: 3, type: "Iron"},
        {id: 4, type: "Iridium"},
    ],
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
