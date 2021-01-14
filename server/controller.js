

module.exports = {
    addPost: (req, res) => {
        const db = req.app.get('db')
        const { title, content, img } = req.body
        db.add_post({ 
            title2: title, 
            content2: content, 
            img2: img 
        }).then(posts=> {
            console.log(posts)
            res.status(200).send(posts)
        })
    },
    getAllPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_all_posts().then(posts => {
            res.status(200).send(posts)
        })
    },
    deletePost: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_post([id]).then(posts=> {
            res.status(200).send(posts)
        })
    },
    editPost: (req, res) => {
        const db = req.app.get('db')
        const { title, img, content } = req.body
        const { id } = req.params
        db.edit_post([ title, content, img ,id ])
        .then(posts=>{
            res.status(200).send(posts)
        })
    }

}