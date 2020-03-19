import React from 'react'

// function Greet(){
//     return <h1>Hello Gaurav Rattan!!</h1>
// }

// const Greet = ({name,heroName}) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello {name} how are you buddy and heroname is {heroName}!!!</h1>
//             {/* {props.children} */}
//         </div>
//     )
// }

const Greet = props => {
    const {name,heroName} = props
    // console.log(props);
    return (
        <div>
            <h1>Hello {name} how are you buddy and heroname is {heroName}!!!</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet