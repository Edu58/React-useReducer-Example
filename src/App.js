import './App.css';
import { useReducer, useState } from 'react';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0, input: ''})
  // const [number, setNumber] = useState(0)

  // const add = () => {
  //   setNumber(prev => prev + 1)
  // }

  // const subtract = () => {
  //   setNumber(prev => prev - 1)
  // }


  // To reduce chances of mispelling the action type and encoutering errors
  // Can be defined in a separate file
  const ACTION = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    ADDINPUT: 'addInput'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='counter'>

          <div style={{marginBottom:'2rem'}}>
            <input type='text' placeholder='enter any text' onChange={(e) => dispatch({type: ACTION.ADDINPUT, payload: e.target.value})}></input>
          </div>

          <p>{state.input}</p>

          <button type='button' onClick={() => dispatch({ type: ACTION.ADD })}>+</button>

          <p className='count'>{state.count}</p>

          <button type='button' onClick={() => dispatch({ type: ACTION.SUBTRACT })}>-</button>

        </div>
      </header>
    </div>
  );
}

export default App;
