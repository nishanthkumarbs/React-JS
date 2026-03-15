import React, { useState } from 'react'
import productData from "./productData.json"
console.log(productData)
const Task5 = () => {
  let [filterData, setFilterData] = useState(productData)
  let handleFilterData = (category) => {
    if (category === 'all') {
      setFilterData(productData)
    } else {
      setFilterData(productData.filter(f => f.category === category))
    }
  }

  return (
    <div>
      <aside>
        <button onClick={() => handleFilterData('all')}>All</button>
        <button onClick={() => handleFilterData("men's clothing")}>Mens</button>
        <button onClick={() => handleFilterData("women's clothing")}>Womens</button>
        <button onClick={() => handleFilterData("jewelery")}>Jewellary</button>
        <button onClick={() => handleFilterData("electronics")}>Electronics</button>
      </aside>

      <div>
        {
          filterData.map((product) => {
            console.log(product)
            return (
              <>
                <h1>{product.title}</h1>
                <img src={product.image} width={200} height={200} alt="" />
                <h3>Price: ${product.price}</h3>

              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default Task5
