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
      gcData: [],
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
        console.log(hostelData );
        this.setState({
          hostelData, // Set the hostelData state once
        });
      })
      .catch((err) => {
        console.error(err);
      });

      // fetch gc data
      axios
      .get("http://localhost:8000/gclist/", this.config)
      .then((res) => {
        const gcData = res.data; // Save the hostel data
        console.log(gcData);
        this.setState({
          gcData // Set the hostelData state once
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }

  render() {


    const { details, scores, gcData} = this.state;
    const link_url = window.location.href;
    const gc_id = link_url.split("/"); // Retrieve the hostel value from navigation param
    const hostel = gc_id[gc_id.length - 1]
    // Find the corresponding hostel data based on hostel name
    const { hostelData } = this.state; // Retrieve the hostel data from the state
    const hostelInfo = hostelData.find(
      (hostelInfo) => hostelInfo.name === hostel
    ); // Access the hostel prop
    

    const getGc = (gcid) => {
      const item = gcData.find((item) => item.id === gcid);
      return item || null; // Return the item object if found, or null if not found
    };
    return (
      <div className="bg">
        <div className="cardsds">
          <div className="card_heading">
            <div className="image">
              <img src={hostelInfo?.image} alt="Hostel Image" />
            </div>
            <div className="card-contents">
              <div className="numberds">
                Hostel {hostel.slice(1)}
              </div>
              <div className="nameds">
                {hostelInfo?.tittle}
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
                <tr id="tableheading2"> 
                  <td>GC Event</td>
                  <td>Rank</td>
                  <td>Score</td>
                </tr>
              </thead>
              <tbody>
                {scores.map((output, index) => (
                    
                  <tr key={index}>
                    <td>
                      {getGc(output.event).name}
                    </td>
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
                <tr id="tableheading1">
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
