import {createRoot} from "react-dom/client";   
import "./style.css";
import Button,{Addbut} from "./button";
import Na from "./nav"

import img1 from "./image/poki1.jpg";
import img2 from "./image/poki2.png";
import img3 from "./image/poki4.png";



const root = createRoot(document.getElementById("root"));
function Card(props) {
    const {img,name} = props;
    return(
       <>
       <Na/>
        <div className="card">
        
           <img  src={img} alt=""  className="car" />
            <p> Hello,I am {name} I am pokimon
                play with my card
            </p>
            <h3>Pokimon Cards: $10</h3>
            <div className="btn">
            <Button Text="Buy Now"/>
            <Addbut Text="Add to cart"/>
            </div>

        </div>
       </>
    )
}

root.render(
    
    <>
    <h1 className="heading">Card Gallery</h1>
    <div className="container">
        <Card img={img1} name="Eve"/>
        <Card img={img2}  name="Pikachu"/>
        <Card img={img3} name="ele" />

    </div>
    </>

)