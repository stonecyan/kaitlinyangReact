import React from 'react'
import SecretSantaSociety from './Images/Illustration/SecretSantaSocietyChildrenBookIllustration.jpg'
import RapBattle from './Images/Illustration/RapBattlePoster.jpg'
import Emperor from './Images/Illustration/EmperorsSeed.jpg'
import RedRidingHood from './Images/Illustration/LittleRedRidingHood.jpg'
import Buddha from './Images/Illustration/MomBuddhaMeditation.jpg'
import Sick from './Images/Illustration/SickZine.jpg'
import {
    Link,
    Route
} from 'react-router-dom'

export default function Illustration(){
    return (
        <div class="illustration-grid-container">
            <div id="secretSanta" class="illustrationProject">
                <img class="gridImage" src={SecretSantaSociety} alt="Secret Santa Society" />
            </div>
            <div class="illustrationOverlay" id="secretSantaOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/SecretSantaSociety'>Secret Santa Society</Link>
            </div>

            <div id="rapBattle" class="illustrationProject">
                <img class="gridImage" src={RapBattle} alt="Rap Battle Poster" />
            </div>
            <div class="illustrationOverlay" id="rapBattleOverlay">
                <h3>commission</h3>
                <Link to='/Illustration/RapBattle'>Autumn Moon Rap Battle</Link>
            </div>

            <div id="emperor" class="imageOverlay">
                <img class="gridImage" src={Emperor} alt="Emperor's Seed Children's Book" />
            </div>
            <div class="illustrationOverlay" id="emperorOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/Emperor'>Emperor's Seed and other stories</Link>
            </div>

            <div id="redriding" class="imageOverlay">
                <img class="gridImage" src={RedRidingHood} alt="Little Red Riding Hood" />
            </div>
            <div class="illustrationOverlay" id="redridingOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/Emperor'>Little Red Riding Hood</Link>
            </div>

            <div id="buddha" class="imageOverlay">
                <img class="gridImage" src={Buddha} alt="Mom Buddha Meditation" />
            </div>
            <div class="illustrationOverlay" id="buddhaOverlay">
                <h3>personal project</h3>
                <Link to='/Illustration/Emperor'>Portrait</Link>
            </div>

            <div id="sick" class="imageOverlay">
                <img class="gridImage" src={Sick} alt="Sick Zine" />
            </div>
            <div class="illustrationOverlay" id="sickOverlay">
                <h3>zine</h3>
                <Link to='/Illustration/Emperor'>Long Distance Sucks</Link>
            </div>





            <Route path='/Illustration/SecretSantaSociety' component={SecretSantaSociety}/>
            <Route path='/Illustration/RapBattle' component={RapBattle}/>
        </div>
    )
}
