export default (games = [], action) => {
    
    switch(action.type) {
        case 'GETTOP20GAMES':
            //console.log(action.payload.data);
            return action.payload.data;
        default:
            return games;
    }
}
