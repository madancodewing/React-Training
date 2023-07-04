import { useState } from "react";

const items = [
    {
        id: 1,
        title: "This is title 1",
        desc: "This is desc 1"
    },

]

function Delete() {
    const [newitems, setItems] = useState(items)

    const removeItem = (id) => {
        const updatedItems = newitems.filter((item) => item.id !== id)
        setItems(updatedItems)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value
        const desc = event.target.desc.value

        const newItem = {
            id: newitems.length + 1,
            title: title,
            desc: desc,

        };

        const updatedItems = [...newitems, newItem];
        setItems(updatedItems);
        event.target.title.value = "";
        event.target.desc.value = "";
    };

    let itemsELements = newitems.map(newItem => {
        return (
            <div className="box" key={newItem.id}>
                <span>{newItem.title}</span>
                <span>{newItem.desc}</span>
                <button onClick={() => removeItem(newItem.id)}>Delete</button>
            </div>
        )
    })

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input id="title" name="title" type="text" placeholder=" new title" />
                <input id="desc" name="desc" type="text" placeholder=" new description" />
                <button type="submit" > Add</button>
            </form>
            {itemsELements}

        </>

    )
}

export default Delete

