import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./clock"


class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            seconds:0
        }
        setInterval(()=>{
            this.setState({
                seconds: this.state.seconds + 1
            })

        },1000)
    }
    render(){
       
     return <div>
          {/* <h1>{formaTime(this.state.seconds)}</h1> */}
           <div><Clock/></div>

         </div>
   
    }
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Timer />, rootElement);

