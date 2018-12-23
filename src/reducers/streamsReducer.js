export default (streams = [], action) => {
    
    switch(action.type) {
        case 'GET_STREAMS':
            //console.log(action.payload.data);
            return action.payload.data;
        default:
            return streams;
    }
}
