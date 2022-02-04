//import getMinerals, getTransientState, getGovernors, getColonies, getColonyMinerals
import { getMinerals, getTransientState, getGovernors, getColonies, getColonyMinerals } from "../database.js"
// get state
// check if governor is selected
// iterate over filtered list of colony mineral objects

export const coloniesHTML = () => {
    // Get Colony from Selected Governor Name
    const colonies = getColonies()
    const governors = getGovernors()
    const state = getTransientState()
    const minerals = getMinerals()
    const colonyMinerals = getColonyMinerals()
    let coloniesHTML = "<h2>Colony Minerals</h2>"
    if (state.selectedGovernor) {
        // if true, check what colony they govern
        const governor = governors.find(governor =>  governor.id === state.selectedGovernor )
        // find in colony list the colony obj which matches colonyId
        const foundColonies = colonies.find(colony => colony.id === governor.coloniesId)
        coloniesHTML = `<h2>${foundColonies.name} Minerals</h2><ul>`
        // filter colonyMinerals by colony that governor is in
        const colonyMineralsList = colonyMinerals.filter(colonyMineral => colonyMineral.coloniesId === foundColonies.id)
        const finalList = colonyMineralsList.map(list => {
            // match mineral id with find name of mineral 
            const foundMineral = minerals.find(mineral => mineral.id === list.mineralsId)
            // build html string with name property
            return `<li>${list.quantity} tons of ${foundMineral.type} </li>`
        })
        coloniesHTML += finalList.join("")
        coloniesHTML += "</ul>"
        // return list
        return coloniesHTML
    } 
    return coloniesHTML
    


}


