import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        // {id:"m1",name: "Franky"},
        // {id:"m2",name: "Dracky"},
        // {id:"m3",name: "Zomby"},
      ],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // .then(users => console.log(users))
      .then(users => this.setState({ monsters: users }));
  }

  // Set function during startup
  // handleChange = e => {
  //   this.setState({ searchField: e.target.value });
  // }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder = "search monsters"
          handleChange = { e => this.setState({ searchField: e.target.value }) }
        ></SearchBox>
        <CardList monsters={filteredMonsters} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Baby!" })}>Change Text</button>
        </header> */}
        {/* {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        } */}
      </div>
    );
  }
}

export default App;
