const ChildTask2 = (props) => {



  return (
    <>
      < h1 > ChildTask2 Component</h1 >
      {
        props.bikesData.map((data) => {
          return (
            <div>

              <h2>Name: {data.bikeName}</h2>
              <img src={data.image} width={500} alt="" />
              <p> About: {data.discription}</p>
            </div>
          )
        })

      }
    </>
  )
}

export default ChildTask2