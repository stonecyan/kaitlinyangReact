import React from 'react'

import OneA from '../Images/Design/Podcast/1a.jpg'
import OneB from '../Images/Design/Podcast/1b.jpg'
import Two from '../Images/Design/Podcast/2.jpg'
import Three from '../Images/Design/Podcast/3.jpg'
import Four from '../Images/Design/Podcast/4.jpg'
import Five from '../Images/Design/Podcast/5.jpg'
import Six from '../Images/Design/Podcast/6.jpg'
import Seven from '../Images/Design/Podcast/7.jpg'
import Eight from '../Images/Design/Podcast/8.jpg'
import Nine from '../Images/Design/Podcast/9.jpg'
import Ten from '../Images/Design/Podcast/10.jpg'
import Eleven from '../Images/Design/Podcast/11.jpg'
import Twelve from '../Images/Design/Podcast/12.jpg'


export default function Podcast(){
    const issuuStyle = {
        width:'100%',
        height:'700px'
    }

    return(
        <div className="page">
            <div className="contentPage">
                <h2>Podcast Book Design</h2>
                <p className="contentText">I illustrated and designed this book for the podcast “Who you gonna call?” from the American Life by Sean Cole. The podcast illustrates Sean’s relationship with his mom before her passing and his relationship with his step-dad since his mom’s passing. My concept for the book was developed from the idea of double narratives. I absorbed this intimate story with real-life recordings and turned them into two separate books, one of his Mom and one of his step-dad, Ed. The two books can be read simultaneously or individually. Although on the surface, Sean embodies different relationships with his mom and Ed, there is significant overlap between the two. Thus, by using two books, I am able to capture each individual relationship, while highlighting the similarities and love shared in the family.</p>
                <p className="contentText">The different colors, typefaces, graphical icons, cross-page illustrations, and intensity of the lines are used to portray each characters’ personality, expressions, and voices. I used hot pink for the mom’s dialogue to express her boisterous and passionate personality. A cold light blue was used for Ed because the relationship started out with limited affection, and as they connected more after his mom’s passing, the blue becomes warmer. </p>
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={OneA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={OneB} />
                    </div>
                </div>
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three} />
                <img className="contentImage" src={Four} />
                <img className="contentImage" src={Five} />
                <img className="contentImage" src={Six} />
                <img className="contentImage" src={Seven} />
                <img className="contentImage" src={Eight} />
                <img className="contentImage" src={Nine} />
                <img className="contentImage" src={Ten} />
                <img className="contentImage" src={Eleven} />
                <img className="contentImage" src={Twelve} />
                <div data-configid="27614648/59247965" style={issuuStyle} className="issuuembed"></div>

            </div>
        </div>
    )
}
