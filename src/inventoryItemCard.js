import React,{Component} from "react";
import "./inventoryItemCard.css";

class InventoryItemCard extends React.Component{

    clickHandler = () =>{
        this.props.goToItemDesc(this.props.name, this.props.desc, this.props.imageURL);
    }

    render(){
        return(
            <div class = "IICDiv">
                
                <img 
                    class = "itemImg" 
                    src = {this.props.imageURL} 
                    alt ={this.props.title}
                    onClick = {this.clickHandler}
                />
                <h1 > {this.props.name} </h1>

            </div>
          
        )
    }
}

export default InventoryItemCard;