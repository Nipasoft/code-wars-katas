(function () {
	var globalScope = this,
		exports = {};
		
	exports.sumDigits = function (number) {
	  var sum = 0,
	      tempNumber = Math.abs(number);
	  
	  while(tempNumber > 0) {
	    sum = sum + (tempNumber % 10);
	    tempNumber =  Math.floor(tempNumber/10);
	  }
      return sum
	}	
	
	globalScope.codeWarsModule = exports;	
})()

console.log(codeWarsModule.sumDigits(10));