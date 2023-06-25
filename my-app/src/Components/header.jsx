import React from "react";
import "../header.css"
import {BiUserCircle} from "react-icons/bi"

function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <img className="logo" src="C:\Users\ishan\Web team itc\GCPortal\my-app\public\ITClogoWhite (1) edited.png"/>
            </div>
            <div className="header_center">
                <h1>Tech GC 23-24</h1>
            </div>
            <div className="header_right">
                <h2>Full_name</h2>
                <BiUserCircle/>
            </div>
        </div>
    )
}
export default Header;