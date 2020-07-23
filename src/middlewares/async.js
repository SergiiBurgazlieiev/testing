export default ({ dispatch }) => next => action => {

    //Check if the action has a promise on its payload prop
    //If it doooes not, then send the action to the next middleware
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    //We want to wait for the promise too resolve
    //and then create a new action with data and dispatch it
    action.payload.then((response)=>{
        const newAction = { ...action, payload:response };
        dispatch(newAction);
    })
};