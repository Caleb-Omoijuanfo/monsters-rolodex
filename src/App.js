import React, { Component } from 'react';
import './App.css';
import usersService from './services/usersService';
import CardList from './components/card-list/card-list';

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount () {
    const getUsers = async () => {
      try {
        let response = await usersService.getUsers()
        response = response.data;

        this.setState({monsters: response})
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  }

  render () {
    const { monsters } = this.state
    return (
      <div className="App">
        <CardList
          monsters={monsters}
        />
      </div>
    );
  }
}

export default App;
