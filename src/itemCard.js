import React, {Component} from "react";
import "./itemCard.css";
class ItemCard extends React.Component{
    render(){
        return(
            <div class = "itemInfoCard" style = {this.props.isVisible}>
                <h1 id = "itemName"> 
                    {this.props.ItemName} 
                </h1>
                <img id = "itemImage" src={this.props.ItemImgUrl}/>
                <p id = "itemDescription">
                    {this.props.ItemDescription}
                </p>
                <button id = "IICButton" onClick ={this.props.goToInventory}>return</button>
            </div>
        )
    }
}

export default ItemCard;