export const todoAction = (user) =>{
    console.log(user)
    return {
        type : "ADD_TODO",
        user
    }
}