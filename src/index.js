import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainMenu from "./mainMenu";
import Inventory from "./inventory";
import Forge from "./forge";

class App extends React.Component{  
    constructor(){
        super();

        this.state = {
          currentView : <MainMenu 
          goToInventory = {this.goToInventory}
          goToForge = {this.goToForge}
          />,
          items : []
        };
    }

    returnToMainMenu = () =>{
      this.setState({
        currentView : <MainMenu 
        goToInventory = {this.goToInventory}
        goToForge = {this.goToForge}
        
        />
      });
    }

    goToInventory = () =>{
      this.setState({currentView: <Inventory
        returnToMainMenu = {this.returnToMainMenu}
      />});
    }

    goToForge = () =>{
      this.setState({currentView:<Forge
        returnToMainMenu = {this.returnToMainMenu}
        addItem = {this.addItem}
      />});
    }

    addItem = (name,desc, imgUrl) =>{
      let temp = {
        name : name,
        desc : desc,
        imgUrl : imgUrl
      };
      let tempArray = this.state.items;
      tempArray.push(temp);
      this.setState({items : tempArray});
      console.log(this.state.items);
    }
   
    render(){
      
      return(
        <div align = "center">
          {this.state.currentView}
        </div>
      )
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(<App/>,document.getElementById("root"));
