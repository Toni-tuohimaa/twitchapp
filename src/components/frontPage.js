import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTop20streams, selectUser} from '../actions';
import {Link} from 'react-router-dom';
import '../style.css'

class FrontPage extends Component {
    state = { 
        width: "344",
        height: "193"   
    }

    componentDidMount() {
        this.props.getTop20streams();   
    }

    render() { 
       // console.log(this.props.streams)

        return this.props.streams.map(stream => {

            let thumbnail = stream.thumbnail_url.replace("{width}", this.state.width);
            thumbnail = thumbnail.replace("{height}", this.state.height);

            return (
                <div key={stream.id} className="block">
                <Link to="/user" onClick={() => this.handleClick(stream.user_name)}>
                    <img src={thumbnail} alt="#"></img>
                </Link><br/>
                <Link className="truncate" to="/user" onClick={() => this.handleClick(stream.user_name)}>
                    <p className="truncate"><span className="title">{stream.title}</span><br/>
                   {stream.user_name}, {stream.viewer_count} viewers</p>
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
        streams: state.top20streams,
        oAuth: state.oAuth
    }
}
 

export default connect(mapStateToProps, {getTop20streams, selectUser})(FrontPage);