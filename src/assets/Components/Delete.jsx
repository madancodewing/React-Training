import { useState } from "react";


const items = [
    {
        id: 1,
        title: "This is title 1",
        desc: "This is desc 1"
    },
    {
        id: 2,
        title: "This is title 2",
        desc: "This is desc 2"
    },
    {
        id: 3,
        title: "This is title 3",
        desc: "This is desc 3"
    },
    {
        id: 4,
        title: "This is title 3",
        desc: "This is desc 3"
    },
]

function Delete() {

    const [newitems, setItems] = useState(items)
    console.log(newitems)

    const removeItem = (id) => {
        const newItem = newitems.filter((newitems) => newitems.id !== id)
        setItems(newItem)

        console.log(newItem)
    }

    const addItem = (id) => {
        setItems(newitems)
    }

    let itemsELements = newitems.map(newItem => {
        return (
            <div key={newItem.id}>
                <span>{newItem.title}</span>
                <button onClick={() => removeItem(newItem.id)}>Delete</button>
            </div>
        )
    })

    return (
        <>
            <input type="text" name="" id="" />
            <button onClick={addItem}> Add</button>
            {itemsELements}
        </>

    )
}

export default Delete