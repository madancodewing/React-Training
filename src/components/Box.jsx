function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#fff' : '#f1acbc',
        color: "#000"
    }
    return (
        <>
            <div className="box" style={styles} onClick={() => props.toggle(props.id)}>
                <h3>{props._name}</h3>
                <p>: {props.priority}</p>
                <p>: {props.color}</p>
                <button onClick={() => props.remove(props.id)}>Close</button>
            </div>
        </>
    )
}

export default Box