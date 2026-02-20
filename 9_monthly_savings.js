function monthlySavings(payments, livingCost){
    if(!Array.isArray(payments) || typeof livingCost!=="number"){
        return "invalid input";
    }
    var total=0;
    var tax=0;
    for(var i=0;i<payments.length;i++){
        total+=payments[i];
        if(payments[i]>=3000){
            tax+=payments[i]*0.20;
        }
    }
    var savings=total-tax-livingCost;
    if(savings<0) return "earn more";
    return savings;
}

// example
console.log(monthlySavings([1000,2000,3000,5400],5000));
