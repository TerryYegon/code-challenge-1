function estimateTransactionFee() {
    let input = prompt("leo unatuma ngapi?");
    let amountToSend = Number(input);

    if(amountToSend <= 0) {
        console.log("please enter a valid amount to send");
    }

    const transactionFee = (amountToSend * 0.015); // in ksh
    const minFee = 10; //in ksh
    const maxFee = 70;//in ksh

    if(transactionFee < 10) {
        console.log(` calculated fee is ${minFee} ksh`);
        console.log(`The total amount is ${amountToSend + minFee} ksh`);
        console.log("Thankyou for choosing us!");
    } else if(transactionFee >= 10 && transactionFee<= 70) {
        console.log(`calculated fee is ${transactionFee}ksh`);
        console.log(`The total amount is ${amountToSend + transactionFee} ksh`);
        console.log("Thankyou for choosing us!"); 
    }
    


    else if(transactionFee > 70) {
        console.log(`calculated fee is ${maxFee} ksh`);
        console.log(`The total amount is ${amountToSend + maxFee} ksh`);
        console.log("Thankyou for choosing us!");
    }

    
}

estimateTransactionFee();