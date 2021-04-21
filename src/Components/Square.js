import React from "react"


const Square = (props) => {
    const moveColor = props.value ? `squares ${props.value}` : `squares`
    return (
    <>   
        <button className = {moveColor}  id = {props.id} onClick = {() => props.handleOnChange(props.id)} >  {props.value}   </button>
    </>
    )
    }
export default Square