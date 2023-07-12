import React from "react";
import "./Dashboard.css";
import image from "./image.png";

export default function Dashboard() {
  return (
    <>
      <div className="mainds">
        <div className="cardsds">
          <div className="card">
            <div className="card-contents">
              <div className="numberds">1st</div>
              <div className="cardds-name">Overall Rank</div>
            </div>
            <div className="icon-boxds">
              <i className="fa-solid fa-trophy"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-contents">
              <div className="numberds">185</div>
              <div className="cardds-name">Total Score</div>
            </div>
            <div className="icon-boxds">
              <i className="fa-brands fa-grunt"></i>
            </div>
          </div>
          <div className="card">
            <div className="card-contents">
              <div className="numberds">2</div>
              <div className="cardds-name">Genre1 Rank</div>
            </div>
            <div className="icon-boxds">
              <i class="fa-solid fa-ranking-star"></i>
            </div>
          </div>
        </div>
        <div className="tablesds">
          <div className="last-appointments">
            <div className="headingds">
              <h2>Results</h2>
              <a href="/" className="btnds">
                view all
              </a>
            </div>
            <table className="appointments">
              <thead>
                <td>GC Event</td>
                <td>Rank</td>
                <td>Score</td>
                {/* <td>Actions</td> */}
              </thead>
              <tbody>
                <tr>
                  <td>Hockey</td>
                  <td>Win</td>
                  <td>Hostel 3</td>
                  {/* <td>
                    rank
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </td> */}
                </tr>
                <tr>
                  <td>Cricket</td>
                  <td>Loss</td>
                  <td>Hostel 4</td>
                  {/* <td>
                    rank
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </td> */}
                </tr>
                <tr>
                  <td>Badminton</td>
                  <td>WON</td>
                  <td>Hostel 3</td>
                  {/* <td>
                    rank
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </td> */}
                </tr>
                <tr>
                  <td>Swimming</td>
                  <td>WON</td>
                  <td>Hostel 5</td>
                  {/* <td>
                    rank
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="doctor-visiting">
            <div className="headingds">
              <h2>Genre Results</h2>
            </div>
            <table className="visiting">
              <thead>
                <td>Name</td>
                <td>Score</td>
                <td>Genre Rank</td>
              </thead>
              <tbody>
                <tr>
                  <td>Genre1</td>
                  <td>14.00</td>
                  <td>rank</td>
                </tr>
                <tr>
                  <td>Genre2</td>
                  <td>14.00</td>
                  <td>rank</td>
                </tr>
                <tr>
                  <td>Genre3</td>
                  <td>14.00</td>
                  <td>rank</td>
                </tr>
                <tr>
                  <td>Genre4</td>
                  <td>14.00</td>
                  <td>rank</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
