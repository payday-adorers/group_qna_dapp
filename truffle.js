var HDWalletProvider = require("truffle-hdwallet-provider");
// npm install truffle-hdwallet-provider
var mnemonic = "canal near escape honey hover night oil wealth slam mad clean hurdle"; // 12 word mnemonic

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/", 0),
            network_id: 3,
            gas: 4600000
        }, // live:
        ganache: {
            host: 'localhost',
            port: 8545,
            network_id: '*' // eslint-disable-line camelcase
        }
    },
    mocha: {
        reporter: 'eth-gas-reporter',
        reporterOptions: {
            currency: 'KRW',
            gasPrice: 5
        }
    }
};
