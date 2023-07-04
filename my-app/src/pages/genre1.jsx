import React from "react";
import { Link } from "react-router-dom";
import "../Leaderboards.css";
import AnimatedPage from "../AnimatedPage";

function Overall() {
  return (
    <div className="bg">
      <div className="leaderboard_heading">
        <h2 data-text="Leaderboards">Leaderboards</h2>
      </div>
      <div className="list">
        <ul className="listing">
          <li class="list_items">
            <Link to="/Overall">Overall</Link>
          </li>
          <li class="list_item_on">
            <Link to="/Genre1">Genre1</Link>
          </li>
          <li class="list_items">
            <Link to="/Genre2">Genre2</Link>
          </li>
          <li class="list_items">
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
        <div className="first">
          <div className="position">
            <h4>1st</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
        <div className="second">
          <div className="position">
            <h4>2nd</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
        <div className="third">
          <div className="position">
            <h4>3rd</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
        <div className="General">
          <div className="position">
            <h4>xth</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
        <div className="General">
          <div className="position">
            <h4>xth</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
        <div className="General">
          <div className="position">
            <h4>xth</h4>
          </div>
          <div className="image">
            <img alt="img_hostel" />
          </div>
          <div className="name">
            <h3 className="name text-dark">Hostel_number</h3>
            <div className="span">Hostel_name</div>
          </div>

          <div className="score">
            <span>Score</span>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
}
export default Overall;
