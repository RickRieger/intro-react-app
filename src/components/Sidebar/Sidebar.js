import React, { Component } from "react";
import "./Sidebar.css";
export class Sidebar extends Component {
  state = {
    colorArray: ["pink", "lightblue", "lightGreen"],
    backgroundColorInput: "",
  };
  handleOnBackgroundColorChange = (color) => {
    this.setState({
      backgroundColorInput: color,
    });
  };
  render() {
    return (
      <div
        className="sidebar"
        style={{ backgroundColor: this.state.backgroundColorInput }}
      >
        <ul className="ul-style">
          {this.state.colorArray.map((item, index) => {
            return (
              <li
                className="list-style"
                key={index}
                onClick={() => this.handleOnBackgroundColorChange(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.handleOnBackgroundColorChange("")}>
          Reset
        </button>
      </div>
    );
  }
}
export default Sidebar;