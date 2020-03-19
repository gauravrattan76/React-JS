import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"Hello"
         }
         //best approcah to bind in the class constructor
         this.eventHandler =this.eventHandler.bind(this)
     }
     //this is undefined in event handler so event binding is required in react
    //  eventHandler(){
    //      this.setState({
    //          message: "Good bye"
    //      })
    //     console.log(this);
    //  }
    eventHandler = () =>
    {
       return this.setState({
            message: "Good bye"
        })
    }
     
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.eventHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.eventHandler()}>Click</button> */}
                <button onClick={this.eventHandler}>Click</button> 
            </div>
        )
    }
}

export default EventBind
