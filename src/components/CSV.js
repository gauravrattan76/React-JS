import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
 
class CSV extends Component {

  render() {
    return (
      <CSVReader onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)} />
    )
  }
}
 
// ReactDOM.render(<App />, document.getElementById('root'))

export default CSV