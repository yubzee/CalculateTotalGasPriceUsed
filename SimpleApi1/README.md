The simple App contains a Transaction-checker.js and he ethClient.js
the ethClient contains module that makes it easy to connect to your Infura nodes.
The Transaction-Checker.js contains an async function getTransactionsByAccount(myaccounts,noOfBlocks) that takes two(2) parameters. the first parameter is an array of ethereum addresses and the second parameter is the number of 
blocks to be accessed.
Note : Ethereum blocked get mined approximately every 15seconds. that is approximately 6000 blocks get mined in a day

the getTransactionsByAccount(myaccounts,noOfBlocks) function code contains a StartBlockNumber and an EndBlockNumber. this will enable us to get the total number of blocks we wish
to traverse. so, to traverse all of the blocks mined within the last 24hours, it means we would be traversing an approximate of 6000 blocks

the function code also gets the total gasPriced used for each ethereum address passed as an arguement.

Finally, Index.js is the main entry point of the application and this is where we explicitly call the getTransactionsByAccount(myaccounts,noOfBlocks) function and the helper
functions to get connected to our Infura nodes.

Dependency

our only dependency is web3.
so make sure you npm install that.



