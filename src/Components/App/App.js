import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchResults: [
      {
        name: "Amerika's Most Wanted",
        artist: "2Pac",
        album: "Greatest Hits",
        id: 1,
      },
      {
        name: "Gin & Juice",
        artist: "Snoop",
        album: "Dog Pound",
        id: 2,
      }
    ]}
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
