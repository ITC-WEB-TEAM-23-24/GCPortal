import React from "react";
import "../gc.css";
import gc from "../assets/gc.png";
import axios from "axios";
import {motion} from 'framer-motion'

class Gc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scoresdata: [],
            gcdata : [], // Initialize the hostel variable in the component's state
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
        const gc_id = link_url.split('/'); // Retrieve the hostel value from navigation param
        const id = gc_id[gc_id.length -1]; // Check the value of hostel
        axios
          .get(`http://localhost:8000/GC${id}/`, this.config)
          .then((res) => {
            const { gc, scores } = res.data; 
            this.setState({
                gcdata: gc[0],
                scoresdata: scores,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }

    render(){
    const { gcdata , scoresdata } = this.state;
    return(
        <div className="gc body">
            <div className="main">
                <div className="left">
                    <div className="left-top card">
                        <div class="container">
                            <div className="title">{gcdata.name}</div>
                            <hr/>   
                            <div className="discription-container">
                                <div className="regdate">Registration Deadline: 23 March 11:59 PM</div>
                                <div className="description p-text">
                                    <p>
                                       {gcdata.description}
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
                            {scoresdata.map((output, id) => (       
                                <div className="hostel hd2" key={id}>
                                    <div className="hostname">Hostel {output.hostel_id}</div>
                                    <motion.div
                                        initial={{width:0}}
                                        animate={{width:output.score*8+"%"}}
                                        transition={{duration:output.score*2/9}}
                                        className="hosteldata"
                                    ></motion.div>
                                    <div className="hostelscore">{output.score} Points</div>
                                </div>
                            ))}
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
                            <li>{gcdata.genre}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );}
}
export default Gc;