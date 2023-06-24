import React from "react";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="containerd">
        <div className="title">
        <h1>Dashboard</h1>
        </div>
     <div className="contentd">
        <div className="cardsd">
            <div className="row">
            <div className="col-md-3">
            <div className="cardd">
                <div className="boxd">
                    <h1>2194</h1>
                    <h3>Students</h3>
                </div>
                
            </div>
            </div>
            <div className="col-md-3">
            <div className="cardd">
                <div className="boxd">
                    <h1>1th</h1>
                    <h3>Zoner</h3>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="cardd">
                <div className="boxd">
                    <h1>2</h1>
                    <h3>Overall</h3>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="cardd">
                <div className="boxd">
                    <h1>76</h1>
                    <h3>Points</h3>
                </div>
            </div>
            </div>
            
            <div className="content-2d">
            <div className="col-md-6">
              <div className="recent-paymentsd">
                <div className="titled">
                    <h2>Recent Matches</h2>
                    <a href="/" className="btn">view all</a>
                </div>
                <table>
                    <tr>
                        <th>GAME</th>
                        <th>Points</th>
                        <th>Position</th>
                        <th>Zoner rank</th>
                    </tr>
                    <tr>
                        <td>Table tennis</td>
                        <td>32</td>
                        <td>3rd</td>
                        <td>3rd</td>
                        {/* <td> <a href="/" className="btn">view all</a></td> */}
                    </tr>
                </table>
               </div>
               </div>
               <div className="col-md-4">
                <div className="new-studentsd">
                <div className="titled">
                    <h2>New students</h2>
                    <a href="/" className="btn">view all</a>
                </div>

                <table>
                    <tr>
                        <th>Profiles</th>
                        <th>Name</th>
                        <th>option</th>
                    </tr>
                    <tr>
                    <td>John deo</td>
                        <td>st. james</td>
                        <td>$120</td>
                        <td> <a href="/" className="btn">view all</a></td>
                    </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
        </div>
     </div>
    </div>
  );
}
