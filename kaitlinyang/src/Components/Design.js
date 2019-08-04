import React from 'react'
import {
    Link,
    Route
} from 'react-router-dom'

import Chocolate from './Images/Design/ChocolateBookDesign.jpg'
import Strength from './Images/Design/StrengthMagazineDesign.jpg'
import Magic from './Images/Design/TheMagicHouseDesign.jpg'
import Podcast from './Images/Design/PodcastBookDesign.jpg'


export default function Design(){
    return (
        <div class="design-grid-container">
            <div class="designProject" id="chocolate">
                <figure>
                    <img src={Chocolate}/>
                    <figcaption>
                        <Link to='/Design/Chocolate'>Chocolate</Link>
                    </figcaption>
                </figure>
            </div>

            <div class="designProject" id="strength">
                <figure>
                    <img src={Strength}/>
                    <figcaption>
                        <Link to='/Design/Strength'>Strength Magazine</Link>
                    </figcaption>
                </figure>
            </div>

            <div class="designProject" id="magic">
                <figure>
                    <img src={Magic}/>
                    <figcaption>
                        <Link to='/Design/MagicHouse'>The Magic House</Link>
                    </figcaption>
                </figure>
            </div>

            <div id="podcast">
                <div class="designProject">
                    <figure>
                        <img src={Podcast}/>
                        <figcaption>
                            <Link to='/Design/MagicHouse'>Podcast Book Design</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>


    )
}
