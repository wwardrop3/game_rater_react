import React from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="games-link" to="/games">Game List</Link>
            </li>
            <li className="navbar__item">
                <Link className="events-list" to = "/events">TBD</Link>
            </li>
            <li className="navbar__item">
            <Link className="game-form" to = "/newgame">TBD</Link>

           

            </li>
            <li className="navbar__item">
                <button
                    onClick= {
                        (evt) => {
                            history.push("/games/new")
                        }
                    }>Create New Game</button>

            </li>
        
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/login" })
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
