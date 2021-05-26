

const Web3 = require('web3');


const BuildTransactionChecker = require('./transaction-checker');

const CreateClient = require('./ethClient');

const { web3http, web3 } = CreateClient(Web3);
const { getTransactionsByAccount }= BuildTransactionChecker(web3)


const myaccount = ['ADDRESS 1', 'ADDRESS 2', 'ADDRESS 3'];
const noOfBlockstoAccess = 2;

getTransactionsByAccount(myaccount,noOfBlockstoAccess)

