let Web3 = require('web3')

console.log("window web3:", window.web3.version)

let web3 = new Web3()
console.log("web3:", web3.version)
// 设置网路

// 使用用户自己的provider来填充web3
web3.setProvider(window.web3.currentProvider)
module.exports = web3