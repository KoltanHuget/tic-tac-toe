import './square.css'
import store from '../store'
import {observer} from 'mobx-react'

interface Props {
  coordinates: [number, number];
}

const Square: React.FC<Props> = ({coordinates})=> {
  const handleClick = () => {
    if (store.squares[coordinates[0]][coordinates[1]] || store.gameOver) return;
    store.squares[coordinates[0]][coordinates[1]] = store.turn;
    store.changeTurn();
  }
  return (
    <div className="square" onClick={handleClick}>
      {store.squares[coordinates[0]][coordinates[1]] && store.squares[coordinates[0]][coordinates[1]]}
    </div>
      )
}

export default observer(Square)