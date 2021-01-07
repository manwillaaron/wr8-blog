import React from 'react'
import './Post.css'
import axios from 'axios'

const Post = ({ title, img, content, updatePosts ,id,toggle}) => {
    function deletePost(){
        axios.delete('/api/post/'+ id).then(res => updatePosts(res.data))
        .catch(err => alert('Could not delete'))
    }
    return (
        <div >
            <h3>{title}</h3>
            <img src={img} />
            <p>{content}</p>
            <button onClick={deletePost}>Delete</button>
            <button onClick={()=>toggle(id)}>Edit</button>
        </div>
    )
}
export default Post