import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    //gets executed when the component did mount and gets  called only once
    componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts').then(
             response => 
             this.setState({
                 posts:response.data
             })
         ).catch(
             response => console.log(response)
         )
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                List of posts
                {
                    posts.length?
                posts.map(post => <div key={post.id}>{post.title}</div>):
                null
                }
            </div>
        )
    }
}

export default PostList
