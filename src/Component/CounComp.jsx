import React, { Component } from "react";


class CountComp extends Component{
    state ={
        Count: 1,
    }; 
    
    handlead = ()=>{
        console.log("arivu");
    }

    render(){
      return(
        <>
        <h1>Count.this.state</h1>
        <button onClick={this.handlead}>Add</button>
        </>
      )  
    }
}
export default CounComp