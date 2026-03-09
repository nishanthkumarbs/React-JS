const Task4 = ()=>{
    let shoes = [
        {
            id:1,
            shoesName:"Red Tape Men's Casual Everyday Style Sneakers",
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuQEn3YgizfdH95kN07bg-7_B5LlmkHoa6zK7tX0qXeuzjvl07KkKjC2q-rf6I55lyDnZD2pUVunBN7W7K7dSpKOZih6Rr6BLlWU_s2C47Xc0z4nC_WONnqGA",
            price:"₹1,728"
        },
        {
            id:2,
            shoesName:"Nike Men's Court Vision Low Next Nature Shoes",
            image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpw7uklWQJda4KdKJknHTDly_BE_XfypH8AAtRjxYQ6_sdGP8arLIbqQAWZ2a7PV5bjn4ioQ_b80J5wtivguVOJkAHMUUJddoVKv3a9wFufBGBDjgnoB1E4_U",
            price:"₹4,995"
        },
        {
            id:3,
            shoesName:"Adidas Men's Step-n-pace M Running Shoes",
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCcyvENoHY6nhkn4mud8kJSNroeY9dbdD1ZtIOio4cpUnxPyIBQOqo7WWaLqwXGiaadAPbWGPXGdM_uo88k-EawPZmHk0b",
            price:"₹2,650"
        },
        {
            id:4,
            shoesName:"Campus Avenue Men's Sneakers",
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvdsrddFF2iLTPl1Ljg4mUtL9uwWXHmPeP54qXcXqyKWCAlaZSC6fzl4ACSwL3Rdj0l83U6zXjdhBrtLxigYWKqTTZEm4a",
            price:"₹1,429"
        },
        {
            id:5,
            shoesName:"Puma Men's Armour V2 Sneakers",
            image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIOm1YsV_tBPw9VZI1BWENXjveII9y-hHTnXBVS4X7rgffdGzYiBdBxydBXtzBViogBdZPtqLRs8hsTnlwUca0NJrRlYGuKLx1_ui5IwOKPxFreVNhqhKCHK0",
            price:"₹2,199"
        }
    ]

    let randomData = shoes[Math.floor(Math.random()*shoes.length)];
    console.log(randomData)
    return(
        <>
        <h1>{randomData.shoesName}</h1>
        <img src={randomData.image} width={500} alt="" />
        <h3>Price: {randomData.price}</h3>
        </>
        
    )
}
export default Task4