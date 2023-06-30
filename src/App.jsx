import './App.css'
import boxes from './boxes'
import Box from './components/Box'
import { useState } from 'react';
import Form from './components/Form';

function App() {

    const [squares, setSquares] = useState(boxes)

    function handleClick(boxId) {
        setSquares(prevOn => prevOn.map(box => box.id === boxId ? { ...box, on: !box.on } : { ...box }))
    }

    // function addBox() {
    //     setSquares(prevBoxes => {
    //         console.log(squares);
    //         return [...prevBoxes, {id: prevBoxes.length + 1, on: true, _name: `box ${prevBoxes.length + 1}`}]
    //     })
    // }

    function addBox(data) {
        setSquares(prevBoxes => {
            console.log(squares);
            return [...prevBoxes, {id: prevBoxes.length + 1, on: true, _name: `${data.firstName}`}]
        })
    }


    let boxElements = squares.map(square => {
        return (
            <Box
                key={square.id}
                id={square.id}
                on={square.on}
                _name={square._name}
                toggle={handleClick}
            />
        )
    })

    return (
        <>
            <Form 
                addBox={addBox}
            />
            {/* <button onClick={addBox}>Add Box</button> */}
            <div className="boxes">
                {boxElements}
            </div>
        </>
    )
}

export default App