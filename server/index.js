const express = require('express')
const app = express()
const port = 3241
const c = require('./controller')
app.use(express.json())

// endpoints
app.get('/api/posts', c.getAllPosts)
app.post('/api/post', c.addPost)
app.delete('/api/post/:id', c.deletePost)
app.put('/api/post/:id', c.editPost)

app.listen(port,
    () => console.log('listening on port ' + port))