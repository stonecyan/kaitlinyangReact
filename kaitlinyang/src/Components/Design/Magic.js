import React from 'react'

import One from '../Images/Design/MagicHouse/1.jpg'
import Two from '../Images/Design/MagicHouse/2.jpg'
import Three from '../Images/Design/MagicHouse/3.jpg'
import Four from '../Images/Design/MagicHouse/4.jpg'
import Five from '../Images/Design/MagicHouse/5.jpg'
import Six from '../Images/Design/MagicHouse/6.jpg'
import Seven from '../Images/Design/MagicHouse/7.jpg'
import Eight from '../Images/Design/MagicHouse/8.jpg'
import Nine from '../Images/Design/MagicHouse/9.jpg'
import Ten from '../Images/Design/MagicHouse/10.jpg'
import Eleven from '../Images/Design/MagicHouse/11.jpg'
import Poster from '../Images/Design/MagicHouse/magicHousePoster.jpg'


export default function Magic(){
    const issuuStyle = {
        width:'100%',
        height:'700px'
    }
    return(
        <div className="page">
            <div className="contentPage">
                <h2>The Magic House</h2>
                <p className="contentText">I created an activity workbook for children visiting the St. Louis Children’s Museum, the Magic House. After conducting several interviews onsite, I developed my concept based on solving the lack of interaction between children and the educational materials in each room. The collectable stickers give them the incentive to explore, learn, and complete questions and tasks with the help of their guardians. </p>
                <p className="contentText">The individual stickers prompt the children to visualize themselves in different roles and careers. The artwork is less realistic and more open to interpretation, which make it more accessible and understandable to the children. I also include different ethnicities and genders to broaden the user’s perspective on the world. The second part of the project serves as a memory documentation that the children and their parents can work on and look back together. </p>

                <img className="contentImage" src={One} />
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three}/>
                <img className="contentImage" src={Four} />
                <img className="contentImage" src={Five} />
                <img className="contentImage" src={Six} />
                <img className="contentImage" src={Seven} />
                <img className="contentImage" src={Eight} />
                <img className="contentImage" src={Nine} />
                <img className="contentImage" src={Ten} />
                <img className="contentImage" src={Eleven} />
                <img className="contentImage" src={Poster} />

                <p className="contentTetx">Process of the project development -</p>
                <div data-configid="27614648/56604720" style={issuuStyle} className="issuuembed"></div>

            </div>
        </div>
    )
}
