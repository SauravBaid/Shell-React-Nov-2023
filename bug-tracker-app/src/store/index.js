import bugsReducer from '../bugs/reducers/bugsReducer';
import { projectsReducer  } from '../projects';
import { createStore, combineReducers, applyMiddleware } from 'redux';

/* 
function loggerMiddleware(store){
    return function(next){
        return function actionHandler(action){
            console.group(action.type);
            console.log('Before -> ', store.getState())
            console.log('Action -> ', action)
            next(action);
            console.log('After -> ', store.getState())
            console.groupEnd()
        }
    }
} 
*/

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('Before -> ', store.getState())
    console.log('Action -> ', action)
    next(action);
    console.log('After -> ', store.getState())
    console.groupEnd()
}

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        const actionObj = action(store.getState);
        store.dispatch(actionObj)
    } else {
        next(action);
    }
}

const rootReducer = combineReducers({
    bugsStore : bugsReducer,
    projectsStore : projectsReducer
})

// after adding middleware
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
// console.log("store.dispatch=>", store.dispatch);

// before adding middleware
/* const store = createStore(rootReducer);
console.log(store.dispatch); */

export default store;