import React from "react";
import logo from "../assets/logo192.png";
import logo1 from "../assets/14.jpeg";
import logo2 from "../assets/15.jpeg";
import logo3 from "../assets/16.jpeg";
import {Link } from 'react-router-dom'

class Home extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();
    this.state = {
      title: "Hello from bridgelabz",
      name: "Kumar",
      userName: "",
      likes: 123,
    };
  }
  onClick = ($event) => {
    console.log("Onclick event", $event);
    window.open(this.url, "_blank");
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div>
       
        <h2>Home</h2>
        <h1>Hello {this.state.userName} from Bridgelabz</h1>
        <p>
          {this.state.title} and Likes {this.state.likes}
        </p>
        <p>{this.state.name}</p>
        <img src={logo} />
        <img src={logo1} onClick={this.onClick} />
        <img src={logo2} />
        <img src={logo3} />
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}

export default Home;
