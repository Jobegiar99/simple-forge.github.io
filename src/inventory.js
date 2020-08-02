import React from "react";
import "./inventory.css";
import InventoryItemCard from "./inventoryItemCard";

class Inventory extends React.Component{
    render(){
        let itemCards = []
        for(let i = 0; i < this.props.items.length; i++){
            let temp = <InventoryItemCard
                name = {this.props.items[i].name}
                desc = {this.props.items[i].desc}
                imageURL = {this.props.items[i].imgUrl}
                goToItemDesc = {this.props.goToItemDesc}
            />
            itemCards.push(temp);
        }
        return(
            <div>
                <div class = "inventoryDiv" align = "center">
                    <h1>Inventory</h1>
                    <h3>Click on any item's image to view it's information</h3>
                    <div class ="inventoryObjects" align ="center">
                        {itemCards}
                    </div>
                    <button class = "inventoryButtonReturn" onClick = {this.props.returnToMainMenu}>Return to Main Menu</button>
                
                </div>
            </div> 
        )
    }
}

export default Inventory;