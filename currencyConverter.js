var AcctBal=require('./randomNumberGen');


var currencyConvert=function(){
  var num=AcctBal(100,1000000);
  num=num.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
  });
  return '$'+num;
}

 module.exports=currencyConvert;
