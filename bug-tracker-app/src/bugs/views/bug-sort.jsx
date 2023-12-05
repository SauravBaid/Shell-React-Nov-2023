
const BugSort = ({bugs, sort, sortAttr, sortByDesc}) => {
    
    const onSortAttrChange = ({target}) => {
        sort(bugs, target.value, sortByDesc)
    }

    const onSortDescChange = ({target}) => {
        sort(bugs, sortAttr, target.checked);
    }

    return (
        <section className="sort">
            <label htmlFor="">Order By :</label>
            <select defaultValue={sortAttr} onChange={onSortAttrChange}>
                <option value="">--- Select ---</option>
                <option value="id" >Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label htmlFor="">Descending ?:</label>
            <input type="checkbox" checked={sortByDesc} onChange={onSortDescChange} />
        </section>
        
    )
}
export default BugSort;
