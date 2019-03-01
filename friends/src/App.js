import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendslist';
import Form from './components/form';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      error: '',
      activeFriend: null
    };
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateFriend = (e, friend) => {
    this.setState({
      activeFriend: friend
    });
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
  render() {
    return (
      <div className="App">
        <Form addFriend={this.addFriend} 
        activeFriend={this.state.activeFriend} 
        updateFriend={this.updateFriend}/>
        <FriendsList friends={this.state.friends} 
        setUpdateFriend={this.setUpdateFriend} />
      </div>
    );
  }
}

export default App;
