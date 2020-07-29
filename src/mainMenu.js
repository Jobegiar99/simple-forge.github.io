import React from "react";
import "./mainMenu.css";

class MainMenu extends React.Component{
    render(){
        return(
            <div class = "menuDiv">
            <h1 align= "center">Welcome to Simple-Forge</h1>
            <p align = "center">
                Click "Show Inventory" to see all the crafted items available in the forge<br></br>
                Click "Forge a new item" to forge a new item
            </p>
            <button class = "showInventory" onClick= {this.props.goToInventory}>Show inventory</button>
            <button class = "forgeItem" onClick = {this.props.goToForge}>Forge a new Item</button>
            </div>
        )
    }
}

export default MainMenu;