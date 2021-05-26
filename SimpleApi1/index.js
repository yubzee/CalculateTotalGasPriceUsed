

const Web3 = require('web3');


const BuildTransactionChecker = require('./transaction-checker');

const CreateClient = require('./ethClient');

const { web3http, web3 } = CreateClient(Web3);
const { getTransactionsByAccount }= BuildTransactionChecker(web3)


const myaccount = ['0x5E166CAC16dff358bf7ffb16A34698fF9Fe98c21', '0x5E166CAC16dff358bf7ffb16A34698fF9Fe98c21', '0x5E166CAC16dff358bf7ffb16A34698fF9Fe98c21'];
const noOfBlockstoAccess = 2;

getTransactionsByAccount(myaccount,noOfBlockstoAccess)

