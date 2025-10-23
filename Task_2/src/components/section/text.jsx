import React from "react";
import "./section.css"

class Text extends React.Component{
    render(){
        return (
            <div className="product">
            <div className="ice">
            <h4>NEW PRODUCT</h4>
            <br /> <br />
            <h2>The Twist of Healthy Yogurt</h2>
<br /><br /><br />
            <p>This website template has been designed by freewebsitetemplates.com for you, for free. <br />You can replace all this text with your own text.</p>
            </div>
            <div className="cream">

            <img src="https://sample-website-pi.vercel.app/images/yogurt.jpg" alt="https://sample-website-pi.vercel.app/images/yogurt.jpg" />
            
            </div> 
            
            </div>
        )
    }
}
export default  Text;