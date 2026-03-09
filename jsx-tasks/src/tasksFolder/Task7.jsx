import userData from './UserData.json'
console.log(userData)

const Task7 = ()=>{

    return(
        <section>
            {
                userData.map((users)=>{
                    return(
                        <>
                        <h1>{users.login}</h1>
                        <img src={users.avatar_url} width={500} alt="" />

                        </>
                    )
                })
            }
        </section>
    )
}
export default Task7