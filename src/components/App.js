import React from 'react';
import './App.css';

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"; 

class App extends React.Component {
  state = { videos: []};
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    }); 
    console.log(response);
    this.setState({videos: response.data.items});
  };
  render() {
    return (
      <div className="container mt-5">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        
      </div>
    );
  }
}

export default App;
