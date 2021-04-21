import React, { useState } from "react"
// import Board from "./Board"
import CalculateWinner from "./Winner"
import Square from "./Square"


const styles = {
    width: '200px',
    margin: '20px auto',
};
const styles1 = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Game = () => {

   /**  const [board , setBoard] = useState(Array(9).fill(null))
    const [isXNext , setIsXNext] = useState(true);
    const [stepNo , setStepNo] = useState(0)
    const winner = CalculateWinner(board) **/

    //First Way of Updating the board Array
        /**const handleOnChange = (id) => {
            console.log(id);
                setBoard ( (prev) => {
                    prev[id] = isXNext ? "X" : "O"
                    return prev;
                })
                setIsXNext(!isXNext)
        }**/

     //Second Way of Updating the board Array*/
        /**const handleOnChange = (i) => {
            if(winner || board[i]){
                return;
            }
            const boardArrayCopy = [...board]
            boardArrayCopy[i] = isXNext ? "X" : "O"
            setBoard(boardArrayCopy)
            setIsXNext(!isXNext);
            setStepNo( (prev) => prev+1)
        }*/

         /**const handleStart = ()=> {
                setBoard(Array(9).fill(null))
                setIsXNext(true)
                setStepNo(0)

            }**/


            const[history , setHistory] = useState([Array(9).fill(null)])
            const[stepNo , setStepNo] = useState(0)
            const[isXNext , setIsXNext] = useState(true)
            const winner = CalculateWinner(history[stepNo])

            const handleOnChange = (i) => {
                const MoveKeeper = history.slice(0,stepNo+1)
                const current = MoveKeeper[stepNo]
               
                const squares = [...current]
              
                if(winner || squares[i]){
                    return;
                }
                squares[i] = isXNext ? "X" : "O"
                
                setHistory([...MoveKeeper , squares])
                setStepNo(MoveKeeper.length)
                setIsXNext(!isXNext)
            }

            const jumpTo = step => {
                setStepNo(step);
                setIsXNext(step % 2 === 0)
            };
        
            const renderMoves = () => (
                history.map((_step, move) => {
                    const destination = move ? `Go to move#${move}` : 'Start';
                    return (
                        <li key={move}>
                            <button onClick={() => jumpTo(move)}>{destination}</button>
                        </li>
                    )
                })        
            )


   
            const Draw = () => {
                if(stepNo ===9 && !winner){
                    return <p>The Match Has Been Drawn</p>
                }
            }
    return (
        <>
            
            <div style = {styles1}>
                {history[stepNo].map( (value , index) => {
                   return <Square key={index} id={index} value={value} handleOnChange = {handleOnChange}/>
                })}
            </div>
            <div style = {styles}>
                <h3 className = {winner ?`winner` : `simpetext`}>{winner ? "Winner is : " + winner : "Next Move : " + (isXNext ? "X":"O")}</h3>
                {/* <button onClick={handleStart}> Start Game</button> */}
                {renderMoves()}
                {Draw()}
            </div>
            
        </>
    )
}

export default Game