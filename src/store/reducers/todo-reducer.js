export const todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, state = action.user];
        default:
    }
    return state;
}