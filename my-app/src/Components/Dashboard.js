import React from "react";
import "./Dashboard.css";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      scores: [],
      hostelData: [],
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        // Add any other custom headers here
      },
    };
  }

  componentDidMount() {
    const link_url = window.location.href; // Get the current URL
    const gc_id = link_url.split("/"); // Retrieve the hostel value from navigation param
    const hostel = gc_id[gc_id.length - 1]; // Check the value of hostel
    axios
      .get(`http://localhost:8000/${hostel}/`, this.config)
      .then((res) => {
        const { details, scores } = res.data; // Destructure the "details" and "scores" objects from the API response
        console.log(details); // Check the structure of the "details" object
        console.log(scores); // Check the structure of the "scores" array
        this.setState({
          details: details,
          scores: scores,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    // Fetch data for hostel images and names
    axios
      .get("http://localhost:8000/hostels/", this.config)
      .then((res) => {
        const hostelData = res.data; // Save the hostel data
        console.log(hostelData);
        this.setState({
          hostelData, // Set the hostelData state once
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { details, scores } = this.state;
    const link_url = window.location.href;
    const gc_id = link_url.split("/"); // Retrieve the hostel value from navigation param
    const hostel = gc_id[gc_id.length - 1].slice(1); // Access the hostel prop
    const { hostelData } = this.state; // Retrieve the hostel data from the state

    // Find the corresponding hostel data based on hostel name
    const hostelInfo = hostelData.find(
      (hostelInfo) => hostelInfo.name === hostel
    );

    return (
      <div className="bg">
        <div className="cardsds">
          <div className="card_heading">
            <div className="image">
              <img src={hostelInfo?.image} alt="Hostel Image" />
            </div>
            <div className="card-contents">
              <div className="numberds">
                {/* Hostel {hostel} - {hostelData.tittle} */}
                Hostel {hostel} - {hostelInfo && hostelInfo.title}
              </div>
            </div>
          </div>
        </div>
        <div className="cardsds">
          <div className="card">
            <div className="card-contents">
              <div className="numberds">{details.overall_rank}</div>
              <div className="cardds-name">Overall Rank</div>
            </div>
            <div className="icon-boxds">
              <i className="fa-solid fa-trophy"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-contents">
              <div className="numberds">{details.overall_score}</div>
              <div className="cardds-name">Total Score</div>
            </div>
            <div className="icon-boxds">
              <i className="fa-brands fa-grunt"></i>
            </div>
          </div>
        </div>
        <div className="tablesds">
          <div className="last-appointments">
            <div className="headingds">
              <h2 style={{ margin: 7 }}>Results</h2>
            </div>
            <table className="appointments">
              <thead>
                <tr>
                  <td>GC Event</td>
                  <td>Rank</td>
                  <td>Score</td>
                </tr>
              </thead>
              <tbody>
                {scores.map((output, index) => (
                  <tr key={index}>
                    <td>{output.event}</td>
                    <td>{output.rank}</td>
                    <td>{output.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="doctor-visiting">
            <div className="headingds">
              <h2 style={{ margin: 7 }}>Genre Results</h2>
            </div>
            <table className="visiting">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Score</td>
                  <td>Genre Rank</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Genre1</td>
                  <td>{details.genre1_score}</td>
                  <td>{details.genre1_rank}</td>
                </tr>
                <tr>
                  <td>Genre2</td>
                  <td>{details.genre2_score}</td>
                  <td>{details.genre2_rank}</td>
                </tr>
                <tr>
                  <td>Genre3</td>
                  <td>{details.genre3_score}</td>
                  <td>{details.genre3_rank}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
