import './App.css';
import { useReducer, useState } from 'react';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0})
  // const [number, setNumber] = useState(0)

  // const add = () => {
  //   setNumber(prev => prev + 1)
  // }

  // const subtract = () => {
  //   setNumber(prev => prev - 1)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <div className='counter'>

          <button type='button' onClick={() => dispatch({ type: 'add' })}>+</button>

          <p className='count'>{state.count}</p>

          <button type='button' onClick={() => dispatch({ type: 'subtract' })}>-</button>

        </div>
      </header>
    </div>
  );
}

export default App;