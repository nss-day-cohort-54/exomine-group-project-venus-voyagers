const database = {
    // governors
    governors: [
        {id: 1, name: "Simon Rockslayer", active: true, coloniesId: 2},
        {id: 2, name: "Brockton Mistershackles", active: false, coloniesId: 1},
        {id: 3, name: "President Whitmores", active: true, coloniesId: 3},
        {id: 4, name: "Lelu Dallas", active: true, coloniesId: 4},
        {id: 5, name: "The Govornator", active: false, coloniesId: 5}
    ],
    // colonies
    colonies: [ 
        {id: 1, name: "Kthulu Drillers"},
        {id: 2, name: "Downside Dwellers"},
        {id: 3, name: "The Trolls"},
        {id: 4, name: "Basecamp Five"},
        {id: 5, name: "The Lost Ones"}

    ],
    // facilities
    facilities: [
        {id: 1, name: "Dark Science Lab", active: true},
        {id: 2, name: "Moonanites Medical", active: false},
        {id: 3, name: "Stargate", active: true},
        {id: 4, name: "Bright Side Labs", active: false},
        {id: 5, name: "Assteroid Laundromat", active: true},
    ],
    // minerals
    minerals: [
        {id: 1, type: "Moonstone"},
        {id: 2, type: "Helium 3"},
        {id: 3, type: "Iron"},
        {id: 4, type: "Iridium"},
        {id: 5, type: "Goooold"}
    ],
    // facilityMinerals
    facilityMinerals: [
        {id: 1, quantity: 350, mineralsId: 1, miningFacilityId: 1},
        {id: 2, quantity: 500, mineralsId: 3, miningFacilityId: 2},
        {id: 3, quantity: 750, mineralsId: 2, miningFacilityId: 3},
        {id: 4, quantity: 580, mineralsId: 5, miningFacilityId: 4},
        {id: 5, quantity: 503, mineralsId: 4, miningFacilityId: 5},
    ],
    // colonyMinerals
    colonyMinerals: [
        {id: 1, coloniesId: 1, mineralsId: 4, quanity: 640},
        {id: 2, coloniesId: 2, mineralsId: 2, quanity: 680},
        {id: 3, coloniesId: 4, mineralsId: 1, quanity: 605},
        {id: 4, coloniesId: 3, mineralsId: 3, quanity: 603},
        {id: 5, coloniesId: 5, mineralsId: 5, quanity: 602},
    ],
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
    return database.colonies.map(colony => ({...colony}))
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
export const getColonyMinerals = () => {
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

// Set Facility in transient State
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
    return ""
}


// Purchase Minerals and update state
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
