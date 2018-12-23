import {combineReducers} from 'redux';
import top20gamesReducer from './top20gamesReducer';
import top20streamsReducer from './top20streamsReducer';
import selectedUserReducer from './selectedUserReducer';
import selectedGameReducer from './selectedGameReducer';
import streamsReducer from './streamsReducer'
import searchedUserReducer from './searchedUserReducer'
import searchedGameReducer from './searchedGameReducer'
import oAuthReducer from './oAuthReducer'

export default combineReducers({
    top20games: top20gamesReducer,
    top20streams: top20streamsReducer,
    selectedUser: selectedUserReducer,
    selectedGame: selectedGameReducer,
    streams: streamsReducer,
    searchedUser: searchedUserReducer,
    searchedGame: searchedGameReducer,
    oAuth: oAuthReducer
})