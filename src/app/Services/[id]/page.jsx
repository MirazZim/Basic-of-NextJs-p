import React from 'react'

export default function ServiceDetailPage({ params }) {
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
    const  id = params.id;
    const player = data.find((d) => d._id === id);
  return (
    <div className='flex flex-col justify-center items-center h-screen h-max-[800px]'>
        <h1 className='text-6xl mb-10'>{player.players_name}</h1>
        <img src={player.players_img} alt={player.players_name} className='h-[300px] w-[300px] object-cover rounded-lg shadow-lg' />
        <p className='mt-5 text-2xl'>{player.players_description}</p>
    </div>
  )
}
