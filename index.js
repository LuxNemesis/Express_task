const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Server respone on / route")
})

app.get('/workers', (req, res) => {

    let workers = [
        {
            name: 'Levan',
            id: 270561,
            age: '34',
        },
        {
            name:'Devon',
            id:270562,
            age:'47'
        }
    ]


    res.json(workers)
})





app.listen(3000, () => {
    console.log("Server started on 3000 port")
})


