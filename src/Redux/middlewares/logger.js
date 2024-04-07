const logger = store => next => action => {
    // console.log(store, next, action);

    // console.log('action ', action.type);
    // console.log('prev state: ', store.getState());

    // console.log('action ', action);

    /* update the current state */
    next(action)

    // console.log('next state ', store.getState());

}

export default logger