// This simple library abstracts out all of Ethereum, using
// Infura to get network data, making this very accessible
// to other JS projects.

var Web3 = require("web3");

var contract = require("truffle-contract");
var data = require("./build/contracts/SimpleNameRegistry.json");
var SimpleNameRegistry = contract(data);

var provider = new Web3.providers.HttpProvider("https://ropsten.infura.io");
SimpleNameRegistry.setProvider(provider);

SimpleNameRegistry.setNetwork(3); // Enforce ropsten

module.exports = {
    get: function (name, callback) {
        SimpleNameRegistry.deployed().then(function (instance) {
            return instance.names(name);
        }).then(function (address) {
            callback(null, address);
        }).catch(callback);

    }
}
