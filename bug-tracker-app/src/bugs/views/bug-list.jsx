import { useSelector } from 'react-redux';
import BugItem from './bug-item';

const BugList = ({ removeClosed}) => {
    const bugs = useSelector(storeState => storeState.bugsStore.bugs)
    return (
        <section className="list">
            <ul>
                {bugs.map(bug => (
                    <BugItem key={bug.id} bug={bug} />
                ))}
            </ul>
        </section>
    )
}

export default BugList;