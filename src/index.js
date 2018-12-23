import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
            <Provider store={storeWithMiddleware}>
                <App />
            </Provider>
            , document.getElementById('root'));


