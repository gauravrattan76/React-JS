import React from 'react'

const Hello = () => {
    //JSX Version
    //Each JSX is a syntactic sugar for calling the React.createElement
    //JSX internally converts into React.createElement which uses the react library
    // return(
    //     <div>
    //         <h1>This is JSX Component!!</h1>
    //     </div>
    // )
    return React.createElement('div',
        { id: 'content', className: 'mainClass' },
        React.createElement('h1', null, 'How are you buddy!!')
    )
}

export default Hello