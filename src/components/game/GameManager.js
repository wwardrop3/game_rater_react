import { host } from "../.."


export const getGames = () => {
    return fetch(`${host}/games`,
    {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getGame = (gameId) => {
    return fetch(`${host}/games/${gameId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
    })
    .then(res => res.json())
}


export const createGame = (newGame) => {
    return fetch(`${host}/games`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newGame)
    })
}

export const getCategories = () => {
    return fetch(`${host}/categories`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
        
    })
    .then(res => res.json())
}