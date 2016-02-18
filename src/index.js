/**
 * Created by Admin on 18-02-2016.
 */

var fnArray = [
	function g(func) {
		console.log('g executing');
		return function g1() {
			console.log('g1 executing');
			return func() + 1;
		}
	},
	function f(func) {
		console.log('f executing');
		return function f1() {
			console.log('f1 executing');
			return func() + 1;
		}
	},
	function e(func) {
		console.log('e executing');
		return function e1() {
			console.log('e1 executing');
			return func() + 1;
		}
	},
	function d(func) {
		console.log('d executing');
		return function d1() {
			console.log('d1 executing');
			return func() + 1;
		}
	},
	function c(func) {
		console.log('c executing');
		return function c1() {
			//console.log('3');
			console.log('c1 executing');
			return func() + 1;
		}
	},
	function b(func) {
		console.log('b executing');
		return function b1() {
			console.log('b1 executing');
			return func() + 1;
		}
	},
	function a() {
		console.log('a executing');
		return function a1() {
			console.log('a1 executing');
			return 1;
		}
	}
];

var firstFunc = fnArray[fnArray.length - 1];
var fnArrayRest = fnArray.slice(0, -1);

var finalFunc = fnArrayRest.reduceRight(function(func1, func2) {

	console.log(func1);
	console.log(func2);

	return func2(func1);

}, firstFunc());

console.log(finalFunc());

