import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainMenu from "./mainMenu";
import Inventory from "./inventory";
import Forge from "./forge";
import ItemCard from "./itemCard";

class App extends React.Component{  
    constructor(){
        super();

        this.state = {
          currentView : <MainMenu 
          goToInventory = {this.goToInventory}
          goToForge = {this.goToForge}
          />,
          items : [
            {name:   "Fire Crystal",
             desc:   "A crystal made of fire. It burns uppon contact",
             imgUrl: "https://lh3.googleusercontent.com/YYZRx-qW1r3_8YnuZrDfn2oBTNSFzaSlJDCmWPmVYVON2MYXf7pO01gyhvLB3WO4fwBL6fc0NxAOXafGqhqCJ5L-tVk45_3Y89gpzZdmfKqu-lKiOtg2O9sz3si0zGoEmNraDKe2NpY7JXJ7-R7ririNLwQxHN81J5F_3I1YUYE-3uyCCmdYEQLLhMNE05tJhYCkVmSDBbzHi1FLBzouvzk-6i1wIFjwyWbM6rPlx71N_x8jAov7O75qP_wxFd0PinkMrAOo5N7NJeg9tMMPe4PKX_4B_5IamR9eIeIBM8rjvgdVGkgEz-BKuvwTaHf54fOq_IXZIR5gu-y1tqpoDE9sbQsVLScjF1feGcNyPwxHL8lZrbrNFNIRERHignlaYEPMCOxGHIW3JT8wn7pZ4fR2hcHCvpvIcZkEwJ0lIv-kx9tA1fHzT2eLx1Jic20XPUgg8est0tBS4VnMZvorxI_C-jCUDYspoGvsAod0lC2Vr8v2BVP54Du8cQhJIinPlV2xsaNo3sPepqsIlm2N0pOExqEQm0sHDJ2uH23pOyWWHeYosvrQ1LIrhwu2kxvcTTxO1WRm68si2gvPGxv9RfGNZi7Jl6tURnPSQDeL5XAZ684VUdQjTqQ5qe3r1bJ3jH1GuM_9CmTidUXoxeC4Sgw4Be0bnQY7nrFTugpFiUPjc52H7XqMpT5NZT3r=s32-no?authuser=2"
            },
            {
              name: "Gold Coin",
              desc: "This gold coin can help you buy something powerful. Cheap, but powerful.",
              imgUrl: "https://lh3.googleusercontent.com/ghQnTzItD-hOVnt5PTh7Psc2qq7m9D0tNTOh7NxncE0BBhbKlDZTbotypW5hMGv3WQuRvcsuET5xoopMieQObekffJlm6Wpmg1w0NPkBlr6vzo6CDgiwLcW3apqR-HvRjgxK_4V2bjg2v3HktYgiSL4C5WfQzA5O3lrtUhYUYhvKrGMK3WuUZAjW06hhDpXhS6yLEE8ZmpK3IH1_2Gr4fmcqUpO0DENWkV5opvJ47OpnbdHN2SWLz7GmjpMWfvq0LjSVeK74XQPLtcyytCscGBbaI1pigaLiEnxfPqUx93uTr0-qdu0MjceWVvrZDRTDSiwrYeRqv7QulsGvHxDh1APaQd55DYApSvGEiMY7NSTkwsa8nGpJsrX9UOgv_-PR2XYEQViftsMoVIFL0ZKiGLT0chez4devN90eNnYdkrrTWx_kdxTUdxMnBxYvqBopCz85idGcVEenM1UeCgsaGNhLgoKt1UdLVADYTiEySPnU9ZNqz742hqpRphAxJAV-DiClWYZi7XBvm0xrQpVCp6RBsS6qfeDLLtMpIQxCQBIcf0QulhhfuBAsrQ6HOHTFg0nilnKX0_QIqmqdOfhtXVguQttd4ddUfnav3PHyygpPmeEzMLKzsw8TUaRtmSHBQS8F5E0BKP1p7TIFezUCNetODGVysAT2JEylWOJ40vnle2rgDv67O_0N3bB7=s32-no?authuser=2"
            },
            {
              name: "Wood Key",
              desc: "This key can open wood chests. You need to find them first!",
              imgUrl: "https://lh3.googleusercontent.com/gUhz7cINH-k_fR-WhEfK5ob8TmRP6OTiHmaRDyqrvaWfWXLs2skacJLnHTVUZQREQ8GS-yt059H31HIPwEiai7reMTEuKG50_tJLOUyB1fL6CAK6txrVudZBY11-krDVzN3h89GOD72IoHImihFd1eFVv16XPvGmU9HgjMwKE6MnGrr5Rv6utGY98vDXoJ7MmCWqNVNR6hhIkgnTWj7yb6j-9I-df8opW3Uk2ojU4gJlIt7lav0gof9VQ1OEvC6N_JWAFXmZY7F8u1ABpTmVgq85x7E8AF4K-ZMRt6rjfQZXDfGWSD94mRMy9d5uU4f9U1-GvA5g1fhoLO1hRvjTHVzAYfOi-qSt2rw5Ejwf78XRLtXHYqFiKGDazTSaVIPeiL5-u_KUCOktWOIEzfFfFoSLH4iJ53FWXNaHkuP7CNn2oM2E9Jxg-PQitLKHX3SdPRtT-GX6RGT0OJyxm_RKVzIJ_tKuBiSMbOJ5SzlUa9n6QmOrKGrrR500edgGgMRVJloWCvTUNNBn8byxfO3q8fXWNjdKQmify_-MWDaEOvTDzz7kCIXAB2aRxm-wA4PnolXYdDx8uhkEgQCIRc1853YOUBE9iWvFlfHLutWGtvzQeyJEflKU3jayqnD4lE7oy649a8BoWyQ64meq5BnX0rbo3Aj_QF-Bo4DN4-BSYI6XHL1D_WAuWHYZsBU7=s32-no?authuser=2"
            },
            {
              name : "Cursed Necklace",
              desc : "A necklace forged by a thousand demons. It holds the fang of the oldest one.",
              imgUrl: "https://lh3.googleusercontent.com/2Dz9BJUPJMn1YW2Vfll2jXzze5JrwTXGg3Ag0FeOmHg6umaeMmu2YG-iuuWzdtDcQP68MN2OVhMmrN1VFeWQia46qetgMFFJvNCEXNIVsKfNqfVAazqFN1AHVpK_Ov492L9XkMYeX2jJmRHagb110tOmim6MgPoDbejOQGphNZGml7_ss1yMzYZ6HirU8xI5ursSSbyihN87vO7uJ_POWcSpBqOnKFOWSuuqepgQ0-n2a4AeSHIL-hWt8Ru6BgNI0HKO9vLfdjJas1q_b-xjxtI1G4on_zQn-LMiMO12jrRYAhkIWWUJzi9qLBJBvVNMV04CJps3yUyXJQJBjTjxLclb2DYKi94Pw5t5nlj1FdGyaZjDbMIDz2JEpj8fiI0Po5SGstqccFXqemGqsWSWsPT4qGtXDgEgw8VLgV6QNSzPbvisfPHqQylXxU9TI41BE-B6asm5vrturjBy9SkKRfgO77tJhDKYWKjAfNLmqdXS5H0fzGEyN-Hg9_BdtA8gG_mqKH_lo5FD54plsSL-rrRdRQtUorFACWnaRjBgL2tQV1bfV-A9fcfzKc4-iwhA7-Ed4kj1bwKCc1OCSJr8tl3SbtJXob5NCduVqnKNS4p53EFM86vCXeGNbzRNidkBRBnTZVa8AXn-_j_CWEy8-4n-FT5he21Ey901e-g7Y0OLAkYXupWozz7gegDH=s32-no?authuser=2"
            },
            {
              name: "Platinum Bow",
              desc: "A bow forged by Ichk'Druga, the blacksmith, with the strongest platinum ingots available within Owlda's realm. If combined with powerful arrows, it can destroy the strongest demons",
              imgUrl: "https://lh3.googleusercontent.com/OO8af0zTl_spYzlDFedC4y4etEpDNmOdWTFj_OcwEW-Qw71AI4bKiQdQLj8zzyeUTpjRL4mu1HFMq8JZjlvgFMN8x0tx1XlC3FrHSTBTglwJIOXXqijRJSNhbLlK_k0Pdi1hevpod6LZekjb0PO_2cUfbUJGkni4PFuyhdxRwcr8Ni450n27Mwy5OtKPy1bwvIRiZCRarNEFjdNKqPsHRdDfB2zfu5kdhgZlWaeNl774vOZRKoKYyIHA71cct8geMSXxm5s4O6Ya_JnwSyrf3WrBZXnwyMrqxK9KwKhLWpGOOfT-txZNBwcV_n4-VoFVBwv_C2YeQYf8dpi6FXF7ce55Smlv9RFn3i5xkeR0mRY5RKi1A-lQTVb_CD6zoPogeK7dQaQgOFK0rFUZCt-eC2nJb15Rq2XWlg2WExa2IT_MltlbMWNZOS-4CdtfgSU0FvFUQc98CbJu7Sl5gcn6WL2PKjRNwr3ONe4C6aMdqbQSeLH2lwWbHQLYcDFXscRfvS8c_Db_vv1ys2_isXQmMgCVHl3ihwtqblbv4rgf1OMjaICA5zLzDyn3qcDuKFm4dhT17fgUpIm8P2_GwNubp0L5efk7XbkIW5-hxZ3fFPgH0SUpvMtacZy4eFNZPBRI-4Zndl8Ell3oxuKqMEB5ZN-t5rX4ySuOtHnnJlW9FThITILs13bo8Ek7MHY1=s32-no?authuser=2"
            }
          ]
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
        items = {this.state.items}
        goToItemDesc = {this.goToItemDesc}
      />});
    }

    goToForge = () =>{
      this.setState({currentView:<Forge
        returnToMainMenu = {this.returnToMainMenu}
        addItem = {this.addItem}
        items = {this.state.items}
      />});
    }
    
    goToItemDesc = (name,desc,imgUrl) =>{
      let temp = <ItemCard
        ItemName = {name}
        ItemDescription = {desc}
        ItemImgUrl = {imgUrl}
        goToInventory = {this.goToInventory}
      />
      this.setState({currentView : temp});
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
