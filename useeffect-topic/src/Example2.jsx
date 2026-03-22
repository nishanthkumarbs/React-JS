import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Example2 = () => {
    let [user, setUser] = useState([])

    useEffect(() => {
        axios.get('https://developerapis.vercel.app/api/users')
            .then((res) => {
                let userData = res.data
                console.log(userData)
                setUser(userData)
                // userData.map((data) => {
                //     console.log(data)
                // })
            }, [])
    })
    return (
        <div>
            {
                user.map((items) => {
                    console.log(items)
                    return (
                        <>
                            <img src={items.profileImg} width={150} height={150} alt="" />
                            <h1>{items.name}</h1>
                            <p>{items.email}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Example2