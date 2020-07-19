import React from "react";
import "./inventory.css";
import InventoryItemCard from "./inventoryItemCard";
import ItemCard from "./itemCard";

class Inventory extends React.Component{
    
    constructor(){
        super();
        this.state = {
            divStyle: {visibility: "hidden"},
            visible : false
        }
    }

    changeVisibility = () =>{
        if(! this.state.visible ){
            this.setState({divStyle : {visibility: "visible"}, visible : true});
        }else{
            this.setState({divStyle : {visibility: "hidden"}, visible : false});
        }
    }

    render(){
        return(
            <div>
                <div class = "inventoryDiv" align = "center">
                    <h1>Inventory</h1>
                    <h3>Click on any item to view it's information</h3>
                    <div class ="inventoryObjects" align ="center">
                        <InventoryItemCard
                            title = {"ABCDEFGHIJKLMNO"}
                            imageURL = { "https://lh3.googleusercontent.com/U7PNiTqNE9OxkSJb6D9P7DLPX5Odst_UG6JI3pI8M80OTlfRfWhzIp7Vb_EwclGDFPAstgwLL8CHvlznBBRE17Dimt2SAb3OCcZrzl3s75PnN7ed06pw2eowxOUnziUsWoAOVhal7KHy4VFN8SEdPgMKEGJgYsip8K0_21pmn_0zaq1VOujRDvryhfyvHOpLBuY1z3mAFUbdIaAiJ2s7m4D4QjXqkUW7sPzCvJPqoD35V6j_gJFylIi_5rX3xFCn2YCi77IYpK4E-3gioTQspmQJuWDqk4F-504UJcVu_sKfixfuxMXNmijyhtsH6vulhkpJiK2muoqsY0EI4xxY0R9JErEsc-4C7a6FwbCZlzi6-cs6zIFM7aQiDBgU5tivcm14DH7nggu7zg8DG-BKoTKOIXkfxUS8GzwJTSsqvIzkLKACWAThbY3lYPQ_06MAicdDoIJrN8AiDQSN8KPrGW6JQ8vdWbrjOS3dEijs8r7j19w22mSEe2-8bD7JHlf8RMyVro6mpjxRm1mkPh5boqiTFR_RCg8rwIfF2XHS5av0phu2GxFop5eGY1iAQq4oMiv8tvdEo2mm1y2WLjyWWkHk9LD1aZFfR-rHZHatIXXIGPoR177lUIhJQtDfVHpkwvtr1nOSgU9RF-bxLzzP-20-bSEol3pnGwZbLmqNRDFENqyChM0eCll3wN2W=s32-no?authuser=2" }
                            changeVisibility = {this.changeVisibility}
                        
                        />

                    </div>
                    <button class = "inventoryButtonReturn" onClick = {this.props.returnToMainMenu}>Return to Main Menu</button>
                
                </div>
                <ItemCard 
                    isVisible ={this.state.divStyle}
                    changeVisibility = {this.changeVisibility}
                    ItemName = "Helmet Bro's Helmet"
                    ItemDescription = "Helmet Bro's Helmet, stories say that it can destroy civilizations with its power. You shall never face Helmet Bro while he is using his helmet"

                />
            </div>
           
        )
    }
}

export default Inventory;