import React from 'react'

export default function ServiceDetailPage({ params }) {
    const data = [
        {
            "_id": "player1",
            "players_name": "Lionel Messi",
            "players_img": "/messi.jpg",
            "players_description": "Lionel Messi is one of the greatest footballers ever. He is famous for his amazing dribbling, precise passing, excellent vision, and ability to score goals from difficult angles. Messi can easily move past defenders and create chances for his teammates. His specialty is controlling the ball closely, making him very hard to defend against. However, Messi's weakness is his height, making it tough for him to win headers or physical battles against taller defenders. Sometimes he struggles under heavy physical pressure from opponents."
        },
        {
            "_id": "player2",
            "players_name": "Cristiano Ronaldo",
            "players_img": "/cr7.jpg",
            "players_description": "Cristiano Ronaldo, also known as CR7, is a Portuguese footballer known for his incredible athleticism, powerful shooting, and goal-scoring ability. He is one of the most successful footballers of all time, with a career that spans over two decades. Ronaldo is famous for his speed, stamina, and ability to score goals from long distances. He is also known for his exceptional dribbling skills and his ability to score goals in crucial moments of the game."
        },
        {
            "_id": "player3",
            "players_name": "Neymar Jr.",
            "players_img": "/neymar.jpg",
            "players_description": "Neymar, also known as N7, is a Brazilian footballer famous for his agility, creative dribbling, and flair on the pitch. He is one of the most talented young players in the world, known for his ability to score goals and create chances for his teammates. Neymar is also known for his speed and his ability to score goals from long distances. He is also famous for his exceptional dribbling skills and his ability to score goals in crucial moments of the game."
        }
    ]
    const  id = params?.id;
    const player = data.find((d) => d._id === id);
  return (
    <div className='flex flex-col justify-center items-center h-screen h-max-[800px]'>
        <h1 className='text-6xl mb-10'><strong className='text-cyan-800'>Player Name:</strong> {player.players_name}</h1>
        <img src={player.players_img} alt={player.players_name} className='h-[300px] w-[300px] object-cover rounded-lg shadow-lg' />
        <p className='mt-5 text-2xl p-9'><strong className='text-cyan-800'>Player Description:</strong> {player.players_description}</p>
    </div>
  )
}
