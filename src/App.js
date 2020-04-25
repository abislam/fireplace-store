import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Home />
      </div>    
    </Provider>

  );
}

export default App;
