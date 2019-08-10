import React from 'react'

import Kaitlin from './Images/KaitlinYangIllustrator.jpg'

export default function About(){
    return(
        <div className="aboutDescription">
            <h1 className="aboutTitle">About Me</h1>
            <div className="column">
                <img id="aboutImage" src={Kaitlin} alt="Kaitlin"/>
                <a id="resumeDownload" href="~/Content/Resume_Kaitlin Yang.pdf" download>download my resume here</a>
            </div>
            <div className="column" id="aboutDescription">
                <p>
                    Hi! My name is Kaitlin. I am a recent college grad with a BFA in Communication Design, with a concentration in Illustration, from Washington University in St. Louis. I was born and raised in Taiwan, then lived in Chicago, the Bay Area, and Seattle before moving to St. Louis for college. My unique international background prompts me to explore different cultures and inspires me to be an open-minded and creative artist. I hope to become a children's book illustrator one day, and I wish to facilitate the exchange of cultures, emotions, and beliefs through my illustrations, one book at a time. I am currently working as a Design Assistant at HMH Books for Young Readers by day and freelance illustrating by night in New York City.
                </p>
                <p>
                    If you have a project in mind, I'd like to hear about it :)
                    <br />Get in touch! <a id="aboutEmail" href="mailto:kaitlin.yang@gmail.com">kaitlin.yang@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
