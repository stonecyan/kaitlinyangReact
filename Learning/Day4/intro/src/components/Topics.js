import React from 'react'
import {
    Link,
    Route
} from 'react-router-dom'

function Topic(props){
    return <h3>{props.match.params.topicId}</h3>
}

export default function Topics({match}){
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                      Props v. State
                    </Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic}/>
            <Route exact path={match.path} render={() =>{
                return <h3> Please select a topic</h3>
            }}/>
        </div>
    )
}
