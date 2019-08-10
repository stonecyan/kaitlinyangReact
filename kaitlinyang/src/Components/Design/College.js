import React from 'react'

import MockUp from '../Images/Design/College/MockUp.jpg'

export default function College(){
    const issuuStyle = {
        widht: '100%',
        height: '800px'
    }

    const issuuScript = {
        __html: "<script type='text/javascript' src='//e.issuu.com/embed.js' async='true'></script>"
    }

    return(
        <div className="page">
            <div className="contentPage">
                <h2>College Profile Brochure</h2>
                <p className="contentText">Created an informative brochure for Annie Wright Schools to send out to all colleges throughout US. Helped with organizing information,  illustrating for the infographics, designing the layout, and production. </p>
                <img className="contentImage" src={MockUp} />
                <div data-configid="27614648/64527115" style={issuuStyle} className="issuuembed" dangerouslySetInnerHTML={issuuScript}></div>

            </div>

        </div>


    )
}
