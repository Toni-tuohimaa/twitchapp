import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getSelectedGame, getStreams, selectUser } from '../actions';
import {Link} from 'react-router-dom'

class StreamsPage extends Component {
    state = { 
        width: "344",
        height: "193" 
     }

     constructor(props) {
         super(props)

         this.props.getStreams(this.props.game)
     }

      componentDidMount() {
        this.props.getStreams(this.props.game)
    }  

    componentDidUpdate(prevProps, prevState) {

        //console.log(this.props)
        //console.log(prevProps)

       if (this.props.game !== prevProps.game ) {
           //console.log("asdeeh")
           this.props.getStreams(this.props.game)
           return true;
       }
       return false;
            //this.props.getStreams(this.props.game)
            
        
    } 

    render() { 
        
        //console.log(this.props.game)
       // console.log(this.props.streams)

        return this.props.streams.map(stream => {

            let thumbnail = stream.thumbnail_url.replace("{width}", this.state.width);
            thumbnail = thumbnail.replace("{height}", this.state.height);

            return(

                <div key={stream.id} className="block">
                    <Link to="/user" onClick={() => this.handleClick(stream.user_name)}>
                        <img src={thumbnail} alt="#"/>
                    </Link>
                    <Link className="truncate" to="/user" onClick={() => this.handleClick(stream.user_name)}>
                    <p className="truncate"><span className="title">{stream.title}</span><br/>
                    {stream.user_name}, {stream.viewer_count} viewers
                    </p>
                    </Link>
                </div>
            )
        })
    }

    handleClick = (username) => {
        this.props.selectUser(username);  
    }

}

const mapStateToProps = (state) => {
    return {
        game: state.selectedGame,
        streams: state.streams
    }
}
 
export default connect(mapStateToProps, {getSelectedGame, getStreams, selectUser})(StreamsPage);