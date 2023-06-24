import React from 'react'
import './Dashboard2.css'
import hostel2 from './hostel2.jpg'

export default function Dashboard2() {


    function width(){
    let element= document.getElementById("width1");

    element.style='width:85%';
    }

    const target = {
        clicked: 0,
        currentFollowers: 90,
        btn: document.querySelector("a.btn"),
        fw: document.querySelector("span.followers")
      };
      
      const follow = () => {
        target.clicked += 1;
        target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';
      
        if (target.clicked % 2 === 0) {
          target.currentFollowers -= 1;
          target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
        }
        else {
          target.currentFollowers += 1;
        }
      
        target.fw.textContent = target.currentFollowers;
        target.btn.classList.toggle("following");
      }
  return (
    <>
    <div className="card">
  <div className="ds-top"></div>
  <div className="avatar-holder">
    <img src={hostel2} alt="Albert Einstein"/>
  </div>
  <div className="name">
    <a href="https://codepen.io/AlbertFeynman/" target="_blank">Hostel 2</a>
    <h6 title="Followers"><i className="fas fa-users"></i> <span className="followers">Students 2412</span></h6>
  </div>
  <div className="button">
    <a href="#" className="btn" onmousedown="follow();"> <h2> Follow</h2> <i className="fas fa-user-plus"></i></a>
  </div>
  <div className="ds-info">
    <div className="ds pens">
      <h6 title="Number of matches played by the hostel">Matches <i className="fas fa-edit"></i></h6>
      <p>29</p>
    </div>
    <div className="ds projects">
      <h6 title="Number of point created by the user">Points <i className="fas fa-project-diagram"></i></h6>
      <p>10</p>
    </div>
    <div className="ds posts">
      <h6 title="Rank">Rank <i className="fas fa-comments"></i></h6>
      <p>0</p>
    </div>
  </div>
  <div className="ds-skill">
    <h6 >Skill <i className="fa fa-code" aria-hidden="true"></i></h6>
    <div className="skill html">
      <h6><i className="fab fa-html5"></i> HTML5 </h6>
      {/* <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-primary" id='width1'></div>
              </div> */}
      <div className="bar bar-html">
        <p>95%</p>
      </div>
    </div>
    <div className="skill css">
      <h6><i className="fab fa-css3-alt"></i> CSS3 </h6>
      <div className="bar bar-css">
        <p>90%</p>
      </div>
    </div>
    <div className="skill javascript">
      <h6><i className="fab fa-js"></i> JavaScript </h6>
      <div className="bar bar-js">
        <p>75%</p>
      </div>
    </div>
  </div>
</div>

width();
    </>
  )
}
