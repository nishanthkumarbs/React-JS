const Task3 = ()=>{
    let Avengers = [
        {
            id:1,
            name:"Iron Man",
            image:"https://wallpapers.com/images/featured/iron-man-superhero-ponky3hlfivddo2m.jpg",
            discrption:"When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world."
        },
        {
            id:2,
            name:"Captain America",
            image:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg",
            discrption:"Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940, by Timely Comics, a corporate predecessor to Marvel."
        },
        {
            id:3,
            name:"Thor",
            image:"https://www.heyuguys.com/images/2013/10/2013_thor_the_dark_world-widescreen_wallpapers.jpg",
            discrption:"Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D."
        },
        {
            id:4,
            name:"Hulk",
            image:"https://cdn.wallpapersafari.com/63/23/zJeQa6.jpg",
            discrption:"The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk"
        },
        {
            id:5,
            name:"Spider-Man",
            image:"https://variety.com/wp-content/uploads/2015/02/spidey.jpg?w=1000&h=667&crop=1",
            discrption:"Spider-Man is a popular superhero from Marvel Comics, famously known as Peter Parker, a brilliant but ordinary teenager who gains spider-like abilities (wall-crawling, super strength, agility, ) after being bitten by a radioactive spider, leading him to fight crime with great responsibility after his Uncle Ben's death, battling villains like the Green Goblin"
        }
    ]

    return(
        <section>
            {
                Avengers.map((character)=>{
                    console.log(character)
                    return(
                        <>
                        <h1>{character.name}</h1>
                        <img src={character.image} width={500} alt="" />
                        <p>{character.discrption}</p>
                        </>
                    )
                })
            }
        </section>
    )
}
export default Task3