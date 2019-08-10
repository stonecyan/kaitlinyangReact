import React from 'react'

import FinalCover from '../Images/Design/Chocolate/finalCover.jpg'
import OriginalCover from '../Images/Design/Chocolate/originalCover.gif'
import ChocolateBook from '../Images/Design/Chocolate/chocolateBookMockup.jpg'

export default function Chocolate(){
    return(
        <div class="page">
            <div class="contentPage">
                <h2>Chocolate Book Cover</h2>
                <p class="contentText">I redesigned the front and back cover of this YA non-fiction novel, Chocolate by Kay Frydenborg. I collaged and photoshopped the chocolate stack and melting drips and hand lettered the title, Chocolate.</p>
                <a class="contentText" id="chocolateLink" href="https://www.amazon.com/Chocolate-Science-Secrets-Worlds-Favorite/dp/0358112060/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1549983409&sr=8-3">Check it out on Amazon here!</a>
                <div class="row">
                    <div class="column">
                        <p class="chocolateText">Final Redesign by me</p>
                        <img class="contentImage" src={FinalCover} />
                    </div>
                    <div class="column">
                        <p class="chocolateText">Initial Cover</p>
                        <img class="contentImage" src={OriginalCover}/>
                    </div>
                </div>
                <img class="contentImage" src={ChocolateBook} />
            </div>
        </div>
    )
}
