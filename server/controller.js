const posts = require('./data')
let id = 21

module.exports = {
    addPost: (req, res) => {
        posts.unshift({id, ...req.body})
        id++
        res.status(200).send(posts)
    },
    getAllPosts: (req, res) => {
        res.status(200).send(posts)
    },
    deletePost:(req, res)=>{
        const {id} = req.params
        const index = posts.findIndex(post => post.id === +id)
        posts.splice(index, 1)
        res.status(200).send(posts)
    },
    editPost: (req,res)=>{
        console.log(req.body)
        const {title, img, content } = req.body
        const {id} = req.params
        const index = posts.findIndex(post => post.id === +id)
        const newPost = {id, title, img , content}
        posts[index] = newPost
        // posts.splice(index, 1, newPost)
        res.status(200).send(posts)
    }
 
}