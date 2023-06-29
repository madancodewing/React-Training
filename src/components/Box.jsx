function Box(props) {
    const styles = {
        backgroundColor: props.on ? '#fff' : '#f1acbc',
        color: "#000"
    }
    return (
        <>
            <div className="box" style={styles} onClick={() => props.toggle(props.id)}>
                {props._name}
            </div>
        </>
    )
}

export default Box