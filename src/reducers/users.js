

const users = (state = null, action) => {
    switch (action.type) {
        case "ADD":
            return action.data;
    }
    return state;
}
export default users;