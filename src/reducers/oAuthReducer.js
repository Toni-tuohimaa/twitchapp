const oAuthReducer = (auth=null, action) => {
    if (action.type === "AUTHORIZE") {
        console.log(action.payload)
        return action.payload;
    }
    return auth;
}

export default oAuthReducer;