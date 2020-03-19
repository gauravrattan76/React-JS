import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
       return this.state.isLoggedIn && <div>Hello Gaurav Rattan</div>
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Hello Gaurav</div>:
        //     <div>Hello Guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Gaurav</div>
        // }
        // else{
        //     message = <div>Hello Guest</div>
        // }
        // return message
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Gaurav
        //     </div> 
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //         Welcome Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
