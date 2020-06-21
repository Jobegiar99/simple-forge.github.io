import React from "react";
import "./inventory.css";
import InventoryItemCard from "./inventoryItemCard";

class Inventory extends React.Component{
    render(){
        return(
            <div class = "inventoryDiv" align = "center">
                <h1>Inventory</h1>
                <h3>Click on any item to view it's card</h3>
                <div class ="inventoryObjects" align ="center">
                    <InventoryItemCard
                        title = {"ABCDEFGHIJKLMNO"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                      <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />
                    <InventoryItemCard
                        title = {"Blue Helmet"}
                    />

                        </div>
                <button class = "inventoryButtonReturn">Return to Main Menu</button>
            </div>
        )
    }
}

export default Inventory;