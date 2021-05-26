'use strict';




module.exports = web3 => {
   

    var totalgasprice=0;
   

    return {


       async  getTransactionsByAccount(myaccounts,noOfBlocks) {
       
         var    endBlockNumber = await web3.eth.getBlock('latest');
            console.log("Using endBlockNumber: " + endBlockNumber.number);
       
       
         var    startBlockNumber = endBlockNumber.number - noOfBlocks;
            console.log("Using startBlockNumber: " + startBlockNumber);
       
        
            for (var n = 0; n < myaccounts.length; n++) {

                console.log("Searching for transactions to/from account \"" + myaccounts[n] + "\" within blocks " + startBlockNumber + " and " + endBlockNumber.number);


                for (var i = startBlockNumber; i <= endBlockNumber.number; i++) {

                    console.log("Searching block " + i);

                    var block = await web3.eth.getBlock(i, true);

                    if (block != null && block.transactions != null) {

                        block.transactions.forEach(function (e) {



                            if (myaccounts[n] == e.from || myaccounts[n] == e.to ) {

                            totalgasprice = totalgasprice + parseInt(e.gasPrice);

                            }
                            else {

                                totalgasprice += 0;
                            }

                           




                        });
                    }
                }

                console.log("  Address          : " + myaccounts[n] + "\n"
                    + "   total Gas Price           : " + totalgasprice);
            }
            
    }

    }

    }



  



