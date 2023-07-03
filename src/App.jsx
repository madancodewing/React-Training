import './App.css'
import boxes from './boxes'
import Box from './components/Box'
import { useState } from 'react';
import Form from './components/Form';
import FakeProducts from './components/FakeProducts';

function App() {

    const [squares, setSquares] = useState(boxes)

    function handleClick(boxId) {
        setSquares(prevOn => prevOn.map(box => box.id === boxId ? { ...box, on: !box.on } : { ...box }))
    }

    function removeBox(id) {
        setSquares(prevSquares => prevSquares.filter(prevSquare => prevSquare.id !== id))
        console.log(squares);
    }


    function addBox(data) {
        setSquares(prevBoxes => {
            console.log(squares);
            return [...prevBoxes, { id: prevBoxes.length + 1, on: data.isOn, _name: `${data.firstName}`, priority: data.priority, color: data.favColor }]
        })
    }


    let boxElements = squares.map((square, index) => {
        return (
            <li key={index}>
                <Box
                    key={square.id}
                    id={square.id}
                    on={square.on}
                    _name={square._name}
                    priority={square.priority}
                    color={square.color}
                    toggle={handleClick}
                    remove={removeBox}
                />
            </li>
        )
    })

    return (
        <>
            <Form
                addBox={addBox}
            />
            <div className="boxes">
                <ol>
                    {boxElements}
                </ol>
            </div>
            <FakeProducts />
        </>
    )
}

export default App