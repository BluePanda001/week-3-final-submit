const initState={
    projects:[
        {id:'1',title:'help me find blue', content:'lalalala'},
        {id:'2',title:'help me find green', content:'lala'},
        {id:'3',title:'help me find pink', content:'la'}
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type){
        case'CREATE_PROJECT':
            console.log('created-project', action.project)
    }
    return state
}
export default projectReducer