import React, { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import { getData } from './utils/data.utils';
import './App.css'; 

export type Monster = {
    id: string,
    name:string,
    email: string
}
  

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
      const fetchUsers = async () => {
          const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
          setMonsters(users);
      };

      fetchUsers();
  }, []);
  
  useEffect(() => {
      const newFilteredMonsters = monsters.filter(monster => {
          return monster.name.toLocaleLowerCase().includes(searchField);
      });

      setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event : ChangeEvent<HTMLInputElement>) : void  => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
  };

  return (
      <div className="App">
          <div className='app-title'>Monsters Rolodex</div>
          <SearchBox 
              className='monsters-search-box'
              placeholder='search monsters'
              onChangeHandler={onSearchChange}
          />
          <CardList monsters={filteredMonsters} />
      </div>
  );
};

export default App;