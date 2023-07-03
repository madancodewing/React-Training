import { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        isOn: true,
        priority: "",
        favColor: ""
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.addBox(formData)
        console.log(event);
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.firstName}
                />
                <fieldset>
                    <legend>Priority Level</legend>
                    <input
                        type="radio"
                        id='top'
                        name="priority"
                        value="top"
                        onChange={handleChange}
                        checked={formData.priority === "top"}
                    />
                    <label htmlFor="top">Top</label>
                    <input
                        type="radio"
                        id='mid'
                        name="priority"
                        value="mid"
                        onChange={handleChange}
                        checked={formData.priority === "mid"}

                    />
                    <label htmlFor="mid">Mid</label>
                    <input
                        type="radio"
                        id="low"
                        checked={formData.priority === "low"}
                        value="low"
                        name="priority"
                        onChange={handleChange}
                    />
                    <label htmlFor="low">Low</label>
                </fieldset>
                <div className="flex">
                    <input
                        type="checkbox"
                        id="isOn"
                        checked={formData.isOn}
                        onChange={handleChange}
                        name="isOn"
                    />
                    <label htmlFor="isOn">This is ON ?</label>
                </div>
                <select
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    id="favColor"
                >
                    <option value="">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;