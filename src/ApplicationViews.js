import { Route } from "react-router-dom"
import { GameDetail } from "./components/game/GameDetail"
import { GameForm } from "./components/game/GameForm"
import { GameList } from "./components/game/GameList"


export const ApplicationViews = () => {

    return (
        <>
            <Route exact path = "/games">
                <GameList />
            </Route>

            <Route exact path = "/games/:gameId(\d+)">
                <GameDetail />
            </Route>


            <Route exact path = "/games/new">
                <GameForm />
            </Route>

            <Route exact path = "/games/:gameId(\d+)/review">
                <GameDetail />
            </Route>
        </>
    )
    
}