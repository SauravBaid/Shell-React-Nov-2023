export function toggle(bugToToggle){
    const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed}
    const replace_bug_action = { type : 'BUGS_REPLACE', payload : toggledBug}
    
    return replace_bug_action
}