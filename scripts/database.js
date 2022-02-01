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
