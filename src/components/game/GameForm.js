import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { createGame, getCategories } from "./GameManager"


export const GameForm = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory()
    const {review, gameId} = useParams()
    const [checkedState, setCheckedState] = useState({})
    const [currentGame, setCurrentGame] = useState({
        "title": "",
        "description": "",
        "designer": "",
        "yearReleased": "",
        "numberOfPlayers": "",
        "estimatedTimeToPlay": "",
        "ageRecommendation": "",
        "categories": []

    })


    useEffect(
        () => {
            getCategories()
            .then(
                (response) => {
                    setCategories(response)
                }
            )
        },[]
    )

    useEffect(
        () => {
            let emptyObject = {}
            categories.map((cat) => {
                return emptyObject[cat.id]= false
            })
            setCheckedState(emptyObject)
        },[categories]
    )

    const handleChange = (event) => {
        
        let copy = {...currentGame}
        copy[`${event.target.name}`] = event.target.name === "category" ?  parseInt(event.target.value) : event.target.value
        setCurrentGame(copy)
    }

    const handleChecks = (catId) => {
        let copy = {...checkedState}
        copy[parseInt(catId)] = !copy[parseInt(catId)]

        setCheckedState(copy)
    }
    
    const transferChecks = () => {
        let copy = {...currentGame}
        for (const property in checkedState) {
            if(checkedState[property] === true){
                copy.categories.push(parseInt(property))
            } 
        
        setCurrentGame(copy)

    }
}


    return (
        <>
        
        <div className="category input">



        {categories.map(cat => {

            return ( 
                <>
                    <label htmlFor={`${cat.id}`}>{cat.name}</label>
                    <input type="checkbox" value={`${cat.id}`} name={`${cat.name}`}
                    
                    onChange={
                        () => {
                            handleChecks(cat.id)
                        }
                    }  />
                </>   
         
        )}
        )
            }

        </div>        
        




        <div>
            <button className="save_btn" 
            onClick= {
                () => {
                    transferChecks()
                    createGame(currentGame)
                    // history.push("/games")
                    }
                    
                
            }>Register Game

            </button>
        </div>

        </>
    )







}