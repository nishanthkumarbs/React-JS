import React from 'react'
import data from './UserData.json'

const Task3 = () => {
  return (
    <div id='Task3container'>{
        data.map((item)=>{
            return(
              <aside>
                <img src={item.avatar_url} alt="" />
                <h1>{item.login}</h1>
              </aside>
            )
        })
        }
    </div>
  )
}

export default Task3