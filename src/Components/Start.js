import React, { Component } from "react";
import { Link } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="left">w</div>
        <div className="right">
          <ul>
            <Link to={"/Main"}>
              <li>
                <a href="#">Main</a>
              </li>
            </Link>
            <Link to={"/Contact"}>
              <li>
                <a href="#">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Start;
