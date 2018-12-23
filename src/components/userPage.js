import React, { Component } from 'react';
import {connect} from 'react-redux'




class UserPage extends Component {
    state = {  }

     videoPlayer() {
    new window.Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: this.props.user
  })
    } 

    componentDidMount() {
        this.videoPlayer();
    }

    componentDidUpdate(){
        this.videoPlayer();
    }

    /* embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
 */


    render() { 
        //this.videoPlayer();
        console.log(this.props.user)
        return ( 
            
            <div id="twitch-embed"></div>

         );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser
    }
}
export default connect(mapStateToProps)(UserPage);
