// import htmlString functions from .js
import { SelectGovernor } from "./governors/Governors.js"
// export function that returns a string of html
export const MiningMarketplace = () => {
    return `
        <header class="header">
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
        <article class="choices">
            <section class="choices__governor">
                ${SelectGovernor()}
            </section>
            <section class="choices__facility">
                Facility Dropdown
            </section>
        </article>

        <article class="colonyMinerals">
            Colony Minerals
        </article>

        <article class="facilityMinerals">
            Facility Minerals
        </article>

        <article class="purchasedMinerals">
            <h3>Space Cart</h3>
        </article>

    `
}