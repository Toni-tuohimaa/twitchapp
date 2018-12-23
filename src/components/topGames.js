import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTop20games, selectGame} from '../actions'
import {Link} from 'react-router-dom'
import '../style.css'

class TopGames extends Component {
    state = { 
        width: "162",
        height: "216"   
     }

    componentDidMount() {
        this.props.getTop20games();
    }

    render() { 
        
        //console.log(this.props.games)

        return this.props.games.map(game => {

            let thumbnail = game.box_art_url.replace("{width}", this.state.width);
            thumbnail = thumbnail.replace("{height}", this.state.height);

            return(

                <div key={game.id} className="block">
                    <Link to="/streams" onClick={() => this.handleClick(game.id)}>
                        <img src={thumbnail} alt="#"/>
                    </Link>
                    <Link className="truncate-game" to="/streams" onClick={() => this.handleClick(game.id)}>
                        <p className="truncate-game">{game.name}<br/>
                            
                        </p>
                    </Link>
                </div>
            )
        })

    }

    handleClick = (gamename) => {
       // console.log(gamename)
        this.props.selectGame(gamename)
    }

}

const mapStateToProps = (state) => {
    return {
        games: state.top20games
    }
}
 
export default connect(mapStateToProps, {getTop20games, selectGame})(TopGames); 