import bugsReducer from '../bugs/reducers/bugsReducer';
import { projectsReducer  } from '../projects';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    bugsStore : bugsReducer,
    projectsStore : projectsReducer
})

const store = createStore(rootReducer);

export default store;