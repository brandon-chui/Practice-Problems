import React from 'react';
import './App.css';
import TodosList from './TodosList';
import TodoForm from './TodoForm';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodosList />
      </header>
    </div>
  );
}

export default App;
