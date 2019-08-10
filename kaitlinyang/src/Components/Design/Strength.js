import React from 'react'

import One from '../Images/Design/Strength/1.jpg'
import Two from '../Images/Design/Strength/2.jpg'
import Three from '../Images/Design/Strength/3.jpg'
import Four from '../Images/Design/Strength/4.jpg'
import Five from '../Images/Design/Strength/5.jpg'
import Six from '../Images/Design/Strength/6.jpg'
import Seven from '../Images/Design/Strength/7.jpg'
import Eight from '../Images/Design/Strength/8.jpg'

export default function Strength(){
    return(
        <div className="page">
            <div className="contentPage">
                <h2>Strength Magazine</h2>
                <p className="contentText">I worked as the lead Graphic Designer for Strength magazine, an annual publication for all members of the Annie Wright Schools and the Tacoma community. The magazine includes articles about educational trends, stories about students and alumni, updates on the evolving history of the school, student and faculty achievement, and more. I had the opportunity to develop the entire publication from content developing, brainstorming, designing all the way to print production and distributing. </p>
                <p className="contentText">Since the overarching theme for this issue is the topic of IB, I used a lot of geometric shapes and bold colors to bring more visual interest to the intellectual topic. Another goal of mine was highlighting the candid photos of the beautiful campus and students. </p>
                <p className="contentText">Some sample spreads below (Total 68 pages)</p>
                <img className="contentImage" src={One} />
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three} />
                <img className="contentImage" src={Four} />
                <img className="contentImage" src={Five} />
                <img className="contentImage" src={Six} />
                <img className="contentImage" src={Seven} />
                <img className="contentImage" src={Eight} />
            </div>
        </div>
    )
}
