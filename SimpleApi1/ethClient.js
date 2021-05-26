'use strict';

module.exports = Web3 => ({
    web3http: new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/eb87478903ab408398e1ba765a71e454')),
    web3: new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/eb87478903ab408398e1ba765a71e454'))
})