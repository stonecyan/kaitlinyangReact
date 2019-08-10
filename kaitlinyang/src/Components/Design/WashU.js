import React from 'react'

import OneA from '../Images/Design/WashU/1a.jpg'
import OneB from '../Images/Design/WashU/1b.jpg'
import TwoA from '../Images/Design/WashU/2a.jpg'
import TwoB from '../Images/Design/WashU/2b.jpg'
import Three from '../Images/Design/WashU/3.jpg'
import FourA from '../Images/Design/WashU/4a.jpg'
import FourB from '../Images/Design/WashU/4b.jpg'
import Five from '../Images/Design/WashU/5.jpg'
import SixA from '../Images/Design/WashU/6a.jpg'
import SixB from '../Images/Design/WashU/6b.jpg'
import Seven from '../Images/Design/WashU/7.jpg'
import EightA from '../Images/Design/WashU/8a.jpg'
import EightB from '../Images/Design/WashU/8b.jpg'
import Nine from '../Images/Design/WashU/9.jpg'


export default function WashU(){
    const issuuStyle={
        width:'100%',
        height:'800px'
    }

    return(
        <div className="page">
            <div className="contentPage">
                <h2>Washington University Marketing Materials</h2>
                <p className="contentText">Various different design project I made for Washington University in St. Louis while working as the graphic designer for Campus Life in Danforth University Center</p>
                <p className="contetText">Marketing Booklet for Having Media Center</p>
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={OneA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={OneB} />
                    </div>
                </div>
                <div id="issuu" data-configid="27614648/62590415" style={issuuStyle} className="issuuembed"></div>
                <p className="contentText">Marketing Booklet for Prospective Students, Parents, and Alumni</p>
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={TwoA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={TwoB} />
                    </div>
                </div>
                <img className="contentImage" src={Three} />
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={FourA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={FourB} />
                    </div>
                </div>
                <img className="contentImage" src={Five} />
                <p className="contentText">Event Brochures Later Used as Official Templates</p>
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={SixA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={SixB}/>
                    </div>
                </div>
                <p className="contentText">Event Banner, Flyer, Screen Displays, Social Media Posts</p>
                <img className="contentImage" src={Seven} />
                <div className="row">
                    <div className="column">
                        <img className="contentImage" src={EightA} />
                    </div>
                    <div className="column">
                        <img className="contentImage" src={EightB} />
                    </div>
                </div>
                <p className="contentText">Poster, Flyer, Banner Design Repeatedly For Weekly Event At Danforth Univeristy Center</p>
                <img className="contentImage" src={Nine} />

            </div>
        </div>
    )
}
