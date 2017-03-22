const action = (user)=>{
    console.log(user.name)
    return {
        type : "ADD",
        data : user
    }
}
export default action;