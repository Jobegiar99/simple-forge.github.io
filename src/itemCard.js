import React, {Component} from "react";
import "./itemCard.css";
class ItemCard extends React.Component{
    render(){
        return(
            <div class = "itemInfoCard" style = {this.props.isVisible}>
                <div class = "itemInfo">
                    <h1 class = "itemName"> {this.props.ItemName} </h1>
                    <img class = "itemImage" src="https://lh3.googleusercontent.com/U7PNiTqNE9OxkSJb6D9P7DLPX5Odst_UG6JI3pI8M80OTlfRfWhzIp7Vb_EwclGDFPAstgwLL8CHvlznBBRE17Dimt2SAb3OCcZrzl3s75PnN7ed06pw2eowxOUnziUsWoAOVhal7KHy4VFN8SEdPgMKEGJgYsip8K0_21pmn_0zaq1VOujRDvryhfyvHOpLBuY1z3mAFUbdIaAiJ2s7m4D4QjXqkUW7sPzCvJPqoD35V6j_gJFylIi_5rX3xFCn2YCi77IYpK4E-3gioTQspmQJuWDqk4F-504UJcVu_sKfixfuxMXNmijyhtsH6vulhkpJiK2muoqsY0EI4xxY0R9JErEsc-4C7a6FwbCZlzi6-cs6zIFM7aQiDBgU5tivcm14DH7nggu7zg8DG-BKoTKOIXkfxUS8GzwJTSsqvIzkLKACWAThbY3lYPQ_06MAicdDoIJrN8AiDQSN8KPrGW6JQ8vdWbrjOS3dEijs8r7j19w22mSEe2-8bD7JHlf8RMyVro6mpjxRm1mkPh5boqiTFR_RCg8rwIfF2XHS5av0phu2GxFop5eGY1iAQq4oMiv8tvdEo2mm1y2WLjyWWkHk9LD1aZFfR-rHZHatIXXIGPoR177lUIhJQtDfVHpkwvtr1nOSgU9RF-bxLzzP-20-bSEol3pnGwZbLmqNRDFENqyChM0eCll3wN2W=s32-no?authuser=2"/>
                    <p class = "itemDescription">
                        {this.props.ItemDescription}
                    </p>
                    <table class ="itemTable">
                        <thead>
                            <tr  class ="itemTableTitle">
                                <th rowSpan = "2" colSpan = "2">
                                    Recipe
                                </th>
                            </tr>
                            <br></br>
                            <tr>
                                <th>
                                    Item
                                </th>
                                <th>
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.ItemRecipe}
                        </tbody>
                    </table>
                    <button onClick ={this.props.changeVisibility}>return</button>
                </div>
            </div>
        )
    }
}

export default ItemCard;