//! prpops Drilling

const GrandChild = (props) => {
    console.log(props)
    return (
        <>
            <h1>GrandChild</h1>
            <h1>{props.username}</h1>
            <h1>{props.address}</h1>
            <h1>{props.phone}</h1>
        </>
    )
}

export default GrandChild