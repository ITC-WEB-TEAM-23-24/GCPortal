import React from 'react'
import './Hostel.css';
// import hostel3 from '.images/hostel3.jpg'
// import pluto from './images/pluto.jpg'
import hostel6  from './hostel6.jpg'
import hostel2 from './hostel2.jpg'
import hostel3 from './hostel3.jpg'
import hostel5 from './hostel5.jpg'
import pluto from './pluto.jpg'



export default function Hostel() {
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
    <div className='containerhs hostelbody'>
        <input type="radio" name='slider' id="s1" checked/>
        <input type="radio" name='slider' id='s2' />
        <input type="radio" name='slider' id='s3' />
        <input type="radio" name='slider' id='s4' />
        <input type="radio" name='slider' id='s5' />

        <div className="cardsch">
            <label htmlFor='s1' id='slide1'>
                <div className="card">
                    <div className="image">
                        <img src={hostel6} alt="hostel 6" />
                        {/* <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className="infos">
                        
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint </span>

                       
                        <div className="actions">
                            {/* <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                            <i className="bi bi-0-circle bg-primary"></i> */}
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s2' id='slide2'>
                <div className="card">
                    <div className="image">
                        <img src={hostel2} alt="hostel 6" />
                        {/* <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className="infos">
                       
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint.</span>

                        
                        <div className="actions">
                            {/* <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i> */}
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s3' id='slide3'>
                <div className="card">
                    <div className="image">
                        <img src={hostel5} alt="hostel 6" />
                        {/* <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className="infos">
                        
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint </span>

                        
                        <div className="actions">
                            {/* <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i> */}
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s4' id='slide4'>
                <div className="card">
                    <div className="image">
                        <img src={pluto} alt="hostel 6" />
                        {/* <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className="infos">
                      
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint </span>

                        
                        <div className="actions">
                            {/* <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i> */}
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s5' id='slide5'>
                <div className="card">
                    <div className="image">
                        <img src={hostel3} alt="hostel 6" />
                        {/* <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className="infos">
                       
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint </span>

                        
                        <div className="actions">
                            {/* <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i> */}
                        </div>
                    </div>
                </div>
            </label>
        </div>
    </div>
    </div>
    
    </>
  )
}
