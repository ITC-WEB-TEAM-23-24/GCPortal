import React from "react";
import axios from "axios";
import {motion} from 'framer-motion'
import "../assets/css/hostellist.css"
import { Link } from "react-router-dom";

class Hostlellist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
          .get(`http://localhost:8000/hostels/`, this.config)
          .then((res) => {
            const data = res.data; 
            console.log(data)
            this.setState({
                data : data
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }

    render(){
        const { data } = this.state;
        return(
            <div className="hostellist">
                <div className="heading">Hostel</div>
                <div className="cards-container">
                    {data.map((output, id) => (
                        <div key={id} className="cards">
                            <Link to={`/dashboard/${output.name}`}>
                                <img src={output.image} alt=""/>
                                <div className="hostel_ids">
                                    <span className="hostelname">{output.name}</span><br />
                                    <span className="hosteltittle">{output.tittle}</span>
                                </div>
                            </Link>
                        </div>
                    ))}     
                </div>
            </div>
        );}
}

export default Hostlellist  