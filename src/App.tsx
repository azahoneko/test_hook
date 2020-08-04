import React from 'react';
import './App.css';
import TestedComponent from './components/TestedComponent';

function App() {
  return (
    <div className="App">
        <TestedComponent
            possibleValues={[1, 2, 3, 4, 5]}
            initialState={1}
        />
    </div>
  );
}

export default App;
