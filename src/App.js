import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import Loading from './components/Loading/Loading';
import Fallback from './Fallback';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => (response.ok ? response.json() : Fallback.monsters))
      .then(users => this.setState({ monsters: users, loading: false }));
  }

  handleSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>

        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <SearchBox
              placeholder='Search monsters'
              handleChange={this.handleSearchChange}
            />

            <CardList monsters={filteredMonsters} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
