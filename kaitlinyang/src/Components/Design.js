import React from 'react'
import {
    Link,
} from 'react-router-dom'


import Chocolate from './Images/Design/ChocolateBookDesign.jpg'
import Strength from './Images/Design/StrengthMagazineDesign.jpg'
import Magic from './Images/Design/TheMagicHouseDesign.jpg'
import Podcast from './Images/Design/PodcastBookDesign.jpg'
import Boba from './Images/Design/SaintLouisBubbleTeaRebrand.jpg'
import College from './Images/Design/CollegeProfileBrochureDesign.jpg'
import Editorial from'./Images/Design/EditorialDesign.jpg'
import WashU from './Images/Design/WashingtonUniversityMarketingMaterialsDesign.jpg'
import Missing from './Images/Design/MissingPiecesDesign.jpg'



export default function Design(){
    return (
        <div className="design-grid-container">
            <div className="designProject" id="chocolate">
                <figure>
                    <img src={Chocolate} alt="chocolate"/>
                    <figcaption>
                        <Link to='/Design/Chocolate'>Chocolate</Link>
                    </figcaption>
                </figure>
            </div>

            <div className="designProject" id="strength">
                <figure>
                    <img src={Strength} alt="Strength"/>
                    <figcaption>
                        <Link to='/Design/Strength'>Strength Magazine</Link>
                    </figcaption>
                </figure>
            </div>

            <div className="designProject" id="magic">
                <figure>
                    <img src={Magic} alt="MagicHouse"/>
                    <figcaption>
                        <Link to='/Design/MagicHouse'>The Magic House</Link>
                    </figcaption>
                </figure>
            </div>

            <div id="podcast">
                <div className="designProject">
                    <figure>
                        <img src={Podcast} alt="Podcast"/>
                        <figcaption>
                            <Link to='/Design/Podcast'>Podcast Book Design</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div id="boba">
                <div className="designProject">
                    <figure>
                        <img src={Boba} alt="Boba"/>
                        <figcaption>
                            <Link to='/Design/BubbleTea'>St. Louis Bubble Tea Rebrand</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div id="college">
                <div className="designProject">
                    <figure>
                        <img src={College} alt="CollegeBrochure"/>
                        <figcaption>
                            <Link to='/Design/College'>College Profile Brochure</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div id="editorial">
                <div className="designProject">
                    <figure>
                        <img src={Editorial} alt="Editorial"/>
                        <figcaption>
                            <Link to='/Design/Editorial'>Editorial Design</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div id="washu">
                <div className="designProject">
                    <figure>
                        <img src={WashU} alt="WashU"/>
                        <figcaption>
                            <Link to='/Design/WashU'>Washington University Marketing Materials</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

            <div id="missing">
                <div className="designProject">
                    <figure>
                        <img src={Missing} alt="Missing"/>
                        <figcaption>
                            <Link to='/Design/Missing'>Missing Pieces</Link>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </div>


    )
}
