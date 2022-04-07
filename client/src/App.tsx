import {useState} from 'react';
import Square from './Square/Square';
import './App.css';
import store from './store';
import {observer} from 'mobx-react';
function App() {
  
  return (
    <div className="App">
      <div className='heading'>Tic-tac-toe</div>
      <div className = {store.gameOver ? 'gameOver' : 'turn'}>{store.message}</div>
      <div className='board'>
        <div className='row'><Square coordinates={[0, 0]}/><Square  coordinates={[0, 1]}/><Square  coordinates={[0, 2]}/></div>
        <div className='row'><Square  coordinates={[1, 0]}/><Square  coordinates={[1, 1]}/><Square  coordinates={[1, 2]}/></div>
        <div className='row'><Square  coordinates={[2, 0]}/><Square  coordinates={[2, 1]}/><Square  coordinates={[2, 2]}/></div>
      </div>
      <button className='reset' onClick={()=>store.reset()}>Reset</button>
    </div>
  );
}

export default observer(App);
