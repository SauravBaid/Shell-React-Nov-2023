export function removeClosed(bugs){
    const openBugs = bugs.filter(bug => !bug.isClosed)
    const init_bug_action = { type : 'BUGS_INIT', payload : openBugs}
    
    return init_bug_action;
}