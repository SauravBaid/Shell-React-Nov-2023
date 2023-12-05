import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export function projectsReducer(currenState = [], action){
    if (action.type === 'PROJECTS_INIT') return action.payload;
    return currenState;
}

export const projectActionCreators = {
    load(){
        const initialState = [
            {id : 1, name : 'Bug Tracker'},
            {id : 2, name : 'Time Tracker'},
            {id : 3, name : 'Expense Tracker'},
        ]
        return {type : 'PROJECTS_INIT', payload : initialState};
    }
}

const Projects = () => {
    const projects = useSelector(storeState => storeState.projectsStore)
    const dispatch = useDispatch();
    const { load } = bindActionCreators(projectActionCreators, dispatch);
    return (
        <>
        <h3>Projects</h3>
        <hr/>
        <button onClick={load}>Load</button>
        <ul>
            { projects.map(p => <li key={p.id}>{p.name}</li>) }
        </ul>
        </>
    )
}

export default Projects;

