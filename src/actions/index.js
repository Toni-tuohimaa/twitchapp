import axios from 'axios';

const BASE_URL = "https://api.twitch.tv/helix/";
const API_KEY = "bo09ir1cgwn5dzq6mbxtbrluewydjv"
//const secret = "ysh44lds88z2cphxay5ux0llpggfyx"

//const access_token = axios.post(`https://id.twitch.tv/oauth2/token?client_id=${API_KEY}&client_secret=${secret}&grant_type=client_credentials`);
const access_token = "oz3jxhsku3anv8g1i6vxulr2bghujj"

export const getTop20streams = () => async (dispatch) => {

    //console.log(access_token)

    const response = await axios.get(`${BASE_URL}streams?first=20`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "GETTOP20STREAMS",
        payload: response.data
    })
}

export const authorize = () => async (dispatch) => {
    const response = await axios.get(`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${API_KEY}&redirect_uri=http://localhost&scope=viewing_activity_read`)


    console.log(response)

    dispatch({
        type: "AUTHORIZE",
        payload: response.data
    })

}

export const getTop20games = () => async (dispatch) => {

    //console.log(access_token)

    const response = await axios.get(`${BASE_URL}games/top`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "GETTOP20GAMES",
        payload: response.data
    })
}

export const getSelectedGame = (gameName) => async (dispatch) => {

    //console.log(access_token)

    const response = await axios.get(`${BASE_URL}games?name=${gameName}`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "SELECT_GAME",
        payload: response.data
    })
}

export const getStreams = (game_id) => async (dispatch) => {

    //console.log(access_token)
    console.log("asd")
    console.log(game_id)

    const response = await axios.get(`${BASE_URL}streams?game_id=${game_id}`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "GET_STREAMS",
        payload: response.data
    })
}

export const selectUser = (username) => {
    return{
        type: "SELECT_USER",
        payload: username
    }
}

export const selectGame = (game) => {
    return{
        type: "SELECT_GAME",
        payload: game
    }
}

export const selectGameId = (game_id) => {
    return {
        type: "SELECT_GAME_ID",
        payload: game_id
    }
}

export const getSearchedUser = (username) => async (dispatch) => {

    const response = await axios.get(`${BASE_URL}streams?user_login=${username}`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "GET_USER",
        payload: response.data
    })
}

export const getSearchedGame = (gameName) => async (dispatch) => {

    //console.log(access_token)

    const response = await axios.get(`${BASE_URL}games?name=${gameName}`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token
        }
    });

    dispatch({
        type: "SEARCH_GAME",
        payload: response.data
    })
}

/* export const searchGames = (searchValue) => async (dispatch) => {

    const response = await axios.get(`${BASE_URL}search/games?query=${searchValue}`, {
        headers: {
            /* 'Authorization': `Bearer ${access_token.data.access_token}` */
            /* 'Client_ID' : API_KEY,
            'Authorization': 'Bearer ' + access_token */
     /*    }
    });

    dispatch({
        type: "SEARCH_GAMES",
        payload: response.data
    }) */
/* } */ 