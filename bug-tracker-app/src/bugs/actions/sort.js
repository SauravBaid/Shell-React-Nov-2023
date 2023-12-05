export function sort(bugs, attrName, isDesc){
    let comparer = (b1, b2) => {
        if (b1[attrName] < b2[attrName]) return -1;
        if (b1[attrName] > b2[attrName]) return 1;
        return 0;
    }
    const getDescComparer = comparer => (b1, b2) => comparer(b1, b2) * -1;
    if (isDesc)
        comparer = getDescComparer(comparer);
    bugs.sort(comparer);
    return { 
        type : 'BUGS_SORT', 
        payload : {
            sortAttr : attrName,
            sortByDesc : isDesc,
            bugs : bugs
        }
    };
}