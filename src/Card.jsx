function Card(props) {

    const { name, job, isEmployed } = props;

    return (
        <>
            {name === '' ? <h1 className={name === "" ? "danger" : "success"}>No name found</h1> : <h1 className={name === "" ? "danger" : "success"}>Name: {name}</h1>}
            <p className="job">Job: {job}</p>
            <h2 className="years">{props.currentYear - props.startYear}</h2>
            {isEmployed === true ? <h3>Yes</h3> : <h3>No</h3>}
        </>
    )
}

export default Card;