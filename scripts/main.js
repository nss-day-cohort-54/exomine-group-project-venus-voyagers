// import exomine html function
import { MiningMarketplace } from "./Exomine.js";

// define variable using querySelector 
const mainContainer = document.querySelector("#container")

// call exomine html function

<<<<<<< HEAD
// add eventListener for statechanged that reloads the page


=======
const renderAllHTML = () => {
    mainContainer.innerHTML = MiningMarketplace()
}

renderAllHTML()

// add eventListener for statechanged that reloads the page

document.addEventListener("stateChanged", event => {
    renderAllHTML()
})
>>>>>>> main
