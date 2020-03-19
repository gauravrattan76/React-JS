import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             UserName:"",
             Comments:"",
             Topic:"React"
        }
    }

    handleUserNameChange= (event) =>{
       this.setState({
        UserName:event.target.value
       })
    }
    handleCommentsChange = (event) =>{
        this.setState({
            Comments:event.target.value
           })
    }

    handleTopicChange = (event) =>{
        this.setState({
            Topic:event.target.value
           })
    }

    handleSubmit = (event)=>{
       
     alert(`${this.state.UserName} and name is ${this.state.Comments} and the topic is ${this.Topic}`)
     event.preventDefault();
    }
    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>UserName:</label>
                   <input type="text" value={this.state.UserName} onChange={this.handleUserNameChange}></input>
               </div>
               <div>
                   <label>Comments:</label>
                   <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
               </div>
               <div>
                   <label>Topic:</label>
                   <select value={this.state.Topic} onChange={this.handleTopicChange}>
                       <option value="Angular">Angular</option>
                       <option value="React">React</option>
                       <option value="Vue">Vue</option>
                   </select>
               </div>
               <button type="submit">submit</button>
           </form>
        )
    }
}

export default Form
