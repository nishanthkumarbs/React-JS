import ChildTask2 from './ChildTask2'

const ParentTask2 = () => {
    let bikesData = [
        {
            id: 1,
            bikeName: "Kawasaki Ninja ZX-10R",
            image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard1757579629039.jpg?q=80",
            discription: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines an ultra-narrow chassis, low weight, and radial brakes."
        },
        {
            id: 2,
            bikeName: "KTM Duke 390",
            image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/148323/390-duke-2024-right-front-three-quarter-5.jpeg?isig=0",
            discription: "The KTM 390 Series are a range of single-cylinder engine motorcycles assembled by Bajaj Auto, and KTM Asia Motorcycle Manufacturing, Inc. (KAMMI) for the Austrian manufacturer KTM. There are currently six bike models which were developed under a joint program of Bajaj and KTM engineers, in which the concept was developed in Austria, while everything else, including design and final product development, was done in India by Bajaj."
        },
        {
            id: 3,
            bikeName: "Yamaha YZF-R15",
            image: "https://imgd.aeplcdn.com/1056x594/n/92hvehb_1868379.jpg?q=80",
            discription: "Yamaha R15 V4 in the signature Racing Blue color scheme. As of early 2026, this variant remains one of the most popular in the R15 lineup due to its track-inspired aesthetics and advanced tech features."
        },
        {
            id: 4,
            bikeName: "Triumph Tiger Explorer",
            image: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/triumph-tiger-1200-white-1526034408647.jpg?20190103151915&q=80",
            discription: "The Triumph Tiger Explorer (marketed as Triumph Tiger 1200 since November 2017) is a dual-sport motorcycle that was announced by British company Triumph Motorcycles at the EICMA show in November 2011. There are currently two model series available; the Tiger 1200 GT and Tiger 1200 Rally."
        },
        {
            id: 5,
            bikeName: "Ducati Panigale V4",
            image: "https://images.livemint.com/img/2022/09/01/original/Panigale-V4-MY22-Model-Preview-1050x650-v06_1662049710953.png",
            discription: "The Ducati Panigale V4 is a sport bike with a 1,103 cc (67.3 cu in) desmodromic 90° V4 engine introduced by Ducati in 2018 as the successor to the V-twin engined 1299. A smaller engine displacement version complies with the Superbike category competition regulations which state Over 750 cc up to 1000 cc for three and four cylinder 4-stroke engines."
        }

    ]

    return (
        <>
            <h1>ParentTask2 component</h1>
            <hr />
            <ChildTask2 bikesData={bikesData}/>
        </>
    )
}
export default ParentTask2