import React from "react";
import "./hostel1.css";
import axios from "axios";
import Card from "./Card";
import Card2 from "./Card2";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class Hostel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mydata: [],
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
      .get("http://localhost:8000/gc/genre2/")
      .then((res) => {
        this.setState({
          Mydata: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  

  


  render() {
    const { Mydata } = this.state;
    console.log(Mydata);

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
   
    // const link_url = window.location.href; // Get the current URL
    // const hostel = link_url.slice(-1); // Access the hostel prop

    return (
       <>
        <div className="backgroundhs">
        
          <div className="sidebarhs">
            <ul>
              <li>
                <a href="/">
                  <i className="fas fa-clinic-medical"></i>
                  <div className="titles genre">Genre Name</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-th-large"></i>
                  <div className="titles">Genre 1 </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-stethoscope"></i>
                  <div className="titles">Genre 2</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fas fa-user-md"></i>
                  <div className="titles">Genre 3</div>
                </a>
              </li>
            </ul>
          </div>
      {/* //     <div className="containerhs hostelbody">
      //       <input type="radio" name="slider" id="s1" checked />
      //       <input type="radio" name="slider" id="s2" />
      //       <input type="radio" name="slider" id="s3" />
      //       <input type="radio" name="slider" id="s4" />
      //       <input type="radio" name="slider" id="s5" />
              */}

            <Carousel responsive={responsive} showDots={true}   keyBoardControl={true}>
              {Mydata.map((post) => {
                const { id, name, description } = post;
                return (
                  <> 
                 {/* <Card   id={id} name={name} description={description} /> */}  
                    <Card2   id={id} name={name} description={description} />
                  </>
                );
                   
              })}
            </Carousel>
            </div>
      </>
    );
  }
}

export default Hostel;
