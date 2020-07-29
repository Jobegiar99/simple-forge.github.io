import React, {Component} from "react";
import "./forge.css";
class Forge extends React.Component{

    render(){
        return(
            <div id = "forgeDiv">
                <form>
                    <label class = "forgeLabel">Object's Name</label>
                    <input id = "inputName"></input>
                    <label class = "forgeLabel">Object's Description</label>
                    <input id = "inputDescription"></input>
                    <label class = "forgeLabel">Object's Image URL</label>
                    <input id = "inputImage" type = "url"></input>


                </form>
                      
                <button id = "buttonForgeItem">FORGE</button>
                <button id = "forgeButtonReturn" onClick = {this.props.returnToMainMenu}>Return to Main Menu</button>

            </div>
        )
    }


}

export default Forge;