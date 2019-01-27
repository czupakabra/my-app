function counterReducer(state = { counter: 0 }, action) {
    console.log("Jestem reducerem działam, jestem ZAJEBISTY")
    console.log( state);
    console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

export default counterReducer;