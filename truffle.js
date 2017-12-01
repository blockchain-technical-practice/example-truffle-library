// This is a bit unruly, and needs to be put in its own package.
// But all this preamble tells Truffle how to sign transactions on
// its own from a bip39 mnemonic (which creates addresses and private keys).
// This allows Truffle deployment to work with infura. Note we do
// this specifically when deploying to the morden network.

var fs = require("fs");
var path = require("path");

var HDWalletProvider = require("truffle-hdwallet-provider");


// Read the mnemonic from a file that's not committed to github, for security.
var mnemonic = fs.readFileSync(path.join(__dirname, "deploy_mnemonic.key"), {encoding: "utf8"}).trim();


module.exports = {
    // Specifically for morden
    networks: {
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
            network_id: 3,
            gas: 4500000,
            gasPrice: 25000000000

        }

    }
};
