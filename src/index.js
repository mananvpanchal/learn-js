/**
 * Created by Admin on 18-02-2016.
 */

function f(x) {
	return 2*x + 4;
}

function g(x) {
	return x*x;
}

function compose(fn, gn) {
	return function(x) {
		return fn(gn(x));
	}
}

var composed = compose(f, g);

console.log(composed(2));