function getREG() {
    var reg = /\\/
    reg.msg = 'hello'
    return reg
}

var reg1 = getREG()
var reg2 = getREG()

console.log(reg1 == reg2)

reg1.msg = '123'
console.log(reg1.msg)
console.log(reg2.msg)
