(function () {
	var globalScope = this,
		exports = {};
		
		exports.powerOf4 = function (n) {
		var isPowerOf4 = false;
		
			if ((typeof n === "number") && (n % 4 === 0) && !(n === 0)) {
				isPowerOf4 = true;	
			}
			
		return isPowerOf4;
		}
	globalScope.powerOf4Module = exports;
})();

console.log(powerOf4Module.powerOf4(undefined));
console.log(powerOf4Module.powerOf4("16"));
console.log(powerOf4Module.powerOf4(16));