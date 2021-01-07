import React, { Component } from 'react'
import axios from 'axios'
import './PostInputs.css'

export default class PostInputs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleI: '',
            contentI: '',
            imgI: ''
        }
    }

    componentDidMount() {
        if (this.props.editingPost.id) {
            const { title, content, img } = this.props.editingPost
            this.setState({
                titleI: title,
                contentI: content,
                imgI: img
            })
        }
    }

    add = () => {
        const { titleI, contentI, imgI } = this.state
        this.props.addPost(titleI, contentI, imgI)
        this.setState({
            titleI: '',
            contentI: '',
            imgI: '',
        })
    }

    save=()=>{
        const {titleI, contentI, imgI} = this.state
        this.props.savePost(titleI, contentI, imgI, this.props.editingPost.id)
    }


    handleChange = (target) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    render() {
        const { titleI, contentI, imgI } = this.state
        return (
            <div className="input-container">
                <div className='input-form'>
                    <input
                        placeholder='Title'
                        value={titleI}
                        name='titleI'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                    <input
                        placeholder='Image'
                        value={imgI}
                        name='imgI'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                    <textarea
                        placeholder='Content'
                        value={contentI}
                        name='contentI'
                        onChange={(e) => this.handleChange(e.target)}
                    />
                    {this.props.editingPost.id ? (
                        <button onClick={this.save}>Save</button>
                        ):(
                        <button  onClick={this.add}>Submit</button>
                        )}
                    
                </div>
            </div>
        )
    }
}