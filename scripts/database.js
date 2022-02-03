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
        {id: 5, name: "Asteroid Laundromat", active: true},
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
        {id: 6, quantity: 350, mineralsId: 2, miningFacilityId: 1},
        {id: 7, quantity: 500, mineralsId: 4, miningFacilityId: 2},
        {id: 8, quantity: 750, mineralsId: 3, miningFacilityId: 3},
        {id: 9, quantity: 580, mineralsId: 1, miningFacilityId: 4},
        {id: 10, quantity: 503, mineralsId: 5, miningFacilityId: 5},
    ],
    // colonyMinerals
    colonyMinerals: [
        {id: 1, coloniesId: 1, mineralsId: 4, quantity: 640},
        {id: 2, coloniesId: 2, mineralsId: 2, quantity: 680},
        {id: 3, coloniesId: 4, mineralsId: 1, quantity: 605},
        {id: 4, coloniesId: 3, mineralsId: 3, quantity: 603},
        {id: 5, coloniesId: 5, mineralsId: 5, quantity: 602},
    ],
    transientState: {
       
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
    // get the transientState
    const state = getTransientState()
    // get the selectedMineral from transientState
    const mineralToBuy = state.selectedMineral
    // get facilities
    // get facilityMinerals
    // get colonies
    // get governors to find the colony
    // get colonyMinerals
    const colonies = getColonies()
    const governors = getGovernors()
    const colonyMinerals = getColonyMinerals()
    const facilities = getFacilities()
    const facilityMinerals = getFacilityMinerals()

    // Check if order is proper
    if(state.selectedMineral){

        // subtract 1 from facility's available minerals
        // available minerals = filter facilityMinerals by the selectedFacility (id)
        const availableMinerals = facilityMinerals.filter(facilityMineral => facilityMineral.miningFacilityId === state.selectedFacility)

        // facilityMineral to edit = filter available minerals by selectedMineral
        const facilityMineralToEdit = availableMinerals.find(facilityMineral => facilityMineral.mineralsId === mineralToBuy)

        // get the id from facilityMineral to edit 
        const targetId = facilityMineralToEdit.id
        // database.facilityMineral.id == the above id [ mineral to edit ]
        // subtract 1 from that facilityMineral's amount property
        // database.facilityMinerals[ targetId - 1 ].quantity--
        for (const facilityMineral of database.facilityMinerals) {
            if(facilityMineral.id === targetId){
                facilityMineral.quantity--
            }
        }

        // add 1 to colony's minerals
            // get selectedGovernor from state
            // find colony by selectedGovernor's id
            
            // colony's mineral = filtering colonyMinerals by foudColony
            // check if the colony already has any of the mineral by finding selectedMinera in colony's Minerals
            // if colony has mineral stock
                // add 1

            // if colony has no mineral of this type
                // add a colonyMineral entry where quantity = 1

        // Clear space cart
            // delete database.transientState.selectedMineral -- if no selectedMineral displayCart() does not add to the HTML

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
