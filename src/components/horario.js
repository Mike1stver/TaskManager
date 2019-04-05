import React, { Component } from "react";
import "./styles/horario.css";
import List from "./List";
class Horario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHour: new Date().toLocaleTimeString(),
      currentActivity: "",
      savedHours: [],
      savedActivities: [],
      data: false
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentHour: new Date().toLocaleTimeString()
    });
  }

  saveHandler() {
    this.setState({
      savedHours: [...this.state.savedHours, this.state.currentHour],
      savedActivities: [
        ...this.state.savedActivities,
        this.state.currentActivity
      ],
      currentActivity: "",
      data: true
    });
  }

  inputHandler(ev) {
    this.setState({
      currentActivity: ev.target.value
    });
  }
  render() {
    let matriz = [];
    for (let i = 0; i < this.state.savedHours.length; i++) {
      matriz[i] =
        this.state.savedHours[i] + " : " + this.state.savedActivities[i];
    }
    return (
      <React.Fragment>
        <section className="Hour">
          <div className="Container">
            <h1 className="Hour__title">Hora actual :</h1>
            <div className="Hour__number"> {this.state.currentHour} </div>
          </div>
        </section>
        <section className="Activities">
          <div className="Container__noflex">
            <h1 className="Activity__title">Ingrese Actividad :</h1>
            <input
              className="Activity__input"
              type="text"
              value={this.state.currentActivity}
              onChange={this.inputHandler.bind(this)}
            />
            <div className="Container__button">
              <button
                className="Activity__button"
                onClick={this.saveHandler.bind(this)}
              >
                Grabar Hora y Actividad!
              </button>
            </div>
          </div>
        </section>
        {this.state.data && <List list={matriz} />}
      </React.Fragment>
    );
  }
}

export default Horario;
