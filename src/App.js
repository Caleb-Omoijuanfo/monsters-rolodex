import React, { Component } from 'react';
import './App.css';
import usersService from './services/usersService';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
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

  handleInputChange = (event) => {
    let input = event.target.value;
    this.setState(prev => (
      {
        ...prev,
        searchField: input
      }
    ))    
  }

  render () {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App"> 
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleInputChange={this.handleInputChange}
          searchField={searchField}
        />       
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
