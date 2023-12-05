import { bindActionCreators } from "redux";
import { toggle, remove } from "../actions";
import { useDispatch } from "react-redux";

/* 
const BugItem = ({bug}) => {
    const toggleDispatcher = bindActionCreators(toggle, useDispatch())
    const removeDispatcher = bindActionCreators(remove, useDispatch())
    return (
        <li>
            <span
                className={`bugname ${bug.isClosed ? 'closed' : ''}`}
                onClick={() => toggleDispatcher(bug)}
            >{bug.name}</span>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <button onClick={() => removeDispatcher(bug)}>Remove</button>
        </li>
    )
} 
*/

const BugItem = ({bug}) => {
    const dispatch = useDispatch();
    const onBugToggle = (bugToToggle) => {
        const toggleAction = toggle(bugToToggle)
        dispatch(toggleAction)
    }
    const onBugRemove = (bugToRemove) => {
        const removeAction = remove(bugToRemove);
        dispatch(removeAction)
    }
    return (
        <li>
            <span
                className={`bugname ${bug.isClosed ? 'closed' : ''}`}
                onClick={() => onBugToggle(bug)}
            >{bug.name}</span>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <button onClick={() => onBugRemove(bug)}>Remove</button>
        </li>
    )
}
export default BugItem;