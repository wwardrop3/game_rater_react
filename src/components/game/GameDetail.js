import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getGame } from "./GameManager"


export const GameDetail = () => {
    const [currentGame, setCurrentGame] = useState({})
    const { gameId } = useParams()


    useEffect(
        () => {
            getGame(gameId)
            .then(
                (response) => {
                    setCurrentGame(response)
                }
            )
        },[]
    )

    return (
        <>
        <div className="page_content">
            <h1>{currentGame.title}</h1>

            <ul>
                <li>{currentGame.designer}</li>
                <li>{currentGame.year_released}</li>
                <li>{currentGame.number_of_players}</li>
                <li>{currentGame.estimated_time_to_play}</li>
                <li>{currentGame.age_recommendation}</li>
                <ul>
                    {currentGame.categories?.map(cat => {
                        return <li>{cat.name}</li>
                    })}
                </ul>
                
                
            </ul>


        </div>
        
        </>
    )

}