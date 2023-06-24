import React from 'react'
import './Hostel.css';
// import hostel3 from '.images/hostel3.jpg'
// import pluto from './images/pluto.jpg'
import hostel6  from './hostel6.jpg'
import hostel2 from './hostel2.jpg'
import hostel3 from './hostel3.jpg'
import hostel5 from './hostel5.jpg'
import pluto from './pluto.jpg'
import { Link } from 'react-router-dom';

export default function Hostel() {
  return (
    <>
    <div className='container'>
        <input type="radio" name='slider' id="s1" checked/>
        <input type="radio" name='slider' id='s2' />
        <input type="radio" name='slider' id='s3' />
        <input type="radio" name='slider' id='s4' />
        <input type="radio" name='slider' id='s5' />

        <div className="cards">
            <label htmlFor='s1' id='slide1'>
                <div className="card">
                    <div className="image">
                        <img src={hostel6} alt="hostel 6" />
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="infos">
                        <span className='name'>Hostel 6 let go</span>
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint omnis! Deleniti corrupti impedit autem excepturi, expedita quod, nam doloremque ipsa quibusdam cupiditate laudantium dignissimos sit temporibus.</span>

                        <Link to="/Dashboard" className='btn-details'>details</Link>
                        <div className="actions">
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                            <i class="bi bi-0-circle bg-primary"></i>
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s2' id='slide2'>
                <div className="card">
                    <div className="image">
                        <img src={hostel2} alt="hostel 6" />
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="infos">
                        <span className='name'>Hostel 2 let go</span>
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint omnis! Deleniti corrupti impedit autem excepturi, expedita quod, nam doloremque ipsa quibusdam cupiditate laudantium dignissimos sit temporibus.</span>

                        <a href="/" className='btn-details'>details</a>
                        <div className="actions">
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s3' id='slide3'>
                <div className="card">
                    <div className="image">
                        <img src={hostel5} alt="hostel 6" />
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="infos">
                        <span className='name'>Hostel 5 let go</span>
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint omnis! Deleniti corrupti impedit autem excepturi, expedita quod, nam doloremque ipsa quibusdam cupiditate laudantium dignissimos sit temporibus.</span>

                        <a href="/" className='btn-details'>details</a>
                        <div className="actions">
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s4' id='slide4'>
                <div className="card">
                    <div className="image">
                        <img src={pluto} alt="hostel 6" />
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="infos">
                        <span className='name'>Hostel 9 Let go</span>
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint omnis! Deleniti corrupti impedit autem excepturi, expedita quod, nam doloremque ipsa quibusdam cupiditate laudantium dignissimos sit temporibus.</span>

                        <a href="/" className='btn-details'>details</a>
                        <div className="actions">
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                        </div>
                    </div>
                </div>
            </label>
            <label htmlFor='s5' id='slide5'>
                <div className="card">
                    <div className="image">
                        <img src={hostel3} alt="hostel 6" />
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="infos">
                        <span className='name'>Hostel 3 Let go</span>
                        <span className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eos odit non sint omnis! Deleniti corrupti impedit autem excepturi, expedita quod, nam doloremque ipsa quibusdam cupiditate laudantium dignissimos sit temporibus.</span>

                        <a href="/" className='btn-details'>details</a>
                        <div className="actions">
                            <i className='fa-solid fa-cart-shopping'></i>
                            <i className='fa-regular fa-heart'></i>
                            <i className='fa-regular fa-bookmart'></i>
                            <i className='fa-solid fa-share-nodes'></i>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    </div>
    
    </>
  )
}
