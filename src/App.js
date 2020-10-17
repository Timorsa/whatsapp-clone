import React from 'react';
import './App.css';

import Sidebar from './components/sidebar';
import Chat from './components/chat'

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
