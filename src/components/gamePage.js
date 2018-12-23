import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSelectedGame, selectGameId} from '../actions'
import {Link} from 'react-router-dom'

class GamePage extends Component {
    state = { 
        width: "162",
        height: "216" 
     }    

     componentDidMount() {
        this.props.getSelectedGame(this.props.game)
    }  

    componentDidUpdate() {
        if (!this.props.game.data) {
            this.props.getSelectedGame(this.props.game)
        }
    }

    render() { 
        
        if (this.props.game) {

            if(this.props.game.data){
                let thumbnail = this.props.game.data[0].box_art_url.replace("{width}", this.state.width);
                thumbnail = thumbnail.replace("{height}", this.state.height);

                return ( <div className="block">
                    
                        <Link to="/streams" onClick={() => this.handleClick(this.props.game.data[0].id)}>
                        <img src={thumbnail} alt="#"/> 
                        </Link>
                        <Link to="/streams" onClick={() => this.handleClick(this.props.game.data[0].id)}>
                            <span>
                                <br/>{this.props.game.data[0].name}
                            </span>
                        </Link>
                </div> );
            }
            else {
                return (
                    <div>Loading</div>
                )
            }        
        }
        else {
            return (
                <div>Loading</div>
            )
        }
        
    }

    handleClick = (game_id) => {
        // console.log(gamename)
         this.props.selectGameId(game_id)
     }

}
 
const mapStateToProps = (state) => {
    return {
        game: state.selectedGame
    }
}

export default connect(mapStateToProps, {getSelectedGame, selectGameId})(GamePage);