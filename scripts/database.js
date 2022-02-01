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

// Set Active Governer Function


// Get Colony Names Function

// Get Minerals List

// Get Mineral amount from facilityMinerals given Facility

// Get Mineral amount from colonyMinerals given Colony


// Get Transient State

// Set Mineral in transient state

// Set Mineral amount from facilityMinerals given Facility

// Set Mineral amount from colonyMinerals given Colony



// Set Facility
export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

// Get Facilities
export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

// Purchase Minerals and update state
export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
