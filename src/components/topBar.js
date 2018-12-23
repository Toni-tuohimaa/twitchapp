import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import _ from 'lodash';
import '../style.css'
import {
    Navbar, Nav, Input, Button,
    Popover, PopoverHeader, PopoverBody, Modal, ModalBody
} from 'reactstrap';
import {connect} from 'react-redux'
import {selectUser, selectGame, getSelectedGame, getSearchedUser, getSearchedGame, getStreams, authorize} from '../actions'

class TopBar extends Component {

    /* state = {
        searchGameValue: "",
        searchUserValue: "",
        isOpen: false,
        modal: false
    }
 */
     constructor(props) {
        super(props);

        console.log(this.props.oAuth)
    
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isOpen: false,
            searchGameValue: "",
            searchUserValue: "",
            modal: false
          };

          this.handleGameSearch = _.debounce(this.handleGameSearch, 300);
          this.handleUserSearch = _.debounce(this.handleUserSearch, 300);
      } 

      toggle() {
        this.setState({
            isOpen: !this.state.isOpen
          });
        }

        toggleModal() {

            console.log(this.state)

            if (!this.state.modal) {
                this.props.authorize();
                console.log(this.props)
                console.log(document.location)

                /* var myWindow = window.open("", "MsgWindow", "width=200,height=100");
                myWindow.document.write(this.props.oAuth); */

            }

            this.setState({
                modal: !this.state.modal
                });
            }

    render() {

        return (
          <div className="navbar">
                <Navbar color="inverse" light expand="md">
                    <Link to="/"><svg className="logo" overflow="visible" width="30px" height="30px" version="1.1" viewBox="0 0 30 30" x="0px" y="0px"><g><path d="M4,7 L5.56799,3 L27,3 L27,18 L21,24 L16,24 L12.88599,27 L9,27 L9,24 L4,24 L4,7 Z M21,20 L25,16 L25,5 L8,5 L8,20 L12,20 L12,23 L15,20 L21,20 Z"></path><g><polygon points="21 9 19 9 19 15 21 15"></polygon><polygon points="16 9 14 9 14 15 16 15"></polygon></g></g></svg></Link>
                    &nbsp;&nbsp;
                    <Link className="link" to="/topgames">Top 20 games</Link>&nbsp;&nbsp;
                    <Nav>
                        <Input autoComplete="off" type="text" onClick={this.toggle} onChange={this.onSearchGameChange} name="search" id="gameSearch" placeholder="search" />

                         <Popover className="popover" placement="bottom" isOpen={this.state.isOpen} target="gameSearch" toggle={this.toggle}>
                            <PopoverHeader>Games</PopoverHeader>
                          {this.props.searchedGame.data.length > 0 ?  
                               <Link to="/streams" onClick={() => this.props.selectGame(this.props.searchedGame.data[0].id)}> <PopoverBody>{this.props.searchedGame.data[0].name}</PopoverBody></Link> : 
                                <PopoverBody>No games found</PopoverBody>}                         
                            <PopoverHeader>Users</PopoverHeader>
                            {this.props.searchedUser.data.length > 0 ? <Link to="/user" onClick={() => this.props.selectUser(this.props.searchedUser.data[0].user_name)}><PopoverBody>{this.props.searchedUser.data[0].user_name}</PopoverBody></Link> :
                                <PopoverBody>No live users found</PopoverBody>
                            }     
                        </Popover>
                    </Nav>
                   </Navbar> 
                    <Button className="login" onClick={this.toggleModal}>Log in</Button> 
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                        <ModalBody>
                           asd 
                           {/*  {this.props.oAuth ? this.props.oAuth : ""} */ }
                        </ModalBody>
                    </Modal>
            <hr/>
        </div>  
        )
    }

    /* loginAuth = () => {
        this.toggleModal();
        console.log("asd")
        this.props.authorize();
        console.log(window.location.hash)
        console.log(this.props.oAuth)
    } */

    onSearchGameChange = (event) => {

        let value = event.target.value;

        this.setState({
            searchGameValue: value,
            searchUserValue: value,
            isOpen: true 
        })

       this.handleGameSearch();
       this.handleUserSearch();



    }

    handleGameSearch = () => {

        this.props.getSearchedGame(this.state.searchGameValue)
         
    }

    handleUserSearch = () => {

        this.props.getSearchedUser(this.state.searchUserValue)
        console.log(this.props.searchedUser)
        
    }
        
        
    }

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
        selectedGame: state.selectedGame,
        searchedGame: state.searchedGame,
        searchedUser: state.searchedUser,
        oAuth: state.oAuth
    }
}


export default connect(mapStateToProps, {selectUser, selectGame, getSelectedGame, getSearchedUser, getSearchedGame, getStreams, authorize})(TopBar);