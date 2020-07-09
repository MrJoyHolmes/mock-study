var Mock = require('mockjs')


var Random = Mock.Random
var data0 = Random.email()
// => "n.clark@miller.io"
var data1 = Mock.mock('@boolean')
// => "y.lee@lewis.org"
var data2 = Mock.mock( { email: '@email' } )
// => { email: "v.lewis@hall.gov" }

console.log(JSON.stringify(data0,null,4))
console.log(JSON.stringify(data1,null,4))

console.log(JSON.stringify(data2,null,4))

