export default (streams = [], action) => {
    
    switch(action.type) {
        case 'GETTOP20STREAMS':
            //console.log(action.payload.data);
            return action.payload.data;
        default:
            return streams;
    }
}
