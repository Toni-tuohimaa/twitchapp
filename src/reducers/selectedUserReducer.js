const selectedUserReducer = (selectedUser=null, action) => {
    if (action.type === "SELECT_USER") {
        //console.log(action.payload)
        return action.payload;
    }
    return selectedUser;
}

export default selectedUserReducer;