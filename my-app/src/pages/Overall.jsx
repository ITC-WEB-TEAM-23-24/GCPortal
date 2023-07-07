import React from "react";
import { Link } from "react-router-dom";
import "../Leaderboards.css";
import AnimatedPage from "../AnimatedPage";
import axios from "axios";

class Overall extends React.Component {
  state = { details: [] };
  config = {
    headers: {
      'Content-Type': 'application/json',
      // Add any other custom headers here
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/overall/", this.config)
      .then((res) => {
        const data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="bg">
        <div className="leaderboard_heading">
          <h2 data-text="Leaderboards">Leaderboards</h2>
        </div>
        <div className="animation">
          <div className="list">
            <ul className="listing">
              <li className="list_item_on">
                <Link to="/Overall">Overall</Link>
              </li>
              <li className="list_items">
                <Link to="/Genre1">Genre1</Link>
              </li>
              <li className="list_items">
                <Link to="/Genre2">Genre2</Link>
              </li>
              <li className="list_items">
                <Link to="/Genre3">Genre3</Link>
              </li>
            </ul>
          </div>
          <AnimatedPage>
            <div className="name_score">
              <ul className="name_score_listing">
                <li className="name_score_style">Position</li>
                <li className="name_score_style">Hostel image</li>
                <li className="name_score_style">Hostel Name</li>
                <li className="name_score_style">Score</li>
              </ul>
            </div>
            {this.state.details.map((output, id) => (
              <div key={id}>
                <div className="first">
                  <div className="position">
                    <h4>1st</h4>
                  </div>
                  <div className="image">
                    <img alt="img_hostel" />
                  </div>
                  <div className="name">
                    <h3 className="name text-dark">{output.Hostel}</h3>
                    <div className="span">Hostel_name</div>
                  </div>

                  <div className="score">
                    <span>{output.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedPage>
        </div>
      </div>
    );
  }
}

export default Overall;
