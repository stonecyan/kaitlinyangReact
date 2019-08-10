import React from 'react'

import One from '../Images/Design/MissingPieces/1.jpg'
import Two from '../Images/Design/MissingPieces/2.jpg'
import Three from '../Images/Design/MissingPieces/3.jpg'
import Four from '../Images/Design/MissingPieces/4.jpg'
import Five from '../Images/Design/MissingPieces/5.jpg'
import Six from '../Images/Design/MissingPieces/6.jpg'
import Seven from '../Images/Design/MissingPieces/7.jpg'
import Eight from '../Images/Design/MissingPieces/8.jpg'
import Nine from '../Images/Design/MissingPieces/9.jpg'
import Ten from '../Images/Design/MissingPieces/10.jpg'

export default function Missing(){
    const issuuStyle = {
        width:'100%',
        height:'800px'
    }

    return(
        <div className="page">
            <div className="contentPage">
                <h2>Missing Pieces</h2>
                <p className="contentText">In this assignment, I was challenged to package a “Missing piece” in my life that can be universal to others. I chose to go about this in an abstract route, confidence, stemming from my experience as an immigrant. I came up with the concept by reflecting on my own experiences and in speaking with other immigrants. Most of us have millions of stories but choose not to tell, show, or draw attention to ourselves because we want to fit in. We hide these colorful, rich, and different cultures and values within ourselves to avoid confrontation or being categorized into different stereotypes. You can only see slight colors and patterns from the outside of the package while everything unfolds upon opening it. The different colors, sentences, and poem I wrote on the spine are my interpretation and ideals of confidence.  </p>
                <img className="contentImage" src={One} />
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three} />
                <img className="contentImage" src={Four} />
                <img className="contentImage" src={Five} />
                <img className="contentImage" src={Six} />
                <img className="contentImage" src={Seven} />
                <img className="contentImage" src={Eight} />
                <img className="contentImage" src={Nine} />
                <img className="contentImage" src={Ten} />
                <div data-configid="27614648/59242017" style={issuuStyle} className="issuuembed"></div>

            </div>
        </div>
    )
}
