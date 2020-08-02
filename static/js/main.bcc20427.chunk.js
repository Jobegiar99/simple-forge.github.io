(this["webpackJsonpsimple-forge"]=this["webpackJsonpsimple-forge"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),o=n(4),i=n(3),s=n(0),c=n.n(s),l=n(6),m=n.n(l),u=(n(13),n(14),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"menuDiv"},c.a.createElement("h1",{align:"center"},"Welcome to Simple-Forge"),c.a.createElement("p",{align:"center"},'Click "Show Inventory" to check your items',c.a.createElement("br",null),'Click "Forge a new item" to forge a new item'),c.a.createElement("button",{className:"showInventory",onClick:this.props.goToInventory},"Show inventory"),c.a.createElement("button",{className:"forgeItem",onClick:this.props.goToForge},"Forge a new Item"))}}]),n}(c.a.Component)),g=(n(15),n(16),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).clickHandler=function(){e.props.goToItemDesc(e.props.name,e.props.desc,e.props.imageURL)},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{class:"IICDiv"},c.a.createElement("img",{class:"itemImg",src:this.props.imageURL,alt:this.props.title,onClick:this.clickHandler}),c.a.createElement("h1",null," ",this.props.name," "))}}]),n}(c.a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.items.length;t++){var n=c.a.createElement(g,{name:this.props.items[t].name,desc:this.props.items[t].desc,imageURL:this.props.items[t].imgUrl,goToItemDesc:this.props.goToItemDesc});e.push(n)}return c.a.createElement("div",null,c.a.createElement("div",{class:"inventoryDiv",align:"center"},c.a.createElement("h1",null,"Inventory"),c.a.createElement("h3",null,"Click on any item's image to view it's information"),c.a.createElement("div",{class:"inventoryObjects",align:"center"},e),c.a.createElement("button",{class:"inventoryButtonReturn",onClick:this.props.returnToMainMenu},"Return to Main Menu")))}}]),n}(c.a.Component),h=n(7),f=(n(17),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).updateInput=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.forgeItem=function(t){if(t.preventDefault(),""!=e.state.name&&""!=e.state.description&&""!=e.state.imgUrl){for(var n=!1,a=0;a<e.props.items.length;a++)e.props.items[a].name==e.state.name&&(n=!0);n?alert("An item with the name of ".concat(e.state.name," already exists")):(alert("".concat(e.state.name," has been forged")),e.props.addItem(e.state.name,e.state.description,e.state.imgUrl),e.setState({name:"",description:"",imgUrl:""}),e.props.returnToMainMenu())}else alert("Please fill all the information to forge a new item")},e.state={name:"",description:"",imgUrl:"",items:null},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{id:"forgeDiv"},c.a.createElement("form",null,c.a.createElement("label",{className:"forgeLabel"},"Object's Name"),c.a.createElement("input",{className:"forgeInput",name:"name",maxLength:"16",value:this.state.name,onChange:this.updateInput}),c.a.createElement("label",{className:"forgeLabel"},"Object's Description"),c.a.createElement("input",{className:"forgeInput",name:"description",value:this.state.description,onChange:this.updateInput}),c.a.createElement("label",{className:"forgeLabel"},"Object's Image URL"),c.a.createElement("input",{className:"forgeInput",name:"imgUrl",value:this.state.imgUrl,onChange:this.updateInput}),c.a.createElement("button",{id:"buttonForgeItem",onClick:this.forgeItem},"FORGE ")),c.a.createElement("button",{id:"forgeButtonReturn",onClick:this.props.returnToMainMenu},"Return to Main Menu"))}}]),n}(c.a.Component)),d=(n(18),function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{class:"itemInfoCard",style:this.props.isVisible},c.a.createElement("h1",{id:"itemName"},this.props.ItemName),c.a.createElement("img",{id:"itemImage",src:this.props.ItemImgUrl}),c.a.createElement("p",{id:"itemDescription"},this.props.ItemDescription),c.a.createElement("button",{id:"IICButton",onClick:this.props.goToInventory},"return"))}}]),n}(c.a.Component)),v=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).returnToMainMenu=function(){e.setState({currentView:c.a.createElement(u,{goToInventory:e.goToInventory,goToForge:e.goToForge})})},e.goToInventory=function(){e.setState({currentView:c.a.createElement(p,{returnToMainMenu:e.returnToMainMenu,items:e.state.items,goToItemDesc:e.goToItemDesc})})},e.goToForge=function(){e.setState({currentView:c.a.createElement(f,{returnToMainMenu:e.returnToMainMenu,addItem:e.addItem,items:e.state.items})})},e.goToItemDesc=function(t,n,a){var r=c.a.createElement(d,{ItemName:t,ItemDescription:n,ItemImgUrl:a,goToInventory:e.goToInventory});e.setState({currentView:r})},e.addItem=function(t,n,a){var r={name:t,desc:n,imgUrl:a},o=e.state.items;o.push(r),e.setState({items:o}),console.log(e.state.items)},e.state={currentView:c.a.createElement(u,{goToInventory:e.goToInventory,goToForge:e.goToForge}),items:[{name:"Fire Crystal",desc:"A crystal made of fire. It burns uppon contact",imgUrl:"https://lh3.googleusercontent.com/YYZRx-qW1r3_8YnuZrDfn2oBTNSFzaSlJDCmWPmVYVON2MYXf7pO01gyhvLB3WO4fwBL6fc0NxAOXafGqhqCJ5L-tVk45_3Y89gpzZdmfKqu-lKiOtg2O9sz3si0zGoEmNraDKe2NpY7JXJ7-R7ririNLwQxHN81J5F_3I1YUYE-3uyCCmdYEQLLhMNE05tJhYCkVmSDBbzHi1FLBzouvzk-6i1wIFjwyWbM6rPlx71N_x8jAov7O75qP_wxFd0PinkMrAOo5N7NJeg9tMMPe4PKX_4B_5IamR9eIeIBM8rjvgdVGkgEz-BKuvwTaHf54fOq_IXZIR5gu-y1tqpoDE9sbQsVLScjF1feGcNyPwxHL8lZrbrNFNIRERHignlaYEPMCOxGHIW3JT8wn7pZ4fR2hcHCvpvIcZkEwJ0lIv-kx9tA1fHzT2eLx1Jic20XPUgg8est0tBS4VnMZvorxI_C-jCUDYspoGvsAod0lC2Vr8v2BVP54Du8cQhJIinPlV2xsaNo3sPepqsIlm2N0pOExqEQm0sHDJ2uH23pOyWWHeYosvrQ1LIrhwu2kxvcTTxO1WRm68si2gvPGxv9RfGNZi7Jl6tURnPSQDeL5XAZ684VUdQjTqQ5qe3r1bJ3jH1GuM_9CmTidUXoxeC4Sgw4Be0bnQY7nrFTugpFiUPjc52H7XqMpT5NZT3r=s32-no?authuser=2"},{name:"Gold Coin",desc:"This gold coin can help you buy something powerful. Cheap, but powerful.",imgUrl:"https://lh3.googleusercontent.com/ghQnTzItD-hOVnt5PTh7Psc2qq7m9D0tNTOh7NxncE0BBhbKlDZTbotypW5hMGv3WQuRvcsuET5xoopMieQObekffJlm6Wpmg1w0NPkBlr6vzo6CDgiwLcW3apqR-HvRjgxK_4V2bjg2v3HktYgiSL4C5WfQzA5O3lrtUhYUYhvKrGMK3WuUZAjW06hhDpXhS6yLEE8ZmpK3IH1_2Gr4fmcqUpO0DENWkV5opvJ47OpnbdHN2SWLz7GmjpMWfvq0LjSVeK74XQPLtcyytCscGBbaI1pigaLiEnxfPqUx93uTr0-qdu0MjceWVvrZDRTDSiwrYeRqv7QulsGvHxDh1APaQd55DYApSvGEiMY7NSTkwsa8nGpJsrX9UOgv_-PR2XYEQViftsMoVIFL0ZKiGLT0chez4devN90eNnYdkrrTWx_kdxTUdxMnBxYvqBopCz85idGcVEenM1UeCgsaGNhLgoKt1UdLVADYTiEySPnU9ZNqz742hqpRphAxJAV-DiClWYZi7XBvm0xrQpVCp6RBsS6qfeDLLtMpIQxCQBIcf0QulhhfuBAsrQ6HOHTFg0nilnKX0_QIqmqdOfhtXVguQttd4ddUfnav3PHyygpPmeEzMLKzsw8TUaRtmSHBQS8F5E0BKP1p7TIFezUCNetODGVysAT2JEylWOJ40vnle2rgDv67O_0N3bB7=s32-no?authuser=2"},{name:"Wood Key",desc:"This key can open wood chests. You need to find them first!",imgUrl:"https://lh3.googleusercontent.com/gUhz7cINH-k_fR-WhEfK5ob8TmRP6OTiHmaRDyqrvaWfWXLs2skacJLnHTVUZQREQ8GS-yt059H31HIPwEiai7reMTEuKG50_tJLOUyB1fL6CAK6txrVudZBY11-krDVzN3h89GOD72IoHImihFd1eFVv16XPvGmU9HgjMwKE6MnGrr5Rv6utGY98vDXoJ7MmCWqNVNR6hhIkgnTWj7yb6j-9I-df8opW3Uk2ojU4gJlIt7lav0gof9VQ1OEvC6N_JWAFXmZY7F8u1ABpTmVgq85x7E8AF4K-ZMRt6rjfQZXDfGWSD94mRMy9d5uU4f9U1-GvA5g1fhoLO1hRvjTHVzAYfOi-qSt2rw5Ejwf78XRLtXHYqFiKGDazTSaVIPeiL5-u_KUCOktWOIEzfFfFoSLH4iJ53FWXNaHkuP7CNn2oM2E9Jxg-PQitLKHX3SdPRtT-GX6RGT0OJyxm_RKVzIJ_tKuBiSMbOJ5SzlUa9n6QmOrKGrrR500edgGgMRVJloWCvTUNNBn8byxfO3q8fXWNjdKQmify_-MWDaEOvTDzz7kCIXAB2aRxm-wA4PnolXYdDx8uhkEgQCIRc1853YOUBE9iWvFlfHLutWGtvzQeyJEflKU3jayqnD4lE7oy649a8BoWyQ64meq5BnX0rbo3Aj_QF-Bo4DN4-BSYI6XHL1D_WAuWHYZsBU7=s32-no?authuser=2"},{name:"Cursed Necklace",desc:"A necklace forged by a thousand demons. It holds the fang of the oldest one.",imgUrl:"https://lh3.googleusercontent.com/2Dz9BJUPJMn1YW2Vfll2jXzze5JrwTXGg3Ag0FeOmHg6umaeMmu2YG-iuuWzdtDcQP68MN2OVhMmrN1VFeWQia46qetgMFFJvNCEXNIVsKfNqfVAazqFN1AHVpK_Ov492L9XkMYeX2jJmRHagb110tOmim6MgPoDbejOQGphNZGml7_ss1yMzYZ6HirU8xI5ursSSbyihN87vO7uJ_POWcSpBqOnKFOWSuuqepgQ0-n2a4AeSHIL-hWt8Ru6BgNI0HKO9vLfdjJas1q_b-xjxtI1G4on_zQn-LMiMO12jrRYAhkIWWUJzi9qLBJBvVNMV04CJps3yUyXJQJBjTjxLclb2DYKi94Pw5t5nlj1FdGyaZjDbMIDz2JEpj8fiI0Po5SGstqccFXqemGqsWSWsPT4qGtXDgEgw8VLgV6QNSzPbvisfPHqQylXxU9TI41BE-B6asm5vrturjBy9SkKRfgO77tJhDKYWKjAfNLmqdXS5H0fzGEyN-Hg9_BdtA8gG_mqKH_lo5FD54plsSL-rrRdRQtUorFACWnaRjBgL2tQV1bfV-A9fcfzKc4-iwhA7-Ed4kj1bwKCc1OCSJr8tl3SbtJXob5NCduVqnKNS4p53EFM86vCXeGNbzRNidkBRBnTZVa8AXn-_j_CWEy8-4n-FT5he21Ey901e-g7Y0OLAkYXupWozz7gegDH=s32-no?authuser=2"},{name:"Platinum Bow",desc:"A bow forged by Ichk'Druga, the blacksmith, with the strongest platinum ingots available within Owlda's realm. If combined with powerful arrows, it can destroy the strongest demons",imgUrl:"https://lh3.googleusercontent.com/OO8af0zTl_spYzlDFedC4y4etEpDNmOdWTFj_OcwEW-Qw71AI4bKiQdQLj8zzyeUTpjRL4mu1HFMq8JZjlvgFMN8x0tx1XlC3FrHSTBTglwJIOXXqijRJSNhbLlK_k0Pdi1hevpod6LZekjb0PO_2cUfbUJGkni4PFuyhdxRwcr8Ni450n27Mwy5OtKPy1bwvIRiZCRarNEFjdNKqPsHRdDfB2zfu5kdhgZlWaeNl774vOZRKoKYyIHA71cct8geMSXxm5s4O6Ya_JnwSyrf3WrBZXnwyMrqxK9KwKhLWpGOOfT-txZNBwcV_n4-VoFVBwv_C2YeQYf8dpi6FXF7ce55Smlv9RFn3i5xkeR0mRY5RKi1A-lQTVb_CD6zoPogeK7dQaQgOFK0rFUZCt-eC2nJb15Rq2XWlg2WExa2IT_MltlbMWNZOS-4CdtfgSU0FvFUQc98CbJu7Sl5gcn6WL2PKjRNwr3ONe4C6aMdqbQSeLH2lwWbHQLYcDFXscRfvS8c_Db_vv1ys2_isXQmMgCVHl3ihwtqblbv4rgf1OMjaICA5zLzDyn3qcDuKFm4dhT17fgUpIm8P2_GwNubp0L5efk7XbkIW5-hxZ3fFPgH0SUpvMtacZy4eFNZPBRI-4Zndl8Ell3oxuKqMEB5ZN-t5rX4ySuOtHnnJlW9FThITILs13bo8Ek7MHY1=s32-no?authuser=2"}]},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{align:"center"},this.state.currentView)}}]),n}(c.a.Component);m.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.bcc20427.chunk.js.map