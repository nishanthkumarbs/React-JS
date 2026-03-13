const ChildTask1 = (props) => {
  return (
    <>
      <h1>ChildTask1 Component</h1>
      <h2>Name: {props.randomData.bikeName}</h2>
      <img src={props.randomData.image} width={500} alt="" />
      <p> About: {props.randomData.discription}</p>
    </>
  )
}

export default ChildTask1