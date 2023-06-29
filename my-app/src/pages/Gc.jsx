import React from "react";
import { Link } from "react-router-dom";
import "../gc.css";
import gc from "../assets/gc.png";
function Gc(){
    return(
        <div className="gc body">
            <div className="main">
                <div className="left">
                    <div className="left-top card">
                        <div class="container">
                            <div className="title">Jhatka Genral Championship</div>
                            <hr/>   
                            <div className="discription-container">
                                <div className="regdate">Registration Deadline: 23 March 11:59 PM</div>
                                <div className="description p-text">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit similique, reiciendis quaerat modi animi ratione, amet ipsum provident rem earum vero repellat! Omnis suscipit fuga, unde inventore iure magni dolores!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio quasi tempora labore dolorum quam error, temporibus aliquam harum? Totam facere ipsam consequuntur deserunt commodi ducimus modi hic reiciendis tenetur!
                                        Libero quaerat, sapiente, laboriosam odio impedit possimus in explicabo nobis officiis ullam facilis sequi! Dolorem natus repellendus sunt porro qui necessitatibus exercitationem deleniti. Temporibus quibusdam, voluptate praesentium aspernatur pariatur quas.
                                        Nisi modi eaque necessitatibus aut incidunt maxime in facilis tempora soluta id ad minus, iste doloremque, molestiae, labore harum dolorum quos cumque. Provident, laudantium aut deserunt nulla veritatis sint sequi?
                                        Nam repellat accusantium ipsa nesciunt, minima illum temporibus error cumque tempore doloremque exercitationem aut perferendis pariatur reprehenderit neque quisquam, aliquam quidem numquam earum, necessitatibus accusamus at? Itaque non perspiciatis eaque?
                                    </p>
                                </div>
                                <div className="submmitionlink">
                                    <a href="http://" target="_blank" rel="noopener noreferrer">SUBMISSION LINK</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left-bottom card">
                        <div className="container">
                            <div class="scoreboard"><h3>Score Board</h3></div>
                            <hr/>
                            <div className="hl"></div>
                            <div className="hostel-score">
                                <div className="hostel hd2">
                                    <div className="hostname">Hostel 1</div>
                                    <div className="hosteldata">5th</div>
                                    <div className="hostelscore">2 Points</div>
                                </div>
                                <div className="hostel hd10">
                                    <div className="hostname">Hostel 2</div>
                                    <div className="hosteldata">1st</div>
                                    <div className="hostelscore">10 Points</div>
                                </div>
                                <div className="hostel hd8">
                                    <div className="hostname">Hostel 3</div>
                                    <div className="hosteldata ">2nd</div>
                                    <div className="hostelscore">8 Points</div>
                                </div>
                                <div className="hostel hd4">
                                    <div className="hostname">Hostel 5</div>
                                    <div className="hosteldata">4th</div>
                                    <div className="hostelscore">4 Points</div>
                                </div>
                                <div className="hostel hd6">
                                    <div className="hostname">Hostel 6</div>
                                    <div className="hosteldata">3rd</div>
                                    <div className="hostelscore">6 Points</div>
                                </div>
                                <div className="hostel hd0">
                                    <div className="hostname">Hostel 9</div>
                                    <div className="hosteldata">6th</div>
                                    <div className="hostelscore">0 Points</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right card">
                    <img src={gc} alt="" srcset=""/>
                    <div className="gc-details p-text">
                        <ul>
                            <li><span>Maths n Physics Club</span></li>
                            <li>High Prep GC</li>
                            <li>Hardware Probably</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gc;
