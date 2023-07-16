import React from "react";
import "./hostel1.css";
import axios from "axios";
import Card from "./Card";
import Card2 from "./Card2";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Nav from "./Nav";
import { Link } from "react-router-dom";

class GC_Genre1 extends React.Component {
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

      // const hamburger = document.getElementById('hamburger')
      // const close = document.getElementById('close')
      // const ul = document.getElementById('ul')

      // const display = Array.from(document.getElementsByClassName('display'))
      // hamburger.addEventListener('click',()=>{
      //     ul.style.display='flex';
      //     ul.style.flexDirection='column'
      //     hamburger.style.display = 'none'
      //     hamburger.style.left='0'
      //     close.style.display= 'block' 
      //     display.forEach((e)=>{
      //       e.style.display='block'
      //     })               
      // })
      // close.addEventListener('click',()=>{
      //   hamburger.style.display = 'block'
      //   close.style.display= 'none'   
      //   ul.style.display='flex';
      //     ul.style.flexDirection='row'
      //     display.forEach((e)=>{
      //       e.style.display='none'
      //     })  
      //     hamburger.style.left='-100px'
      // })

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
        items: 2
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
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
            <ul id="ul">
            
              {/* <li>
                <a href="/">
                  <i className="fas fa-clinic-medical"></i>
                  <div className="titles genre">Genre Name</div>
                </a>
              </li> */}
              <li>
                <div className="display">
                <a href="/Genre1">
                  <i className="fas fa-th-large"></i>
                  <button className="titles .btnhs">Genre 1 </button>
                </a>
                </div>
              </li>
              <li>
              <div className="display">
                <a href="/Genre2">
                  <i className="fas fa-stethoscope"></i>
                  <button className="titles ">Genre 2</button>
                </a>
                </div>
              </li>
              <li>
                <div className="display">
                <a href="/Genre3">
                  <i className="fas fa-user-md"></i>
                  <button className="titles">Genre 3</button>
                </a>
                </div>
              </li>
              
              {/* <li id="hamburger">
                <i className="fa-solid fa-bars"></i>
              </li>
             
              <li id="close">
              <i class="fa-solid fa-xmark"></i>
              </li> */}
             
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
                 <Link to={`/GC/${name}`}>
                    <Card2 id={id} name={name} description={description} />
                 </Link>
                  </>
                );
                   
              })}
            </Carousel>
            </div>
      </>
    );
  }
}

export default GC_Genre1;
