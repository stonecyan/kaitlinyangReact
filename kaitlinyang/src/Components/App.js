import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import Illustration from './Illustration'
import Design from './Design'
import About from './About'
import weblogo from './Images/LogoSelfPortrait.jpg'
import './App.css'

import Chocolate from'./Design/Chocolate'
import Boba from'./Design/Boba'
import College from'./Design/College'
import Editorial from'./Design/Editorial'
import Magic from'./Design/Magic'
import Missing from'./Design/Missing'
import Podcast from'./Design/Podcast'
import Strength from'./Design/Strength'
import WashU from'./Design/WashU'

import SecretSantaSociety from './Illustration/SecretSantaSociety'
import BasketballAnimals from './Illustration/Bear'
import Buddha from './Illustration/Buddha'
import Emperor from './Illustration/Emperor'
import RedRidingHood from './Illustration/LittleRedRidingHood'
import Mushroom from './Illustration/Mushroom'
import RapBattle from './Illustration/RapBattle'
import Sick from './Illustration/Sick'
import Veggie from './Illustration/Veggie'

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <div id="navigation" className="navigation">
                    <img className="weblogo" src= {weblogo} alt="weblogo"/>
                    <div className="navItems">
                        <ul>
                            <li><Link to='/Illustration'>illustration</Link></li>
                            <li><Link to='/Design'>design</Link></li>
                            <li><Link to='/About'>about</Link></li>
                        </ul>
                    </div>

                    <div id="navIcons">
                        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank" rel="noopener noreferrer" className="navLink"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/kaitlin.y.draws/" target="_blank" rel="noopener noreferrer" className="navLink"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/kaitlin.y.draws/" target="_blank" rel="noopener noreferrer" className="navLink"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    </div>

                    <br />
                    <br />
                    <div id="navContact">
                        <a href="mailto:kaitlin.yang@gmail.com">kaitlin.yang@gmail.com</a>
                        <p id="navNumber">(626) 818-8078</p>
                    </div>
                </div>
                <div id="content">
                    <Route exact path='/Illustration' component={Illustration}/>
                    <Route exact path='/Design' component={Design}/>
                    <Route exact path='/About' component={About}/>

                    <Route path='/Illustration/SecretSantaSociety' component={SecretSantaSociety}/>
                    <Route path='/Illustration/RapBattle' component={RapBattle}/>
                    <Route path='/Illustration/Emperor' component={Emperor}/>
                    <Route path='/Illustration/RedRidingHood' component={RedRidingHood}/>
                    <Route path='/Illustration/Buddha' component={Buddha}/>
                    <Route path='/Illustration/Sick' component={Sick}/>
                    <Route path='/Illustration/Veggie' component={Veggie}/>
                    <Route path='/Illustration/BasketballAnimals' component={BasketballAnimals}/>

                    <Route path='/Design/Chocolate' component={Chocolate}/>
                    <Route path='/Design/Strength' component={Strength}/>
                    <Route path='/Design/MagicHouse' component={Magic}/>
                    <Route path='/Design/Podcast' component={Podcast}/>
                    <Route path='/Design/BubbleTea' component={Boba}/>
                    <Route path='/Design/College' component={College}/>
                    <Route path='/Design/Editorial' component={Editorial}/>
                    <Route path='/Design/WashU' component={WashU}/>
                    <Route path='/Design/Missing' component={Missing}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default App;
