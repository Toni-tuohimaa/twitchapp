const searchedGameReducer = (searchedGame={data: []}, action) => {
    if (action.type === "SEARCH_GAME") {
        //console.log(action.payload)
        return action.payload;
    }
    return searchedGame;
}

export default searchedGameReducer;