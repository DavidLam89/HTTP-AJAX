import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendslist';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    };
  }

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
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
