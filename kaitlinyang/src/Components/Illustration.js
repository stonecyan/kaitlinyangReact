import React from 'react'
import SecretSantaSociety from './Images/Illustration/SecretSantaSocietyChildrenBookIllustration.jpg'
import RapBattle from './Images/Illustration/RapBattlePoster.jpg'
import Emperor from './Images/Illustration/EmperorsSeed.jpg'
import RedRidingHood from './Images/Illustration/LittleRedRidingHood.jpg'
import Buddha from './Images/Illustration/MomBuddhaMeditation.jpg'
import Sick from './Images/Illustration/SickZine.jpg'
import Veggie from './Images/Illustration/VeggieAnimalIllustration.jpg'
import Bear from './Images/Illustration/BearBasketballIllustration.jpg'
import {
    Link,
    Route
} from 'react-router-dom'

export default function Illustration(){
    return (
        <div className="illustration-grid-container">
            <div id="secretSanta" className="illustrationProject">
                <img className="gridImage" src={SecretSantaSociety} alt="Secret Santa Society" />
            </div>
            <div className="illustrationOverlay" id="secretSantaOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/SecretSantaSociety'>Secret Santa Society</Link>
            </div>

            <div id="rapBattle" className="illustrationProject">
                <img className="gridImage" src={RapBattle} alt="Rap Battle Poster" />
            </div>
            <div className="illustrationOverlay" id="rapBattleOverlay">
                <h3>commission</h3>
                <Link to='/Illustration/RapBattle'>Autumn Moon Rap Battle</Link>
            </div>

            <div id="emperor" className="imageOverlay">
                <img className="gridImage" src={Emperor} alt="Emperor's Seed Children's Book" />
            </div>
            <div className="illustrationOverlay" id="emperorOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/Emperor'>Emperor's Seed and other stories</Link>
            </div>

            <div id="redriding" className="imageOverlay">
                <img className="gridImage" src={RedRidingHood} alt="Little Red Riding Hood" />
            </div>
            <div className="illustrationOverlay" id="redridingOverlay">
                <h3>children's book</h3>
                <Link to='/Illustration/RedRidingHood'>Little Red Riding Hood</Link>
            </div>

            <div id="buddha" className="imageOverlay">
                <img className="gridImage" src={Buddha} alt="Mom Buddha Meditation" />
            </div>
            <div className="illustrationOverlay" id="buddhaOverlay">
                <h3>personal project</h3>
                <Link to='/Illustration/Buddha'>Portrait</Link>
            </div>

            <div id="sick" className="imageOverlay">
                <img className="gridImage" src={Sick} alt="Sick Zine" />
            </div>
            <div className="illustrationOverlay" id="sickOverlay">
                <h3>zine</h3>
                <Link to='/Illustration/Sick'>Long Distance Sucks</Link>
            </div>

            <div id="veggie" className="imageOverlay">
                <img className="gridImage" src={Veggie} alt="Veggie Illustration" />
            </div>
            <div className="illustrationOverlay" id="veggieOverlay">
                <h3>Personal Project</h3>
                <Link to='/Illustration/Veggie'>Veggie Animal</Link>
            </div>

            <div id="bear" className="imageOverlay">
                <img className="gridImage" src={Bear} alt="Basketbal Animal Illustrations" />
            </div>
            <div className="illustrationOverlay" id="bearOverlay">
                <h3>Personal Project</h3>
                <Link to='/Illustration/BasketballAnimals'>Basketball Animal Series</Link>
            </div>
        </div>
    )
}
