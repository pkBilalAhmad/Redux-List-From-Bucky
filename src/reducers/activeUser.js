export default function(state = null, action){
    switch(action.type){
        case "SELECT_USER":
        return action.user
        break;
    }
    return state;
}
// export default function (state = null, action) {
//     switch (action.type) {
//         case "SELECT_USER":
//             return action.user;
//             break;
//     }
//     return state;
// }
