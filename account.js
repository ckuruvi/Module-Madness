
var currencyConvert=require('./currencyConverter');


exports.textFunc=function(){
return 'Account balance:\n';
};

exports.balanceAmt=function (){
  return currencyConvert();
};
