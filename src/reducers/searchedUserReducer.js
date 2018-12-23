const searchedUserReducer = (searchedUser={data: []}, action) => {
    if (action.type === "GET_USER") {
       // console.log(action.payload)
        return action.payload;
    }
    return searchedUser;
}

export default searchedUserReducer;