import React, {Component} from 'react'

// const persona1 ={
//     nombre: 'Miguel',
//     apellido: 'Fabian',
//     edad: '27',
//     nacionalidad:'peruana'
// }
// render(<App {...persona1}/>, document.getElementById('root'))

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
            input : '',
            submit: ''
        }
        this.actualizaValor = this.actualizaValor.bind(this)
        this.mostrarPantalla = this.mostrarPantalla.bind(this)
    }

    actualizaValor(event){
        let texto = event.target.value
        this.setState({input: texto})
    }

    mostrarPantalla(event){
        this.setState({submit: this.state.input})
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.input} onChange={this.actualizaValor}/>
                <button onClick={this.mostrarPantalla}> Click Me Now!</button>
                <div>{this.state.submit}</div>
            </div>    
        )
    }
}

export default Formulario


