import React from 'react'

import CurrentLogo from '../Images/Design/Boba/CurrentLogo.jpg'
import One from '../Images/Design/Boba/static1.squarespace.jpg'
import Two from '../Images/Design/Boba/static1.squarespace-1.jpg'
import Three from '../Images/Design/Boba/static1.squarespace-2.jpg'
import Four from '../Images/Design/Boba/static1.squarespace-3.jpg'
import Five from '../Images/Design/Boba/static1.squarespace-4.jpg'
import Six from '../Images/Design/Boba/static1.squarespace-5.jpg'
import Seven from '../Images/Design/Boba/static1.squarespace-6.jpg'


export default function Boba(){
    return(
        <div className="page">
            <div className="contentPage">
                <h2>St. Louis Bubble Tea Rebrand</h2>'
                <p className="contentText">A rebranding opportunity for St. Louis Bubble Tea located on the famous Delmar Loop, St. Louis. In this Branding and Identity course, I practiced the seven-phase process for creating and implementing effective brand identity. From estimating and scheduling, research, design development through design application, I learned the essence of successfully developing a brand.</p>
                <p className="contentText">My rebranding focused on the four fundamental qualities of the store: authenticity, customization, innovation, and hospitality. The logo design highlights the essence of the store--- Customization. The tagline “TEAse your taste buds” reinforces the innovative drink selections while maintaining the liveliness and friendliness of the store. The mockups consistently portray these core values in the store’s branding.</p>
                <p className="contentText">Current logo:</p>
                <img className="contentImage" src={CurrentLogo} />
                <p className="contentText">Final proposal:</p>
                <img className="contentImage" src={One} />
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three} />
                <img className="contentImage" src={Four} />
                <img className="contentImage" src={Five} />
                <img className="contentImage" src={Six} />
                <img className="contentImage" src={Seven} />

            </div>
        </div>
    )
}

