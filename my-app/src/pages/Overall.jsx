import React from "react";
import { Link } from "react-router-dom";
import "../Leaderboards.css";
import ScoreboardAnimation from "../Animation";
import axios from "axios";
// import Dashboard from "../Components/Dashboard";
import { Navigate } from "react-router-dom";

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      hostel: "", // Initialize the hostel variable in the component's state
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        // Add any other custom headers here
      },
    };
  }

  handleClick = (hostel) => {
    this.setState({ hostel }); // Update the hostel variable in the component's state
    console.log("Selected hostel:", hostel);
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/overall/", this.config)
      .then((res) => {
        const data = res.data;
        console.log(data); // Check the structure of the API response
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { hostel } = this.state; // Retrieve the hostel variable from the component's state
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

          <div className="name_score">
            <ul className="name_score_listing">
              <li className="name_score_style">Position</li>
              <li className="name_score_style">Hostel image</li>
              <li className="name_score_style">Hostel Name</li>
              <li className="name_score_style">Score</li>
            </ul>
          </div>

          {this.state.details.map((output, id) => (
            <div key={id} onClick={() => this.handleClick(output.name)}>
              {hostel && <Navigate to="/Dashboard" hostel={hostel} />}
              {/* <Link to="/dashboard"> */}
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
              {/* </Link> */}
            </div>
          ))}
        </div>
        <div>
          {/* Display the value of the hostel variable */}
          <p>Selected Hostel: {hostel}</p>
        </div>
      </div>
    );
  }
}

export default Overall;
