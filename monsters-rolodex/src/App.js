import React, {Component} from 'react';
import { CardList } from './components/cards-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
 
class App extends Component{

  constructor(){
    super();

    this.state = 
      {
        monsters:[],
        SearchField: ''
      };
  }

  componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({monsters: users }));
    }
render(){
  const monsters = this.state.monsters;
  const SearchField = this.state.SearchField;
  const filteredMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(SearchField.toLowerCase())
     );
   return(
      <div className= 'App'>
        <h1>Monsters Rolodex</h1>

        <SearchBox
        placeholder='Search Monsters'
          handleChan ge={e => this.setState({SearchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}/> 
      </div>
  ); 
} 
}

export default App;
