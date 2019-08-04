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


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div id="navigation" class="navigation">
                    <img class="weblogo" src= {weblogo}/>
                    <div class="navItems">
                        <ul>
                            <li><Link to='/Illustration'>illustration</Link></li>
                            <li><Link to='/Design'>design</Link></li>
                            <li><Link to='/About'>about</Link></li>
                        </ul>
                    </div>

                    <div id="navIcons">
                        <a href="https://www.linkedin.com/in/kaitlin-yang-98447386/" target="_blank"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/kaitlin.y.draws/" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/kaitlin.y.draws/" target="_blank"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    </div>

                    <br />
                    <br />
                    <div id="navContact">
                        <a href="mailto:kaitlin.yang@gmail.com">kaitlin.yang@gmail.com</a>
                        <p id="navNumber">(626) 818-8078</p>
                    </div>
                </div>
                <div class="content">
                    <Route path='/Illustration' component={Illustration}/>
                    <Route path='/Design' component={Design}/>
                    <Route path='/About' component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
