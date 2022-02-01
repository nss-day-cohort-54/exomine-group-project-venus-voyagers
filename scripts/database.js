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
// returns an array of governor objects
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

// Get Facilities
// returns an array of faciltiy objects
export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

// Get Colonies Function
// returns an array of colony objects
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

// Get Minerals List
// returns an array of mineral objects
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}


// Get facilityMinerals list
// returns an array of facilityMineral objects
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

// Get colonyMinerals list
// returns an array of colonyMineral objects
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}


// Get Transient State
// returns transientState object
export const getTransientState = () => {
    return {...database.transientState}
}

// Set Mineral in transient state
// dispatches stateChanged event
// returns nothing
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// Set Facility in transient State
// dispatches stateChanged event
// returns nothing
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// Set Governor in transient state
// dispatches stateChanged event
// returns nothing
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// Subtracts a mineral in facilityMinerals given id
// returns nothing
export const setFacilityMineral = (facilityMineralId) => {
    for (const facilityMineral of database.facilityMinerals) {
        if(facilityMineralId === facilityMineral.id){
            facilityMineral.amount--
        }
    }
}

// Adds a mineral amount to colonyMinerals given id
// returns nothing
export const setColonyMineral = (colonyMineralId) => {
    for (const colonyMineral of database.colonyMinerals) {
        if(colonyMineralId === colonyMineral.id){
            colonyMineral.amount++
        }
    }
}


// Purchase Minerals and update state
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
