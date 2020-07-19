import React,{Component} from "react";
import "./inventoryItemCard.css";

class InventoryItemCard extends React.Component{

    loadGame = () =>{
        //take the user to the page containing this card info.
    }
    render(){
        
        return(
            <div class = "IICDiv" onClick = {this.props.changeVisibility}>
                
                <img class = "itemImg" src = {this.props.imageURL} alt ={this.props.title}/>
                <h1 > {this.props.title} </h1>

            </div>
        )
    }
}

export default InventoryItemCard;