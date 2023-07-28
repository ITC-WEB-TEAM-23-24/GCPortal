import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/leaderboard.css";
import ScoreboardAnimation from "../Animation";
import axios from "axios";

class Overall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      hostel: "",
      hostelData: [], // Initialize the state variable to store hostel data
    };
    this.config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Token ' + '3af5accdebeb5b899e6f9197b0b822f657af008f'
        // Add any other custom headers here
      },
    };
  }

  handleClick = (hostel) => {
    this.setState({ hostel });
    console.log("Selected hostel:", hostel);
    // this.props.navigation.navigate("/Dashboard", {hostel: hostel});
  };

  componentDidMount() {
    // Fetch data for leaderboard
    axios
      .get("http://localhost:8000/genregenre3/", this.config)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Fetch data for hostel images and names
    axios
      .get("http://localhost:8000/hostels/", this.config) // Replace the URL with the actual API endpoint for hostel data
      .then((res) => {
        const hostelData = res.data;
        console.log(hostelData);
        this.setState({
          hostelData,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { hostel } = this.state;
    const { hostelData } = this.state; // Retrieve the hostel data from the state

    // Check if hostelData is not fetched yet
    if (hostelData.length === 0) {
      return <div>Loading...</div>; // You can show a loading message or a spinner here
    }
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
              <li className="list_items">
                <Link to="/Genre1">Genre1</Link>
              </li>
              <li className="list_items">
                <Link to="/Genre2">Genre2</Link>
              </li>
              <li className="list_item_on">
                <Link to="/Genre3">Genre3</Link>
              </li>
            </ul>
          </div>

          <div className="name_score">
            <ul className="name_score_listing">
              <li className="name_score_style">Position</li>
              {/* <li className="name_score_style">Hostel image</li> */}
              <li className="name_score_style">Hostel</li>
              <li className="name_score_style">Score</li>
            </ul>
          </div>

          {this.state.details.map((output, id) => {
            // Find the corresponding hostel data based on hostel name
            const hostelInfo = hostelData.find(
              (hostelInfo) => hostelInfo.name === output.name
            );
            return (
              <Link to={`/dashboard/${output.name}`} key={id}>
                <div>
                  <ScoreboardAnimation id={output.rank}>
                    <div className={output.rank}>
                      <div className="position" style={{ width: 20 }}>
                        <h4>{output.rank}</h4>
                      </div>
                      <div className="hello">
                        <div className="image_leaderboard">
                          {/* Render hostel image */}
                          <img src={hostelInfo?.image} alt="img_hostel" />
                        </div>
                        <div className="name" style={{ width: 200 }}>
                          <h3 className="name text-dark" style={{ margin: 0 }}>
                            {output.name}-{hostelInfo?.tittle}
                          </h3>
                          {/* <div className="span"></div> */}
                        </div>
                      </div>

                      <div className="score">
                        <span>{output.total_score}</span>
                      </div>
                    </div>
                  </ScoreboardAnimation>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Overall;
