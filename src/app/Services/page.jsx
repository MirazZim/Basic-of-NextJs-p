
import Link from "next/link"

export default function ServicesPage() {
    const data = [
        {
            "_id": "player1",
            "players_name": "Lionel Messi",
            "players_img": "/messi.jpg",
            "players_description": "An Argentine footballer famous for dribbling, goal-scoring, and playmaking skills."
        },
        {
            "_id": "player2",
            "players_name": "Cristiano Ronaldo",
            "players_img": "/cr7.jpg",
            "players_description": "A Portuguese footballer known for his incredible athleticism, powerful shooting, and goal-scoring ability."
        },
        {
            "_id": "player3",
            "players_name": "Neymar Jr.",
            "players_img": "/neymar.jpg",
            "players_description": "A Brazilian footballer famous for his agility, creative dribbling, and flair on the pitch."
        }
    ]

    return (
        <div className='h-screen h-max-[800px] '>
            <h1 className='text-6xl mb-10 mt-10 flex justify-center items-center'>Players</h1>
            <div className="flex gap-10 justify-evenly">
                {data.map((d) => {
                    return (
                        <div className='h-[300px] w-[300px] bg-gray-200 rounded-lg overflow-hidden'>
                            <Link href={`/Services/${d._id}`}>
                                <img src={d.players_img} alt={d.players_name} className='h-full w-full object-cover' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
