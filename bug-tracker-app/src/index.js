import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bugs/actions';
import { projectActionCreators } from './projects';

import store from './store';
import Bugs from './bugs';
import Projects from './projects';




const root = ReactDOM.createRoot(document.getElementById('root'));

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);


const App =({bugsState, projectsState}) => {
    const [userChoice, setUserChoice] = React.useState('');
    return (
    <>
        <h1>Bug Tracker</h1>
        <hr/>
        <div>
            <button onClick={() => setUserChoice('bugs')}>Bugs</button>
            <button onClick={() => setUserChoice('projects')}>Projects</button>
        </div>
        <div>
            {userChoice === 'bugs' && <Bugs bugsState={bugsState} {...bugActionDispatchers}/>}
            {userChoice === 'projects' && <Projects projects={projectsState} {...projectActionDispatchers}/>}
        </div>
    </>
    )
} 

function renderApp(){
    const storeState = store.getState();
    const projectsState = storeState.projectsStore;
    const bugsState= storeState.bugsStore;
    root.render(<App bugsState={bugsState} projectsState={projectsState}/>)
}


renderApp();
store.subscribe(renderApp)

/* ES6 Modules examples */

/* 
import * as calc from './calculator';
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator';
const { add, subtract } = calc
console.log(add(100,2000))
console.log(subtract(100,2000))  
*/

/* 
import { add, subtract } from './calculator';
console.log(add(1000,2000))
console.log(subtract(1000,2000))  
*/

/* 
import c from './calculator'
console.log(c.add(1000,2000))
console.log(c.subtract(1000,2000))   
*/

