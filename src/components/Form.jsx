import { useState } from 'react'

function Form(props) {
    const [formData, setFormData] = useState({
        firstName: '',
        // lastName: '',
        // email: '',
        // comment: ''
    });

    function handleChange(event) {
        setFormData(prevFormData => {
            return { ...prevFormData, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.addBox(formData)
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
                {/* <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}

                />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <textarea
                    name="comment"
                    placeholder='Comment'
                    onChange={handleChange}
                    value={formData.comment}
                /> */}
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;