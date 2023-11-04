import { useState } from "react";

export default function Player( {intialName, symbol , isActive, onChangeName}){
    const [Name, setName] = useState(intialName);
    const [isEditing, setIsEditing] =useState(false);


    const editHandler = () => {
        setIsEditing(editing => !editing);

        if(isEditing){
          onChangeName(symbol, Name);
        }
        
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }


    let  playerName= <span className="player-name">{Name}</span>;
    let btnCaption = 'Edit'
    if(isEditing) {
        playerName = <input type="text" required value={Name} onChange={handleChange}/>;
        btnCaption = 'Save'
    }
  return (
    <li className= {isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{btnCaption}</button>
    </li>
  );
}
