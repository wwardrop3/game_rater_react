import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { GameDetail } from "./GameDetail"
import { getGames } from "./GameManager"


export const GameList = () => {
    const [games, setGames] = useState([])
    const history = useHistory()


    useEffect(
        () => {
            getGames()
            .then(
                (response) => {
                    setGames(response)
                }
            )
        },[]
    )

    return(
        <>
        {games.map(game => {
            return <Link to= {`/games/${game.id}`}><li>{game.title}, {game.description}</li></Link>
        })}

        </>
    )
}