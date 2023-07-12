import React from 'react'
import './Dashboard.css'
import image from './image.png'

export default function Dashboard() {
  return (
    <>
    <div className="mainds">
    <div className="cardsds">
        <div className="card">
            <div className="card-contents">
                <div className="numberds">1st</div>
                <div className="cardds-name">Rank</div>
            </div>
            <div className="icon-boxds">
            <i className="fa-solid fa-trophy"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-contents">
                <div className="numberds">185</div>
                <div className="cardds-name">Points</div>
            </div>
            <div className="icon-boxds">
            <i className="fa-brands fa-grunt"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-contents">
                <div className="numberds">2</div>
                <div className="cardds-name">Genre Rank</div>
            </div>
            <div className="icon-boxds">
            <i class="fa-solid fa-ranking-star"></i>
            </div>
        </div>
        <div className="card">
            <div className="card-contents">
                <div className="numberds">4</div>
                <div className="cardds-name">Total wins</div>
            </div>
            <div className="icon-boxds">
                <i className="fas fa-dollar-sign"></i>
            </div>
        </div>
      </div>
         <div className="tablesds">
            <div className="last-appointments">
                <div className="headingds">
                    <h2>Results</h2>
                    <a href="/" className="btnds">view all</a>
                </div>
                <table className="appointments">
                    <thead>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Against</td>
                        <td>Actions</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hockey</td>
                            <td>Win</td>
                            <td>Hostel 3</td>
                            <td>
                                <i className="far fa-eye"></i>
                                <i className="far fa-edit"></i>
                                <i className="far fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Cricket</td>
                            <td>Loss</td>
                            <td>Hostel 4</td>
                            <td>
                                <i className="far fa-eye"></i>
                                <i className="far fa-edit"></i>
                                <i className="far fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Badminton</td>
                            <td>WON</td>
                            <td>Hostel 3</td>
                            <td>
                                <i className="far fa-eye"></i>
                                <i className="far fa-edit"></i>
                                <i className="far fa-trash-alt"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Swimming</td>
                            <td>WON</td>
                            <td>Hostel 5</td>
                            <td>
                                <i className="far fa-eye"></i>
                                <i className="far fa-edit"></i>
                                <i className="far fa-trash-alt"></i>
                            </td>
                        </tr>
                     
                    </tbody>
                </table>
            </div>
            <div className="doctor-visiting">
                <div className="headingds">
                    <h2>Winner-Team</h2>
                    <a href="/" className="btnds">view all</a>
                </div>
                <table className="visiting">
                    <thead>
                       <td>Photo</td> 
                       <td>Name</td> 
                       <td>Score</td> 
                       <td>Detail</td> 
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="img-box-small">
                                    <img className='imgds' src={image} alt=""/>
                                </div>
                            </td>
                            <td>Benjamin</td>
                            <td>14.00</td>
                            <td><i className="far fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="img-box-small">
                                    <img className='imgds' src={image} alt=""/>
                                </div>
                            </td>
                            <td>Benjamin</td>
                            <td>14.00</td>
                            <td><i className="far fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="img-box-small">
                                    <img className='imgds' src={image} alt=""/>
                                </div>
                            </td>
                            <td>Benjamin</td>
                            <td>14.00</td>
                            <td><i className="far fa-eye"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="img-box-small">
                                    <img className='imgds' src={image} alt=""/>
                                </div>
                            </td>
                            <td>Benjamin</td>
                            <td>14.00</td>
                            <td><i  className="far fa-eye"></i></td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
         </div> 
    </div>
    </>
   
  )
}
