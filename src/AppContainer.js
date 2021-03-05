import {connect} from "react-redux";
import {BackgroundColorAC, TextColorAC} from "./store/slider";
import App from "./App";
import React from "react";
let MSTP=(state)=>({
    backgroundColor:state.backgroundColor,
    textColor: state.textColor
})
let AppHOC=(props)=>{
    let ChangeRange=(type,color,e)=>{
        type==="background"?props.BackgroundColorAC(color,e.target.value):props.TextColorAC(color,e.target.value)
    };
    return (
        <App ChangeRange={ChangeRange} {...props}/>
    )
};
export let AppContainer=connect(MSTP,{TextColorAC,BackgroundColorAC})(AppHOC);