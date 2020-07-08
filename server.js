const express = require('express')
const Mock = require('mockjs')
const app = express()


app.get('/', (req, res) => {
    var data = Mock.mock({
        'list|1-20': [{
            'name|3-5': /[a-z][A-Z]/,
            'age|20-30': 30,
            'gender|1': true
        }]
    })
    res.end(JSON.stringify(data,null,4))
})

app.listen(3000)