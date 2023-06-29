import './App.css'
import boxes from './boxes'
import Box from './components/Box'
import {useState} from 'react';

function App() {

    const [squares, setSquares] = useState(boxes)

    function handleClick(boxId) {
        setSquares(prevOn => prevOn.map(box => box.id === boxId ? {...box, on: !box.on} : {...box}))
    }

    let boxElements = squares.map(square => {
        return (
            <Box
                key={square.id}
                id={square.id}
                on={square.on}
                _name={square._name}
                toggle = {handleClick}
            />
        )
    })

    return (
        <div className="boxes">
            {boxElements}
        </div>
    )
}

export default App