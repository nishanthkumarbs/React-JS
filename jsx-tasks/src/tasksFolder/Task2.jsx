const Task2 = ()=>{
    let carsData = [
        {
            id:1,
            carName:" Lamborghini ",
            image:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/0_facelift_2025/homepage/models/revuelto/familyChooser-Revuelto_0.png",
            dicription:"Lamborghini names its cars primarily after famous Spanish fighting bulls or terms related to bullfighting, a tradition started by founder Ferruccio Lamborghini's admiration for the animals, though some, like Countach (Italian exclamation) or Urus (ancestral cattle), have different origins, reflecting power, rarity, or local flair"
        },
        {
            id:2,
            carName:"Ferrari",
            image:"https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6876585/150028_car.jpg?quality=90&strip=all&crop=0%2C4.7889098928797%2C100%2C90.422180214241&w=2400",
            dicription:"Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947."
        },
        {
            id:3,
            carName:"BMW",
            image:"https://imgd.aeplcdn.com/1056x594/n/rd5iceb_1758023.jpg?q=80",
            dicription:"Bayerische Motoren Werke Aktiengesellschaft (BMW AG),[4] trading as BMW Group (commonly abbreviated to BMW (German pronunciation: , sometimes anglicised as Bavarian Motor Works), is a German multinational conglomerate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Germany. The moniker,  first came into use when the German firm Rapp Motorenwerke changed its name to Bayerische Motoren Werke GmbH (BMW GmbH) in 1917."
        },
        {
            id:4,
            carName:"Audi",
            image:"https://imgd.aeplcdn.com/664x374/n/cw/ec/48342/rs7-sportback-exterior-right-front-three-quarter-3.jpeg?q=80",
            dicription:"a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. A wholly owned subsidiary of the Volkswagen Group."
        }
       
    ]
    let randomData = carsData[Math.floor(Math.random()*carsData.length)];
    console.log(randomData)
    return(
        <>
        <h1>{randomData.carName}</h1>
        <img src={randomData.image} width={500} alt="" />
        <p>{randomData.dicription}</p>
        </>
    )
}
export default Task2