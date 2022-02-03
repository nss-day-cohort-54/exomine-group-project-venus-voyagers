// import htmlString functions from .js
import { coloniesHTML } from "./colonies/Colonies.js";
import { facilityMineralList } from "./facilities/FacilityMinerals.js";
import { FacilitiesHTML } from "./facilities/SelectFacility.js";
import { displayCart } from "./Orders.js";
import { SelectGovernor } from "./governors/Governors.js";
import { purchaseMineral } from "./database.js";

document.addEventListener(
    "click",
    event => {
        if(event.target.id === "orderButton"){
            purchaseMineral()
        }
    }
)

// export function that returns a string of html
export const MiningMarketplace = () => {
    return `
        <header class="header">
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
        
        <article class="coloniesAndGovernors">
            <section class="choices__governor">
                ${SelectGovernor()}
            </section>
            <section class="colonyMinerals">
                ${coloniesHTML()}
            </section>
            </article>

        <article class="choices__facility">
            ${FacilitiesHTML()}
        </article>
        <div class="facilityAndCart">
        <article class="facilityMinerals">
            ${facilityMineralList()}
        </article>

        <article class="purchasedMinerals">
            <h3>Space Cart</h3>
            <section class="spaceCart">
            ${displayCart()}
            </section>
            <button id="orderButton">Purchase Mineral</button>
        </article>
        </div>
    `
}