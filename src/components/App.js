import React from 'react'
import ReactDOM from 'react-dom'

function App (props){
    return(
        <p>Su Nombre es: {props.nombre} <br/>
           Su Apellido es: {props.apellido} <br/>
           Su Edad es: {props.edad} <br/>
           Su Nacionalidad es: {props.nacionalidad}</p>
    )
}

export default App