import React from 'react'

import EditorialCover from '../Images/Design/Editorial/EditorialCover.jpg'
import One from '../Images/Design/Editorial/static1.squarespace-6.jpg'
import Two from '../Images/Design/Editorial/static1.squarespace-7.jpg'
import Three from '../Images/Design/Editorial/static1.squarespace-8.jpg'
import Four from '../Images/Design/Editorial/static1.squarespace-9.jpg'

export default function Editorial(){
    const issuuStyle={
        width:'100%',
        height:'600px'
    }

    return(
        <div className="page">
            <div className="contentPage">
                <h2>Editorial Design</h2>
                <p className="contentText">This is an editorial book project that includes assigned text from Wesley Morris’ article “Who do you think you are?” in the New York Times. The article focuses on racism and illustrates the progress America has made in recent years. I used historical moments of racial strife since the 1940s as my theme and content for the subtext. The twenty spreads are consistent through the use of found newspapers, black and white colors, significant historical images, dates, and timeline labels. Through this project, I gained knowledge in content research, information hierarchy, pacing, and collaging full-spread compositions. </p>
                <p className="contentText">I chose to make the whole book in black and white to highlight the stark contrast in different racial issues. The strong juxtaposition of two opposing colors reflects the sentiment of the time. I included newspaper clippings to reflect the clashing views, ideologies, and people from the most controversial time period in the history of the United States.</p>
                <div id="issuu" data-configid="27614648/42670448" style={issuuStyle} className="issuuembed"></div>
                <img className="contentImage" src={EditorialCover} />
                <img className="contentImage" src={One}/>
                <img className="contentImage" src={Two} />
                <img className="contentImage" src={Three} />
                <img className="contentImage" src={Four} />

            </div>
             <script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>
        </div>

    )
}
