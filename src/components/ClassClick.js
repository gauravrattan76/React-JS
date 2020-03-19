import React, { Component } from 'react'

export class ClassClick extends Component {

    handleClick(){
        console.log("event from class");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click class</button>
            </div>
        )
    }
}

export default ClassClick
