import React, {Component} from "react";
import "./forge.css";
class Forge extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "",
            description: "",
            imgUrl: "",
            items: null
        }
    }

    updateInput = (event) =>{
        this.setState({ [event.target.name] : event.target.value});
    }

    forgeItem = (event) =>{
        event.preventDefault();
        if( this.state.name != "" && this.state.description != "" && this.state.imgUrl != ""){
            let found = false;
            for(let i = 0; i < this.props.items.length; i++){
                if( this.props.items[i].name == this.state.name){
                    found = true;
                }
            }
            if(!found){

                alert(`${this.state.name} has been forged`);
                this.props.addItem(this.state.name, this.state.description, this.state.imgUrl);
                this.setState({name: "", description : "", imgUrl : ""});
                this.props.returnToMainMenu();
            
            }else{
                alert(`An item with the name of ${this.state.name} already exists`);
            }


        }else{
            alert("Please fill all the information to forge a new item");
        }
    }
    

    render(){
        
        return(
            <div id = "forgeDiv">
                <form>
                    <label className = "forgeLabel">Object's Name</label>
                    <input 
                        className = "forgeInput" 
                        name = "name" 
                        maxLength = "16"
                        value = {this.state.name} 
                        onChange = {this.updateInput}/>

                    <label className = "forgeLabel">Object's Description</label>
                    <input 
                        className = "forgeInput" 
                        name = "description"
                        value = {this.state.description} 
                        onChange = {this.updateInput}/>

                    <label className = "forgeLabel" >Object's Image URL (32 x 32)</label>
                    <input 
                        className = "forgeInput"  
                        name = "imgUrl"
                       
                        value = {this.state.imgUrl} 
                        onChange = {this.updateInput}/>

                    <button 
                        id = "buttonForgeItem" 
                        onClick = {this.forgeItem}
                        >FORGE </button>

                </form>
                    
                
                <button id = "forgeButtonReturn" onClick = {this.props.returnToMainMenu}>Return to Main Menu</button>

            </div>
        )
    }


}

export default Forge;