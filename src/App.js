import React, { Component } from 'react';
import TopBar from './components/topBar';
import TopGames from './components/topGames'
import FrontPage from './components/frontPage'
import UserPage from './components/userPage';
import GamePage from './components/gamePage'
import {BrowserRouter, Route} from 'react-router-dom';
import StreamsPage from './components/streamsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar/>
          <Route exact path="/topgames" component={TopGames}/>
          <Route exact path="/user" component={UserPage}/>
          <Route exact path="/game" component={GamePage}/>
          <Route exact path="/" component={FrontPage}/>
          <Route exact path="/streams" component={StreamsPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
