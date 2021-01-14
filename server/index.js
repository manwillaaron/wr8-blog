require('dotenv').config()
const express = require('express')
const app = express()
const port = 3241
const c = require('./controller')
const massive = require('massive')
const {CONNECTION_STRING} = process.env
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db is connected')
    app.listen(port, () => console.log('listening on port ' + port))
})

// endpoints
app.get('/api/posts', c.getAllPosts)
app.post('/api/post', c.addPost)
app.delete('/api/post/:id', c.deletePost)
app.put('/api/post/:id', c.editPost)

