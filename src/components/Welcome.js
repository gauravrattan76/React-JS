import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name,heroName} = this.props
        //const {state1,state2} = this.state
        return (
            <div>
                <h1>Hello {name} from the react component and heroname {heroName}!!!</h1>
                {/* {this.props.children} */}
            </div>
        )
    }
}

export default Welcome