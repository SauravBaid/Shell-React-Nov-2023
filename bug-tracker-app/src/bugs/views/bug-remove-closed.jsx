import { removeClosed } from "../actions"
import { useDispatch } from "react-redux"

function BugRemoveClosed(){
    const dispatch = useDispatch()
    const onBtnRemoveClosedClick = () => {        
        dispatch(removeClosed())
    }
    return (
        <button onClick={onBtnRemoveClosedClick}>Remove Closed</button>
    )
}

export default BugRemoveClosed;