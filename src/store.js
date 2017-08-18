function createStore(state, stateChanger){ //专门生产这种 state 和 dispatch 的集合
    const getState = () => state
    const dispatch = (action) => stateChanger(state, action)

    return {getState, dispatch}
}