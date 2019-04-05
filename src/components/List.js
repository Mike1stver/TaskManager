import React, { Component } from "react";
import "./styles/list.css";
class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="List">
        <div className="Container">
          <ol>
            {this.props.list.map(task => (
              <li>{task}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default List;
