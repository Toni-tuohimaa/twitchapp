const selectedGameReducer = (selectedGame={data: []}, action) => {
    if (action.type === "SELECT_GAME") {
        //console.log(action.payload)
        return action.payload;
    }
    else if (action.type === "SELECT_GAME_ID") {
        return action.payload;
    }
    return selectedGame;
}

export default selectedGameReducer;