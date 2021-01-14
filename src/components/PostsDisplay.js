import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post'
import PostInputs from './PostInputs'
import './PostsDisplay.css'
import Auth from './Auth'


export default class PostsDisplay extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            toggleAorE: false,
            editingPost: {},
            searchInput: '',
            isAdmin: false,
            toggleAdminLogin: false

        }
    }

    updatePosts = newPosts => {
        this.setState({posts: newPosts})
    }

    componentDidMount() {
        axios.get('/api/posts').then(res => {
            this.setState({ posts: res.data })
        })
    }

    addPost = (title, content, img) => {
        console.log({ title }, { content }, { img })
        axios.post('/api/post', { title, img, content }).then(res => {
            this.setState({ posts: res.data })
            this.toggle()
        })
    }

    toggle = (id) => {
        if (id) {
            console.log('hit true', id)
            const post = this.state.posts.find(el => el.id === id)
            this.setState({ toggleAorE: !this.state.toggleAorE, editingPost: post })
        } else {
            console.log('hit false', id)
            this.setState({ toggleAorE: !this.state.toggleAorE, editingPost: {} })
        }
    }



    savePost = (title, content, img, id) => {
        axios.put(`/api/post/${id}`, {title, content, img}).then(res=> {
            this.setState({
                posts: res.data,
                toggleAorE: false
            })
        })
    }

    handleSearch = (val) => {
        this.setState({ searchInput: val })
    }

    toggleAdmin() {
        this.setState({ isAdmin: !this.state.isAdmin })
    }

    submitCredentials = () => {
        this.setState({ isAdmin: true})
        this.toggleLogin()
    }

    toggleLogin = () => {
        this.setState({
            toggleAdminLogin: !this.state.toggleAdminLogin
        })
    }

    render() {

        console.log(this.state.posts)
        const filteredPosts = this.state.posts.filter(post => {
            return post.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
                || post.content.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })
        return (
            <div>

                {this.state.isAdmin && <button onClick={() => {
                    this.state.toggleAdminLogin && this.toggleLogin()
                    this.toggleAdmin()
                }
                    }>Logout</button>}

                <input placeholder='Search' onChange={(e) => this.handleSearch(e.target.value)} />
              
                {filteredPosts.map(post => (
                        <Post
                            isAdmin={this.state.isAdmin}
                            toggle={this.toggle}
                            deletePost={this.deletePost}
                            key={post.id}
                            id={post.id}
                            {...post}
                            updatePosts={this.updatePosts}
                        />
                    ))
                }
            </div>
        )
    }
}