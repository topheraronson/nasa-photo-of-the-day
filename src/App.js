import React from "react";
import "./App.css";

import SearchBar from './Components/SearchBar/SearchBar'
import PhotoContainer from './Components/PhotoContiner/PhotoContainer'

function App() {

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <PhotoContainer />
    </div>
  );
}

export default App;
