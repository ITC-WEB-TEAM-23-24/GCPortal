import React from "react";
import { Link } from "react-router-dom";
import "../Leaderboards.css";
import ScoreboardAnimation from "../Animation";
import axios from "axios";

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        // Add any other custom headers here
      },
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/genre1/", this.config)
      .then((res) => {
        const data = res.data;
        console.log(data.scorecard); // Check the structure of the API response
        this.setState({
          details: data.scorecard,
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
              <li className="list_items">
                <Link to="/Overall">Overall</Link>
              </li>
              <li className="list_item_on">
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
              <ScoreboardAnimation id={output.rank}>
                <div className={output.rank}>
                  <div className="position">
                    <h4>{output.rank}</h4>
                  </div>
                  <div className="image">
                    <img alt="img_hostel" />
                  </div>
                  <div className="name">
                    <h3 className="name text-dark">{output.name}</h3>
                    <div className="span">Hostel_name</div>
                  </div>

                  <div className="score">
                    <span>{output.total_score}</span>
                  </div>
                </div>
              </ScoreboardAnimation>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Overall;
