import userData from './UserData.json'
console.log(userData)

const Task8=()=>{

    let randomData = userData[Math.floor(Math.random()*userData.length)];
    console.log(randomData)
    return(
        <>
        <h1>{randomData.login}</h1>
        <img src={randomData.avatar_url} width={100} alt="" />
        </>
    )
}
export default Task8