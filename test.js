var Mock = require('mockjs')
var data = Mock.mock({
    'list|3': [1,2,3]
})
console.log(JSON.stringify(data,null,4))

