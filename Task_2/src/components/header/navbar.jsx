import React from "react";
import "./navbar.css"

class NavBar extends React.Component{
    render(){
        return (
            <div style={{ display: "flex",backgroundColor:"#cfc7c7b4", width: "100", height:"300px", justifyContent:"space-around"}}>
            <div className="logo">
                <img src="https://sample-website-pi.vercel.app/images/logo.png" alt="https://sample-website-pi.vercel.app/images/logo.png" />
            </div>
            <div className="names">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>BLOG</p>
                <p>CONTACT</p>
            </div>
            </div>
        )
    }
}

export default NavBar;