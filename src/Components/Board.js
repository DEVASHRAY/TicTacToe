import React from "react"
import Square from "./Square"



const Board = (props) => {
    
    return(
        <>
            <div className="board">
                {props.board.map( (value , index) => {
                   return <Square key={index} id={index} value={value} handleOnChange = {props.handleOnChange}/>
                })}
            </div>
            
        </>
    )
}    
    

export default Board