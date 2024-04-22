import { useState } from "react";

export default function FavoriteGames(){
    const [games,setGames] = useState (["Domsday Hunter","Hades", "Slay the Spire", "ScrougerBringer"])
    function handleAddGame(){
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])
        document.getElementById("gameInput").value ="";
    }

    function handleRemoveGame(index){
        const deletedGame =games.filter((game,i) => i !== index);
        setGames(deletedGame)

    }
    return(
        <div>
            <h2>
                These are My Favorite Games in 2024:
            </h2>
            <ul>
            {
                    games.map((game,index) => <li key = {index} onClick={() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <input type = "text" name="gameInput" id="gameInput"/>
            <br/>
            <button type="button" onClick={handleAddGame}>Add Game</button>
        </div>
    )
}