var AcctBal=require('./randomNumberGen');


var currencyConvert=function(){
   return AcctBal(100,1000000).toLocaleString("en-US", {style: 'currency', currency: 'USD'});
}

 module.exports=currencyConvert;
