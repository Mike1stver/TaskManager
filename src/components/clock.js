import React, { Component } from 'react'

class Clock extends Component{
    constructor(props){
        super(props)
        // this.tick = this.tick.bind(this)
        this.state={
            currentHour: new Date().toLocaleTimeString(),
            savedour:[],
            // activity:[]
        }
    }

    componentDidMount(){
        // setInterval(this.tick, 1000)
        this.timerID = setInterval(() => {
             this.tick()}, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            currentHour: new Date().toLocaleTimeString()
        })
    }

    saveHandler(){
        this.setState({
            savedhour : [...this.state.savedhour,this.state.currentHour]
        })
    }

    // inputHandler(ev){
    //     this.setState({
    //         activity : ev.targe.value
    //     })
    // }
    render(){

        let listaHoras = this.state.savedhour.map((hora) => <li>{hora}</li>)

        return(
            <div>
                <h2>Esta es la Hora actual</h2><br/>
                {this.state.currentHour} <br/>
                <input type="text" value={this.state.activity} onChange={this.inputHandler}/>
                <button onClick={this.saveHandler.bind(this)}> Grabar Hora y Actividad!</button> <br/>
                {/* <div>{this.state.savedhour}</div> */}
                 <ul>{listaHoras}</ul>
            </div>
        )
    }
}

export default Clock