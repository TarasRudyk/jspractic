//ПРОСТІ ЧИСЛА!!!!!!!!!!!!!!!!!!!!!!!
prime:
for (var i = 2; i < 10; i++){
	for (j = 2; j < i; j++){
		if (i % j == 0) continue prime;
	};
	console.log(i);
};


// ПАРНІ ЧИСЛА
var even = [];
for (var x = 0; x < 10; x++) {
	if (x % 2 == 0) {              
		even.push(x)
	};
};
console.log(even);
//НЕПАРНІ ЧИСЛА
var odd = [];
for (var x = 0; x < 10; x++) {
	if (x % 2 == 0) {              
		odd.push(x)
	};
};
console.log(odd);

// СУМА ЧМСЕЛ
function sum(x) {
	var sum = 0;
	for (i = 0; i <= x; i++){
		sum += i;
	}
	return sum;
}
console.log(sum(5));
//РЕКРУСІЯ СУМА ЧИСЕЛ
function sum1(x) {
	return (x != 1) ? x + sum1(x - 1) : 1;
};
console.log(sum(5));

//ФАКТОРІАЛ 
function fac(x){
	var fac = 1;
	for (i = 1; i <= x; i++){
		fac *= i;
	}
	return fac;
}
console.log(fac(5));
// РЕКРУСІЯ ФАКТОРІАЛ 
function factorial(n){
	return (n != 1) ? n * factorial(n - 1) : 1
};
console.log(factorial(5))

//ФІБОНАЧІ
function fibonacci(n) {
	var a = 1, b = 1;
	for (i = 3; i <= n; i++) {
		var c = a + b;
		a = b;
		b = c;
	}
	return b;
}
console.log(fibonacci(7));
//ФІБОНАЧІ РЕКРУСІЯ
function fibonacci(n) {
	return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));


// ФРМУЛА БІНЕ
function fibinet(n) {
	var fi = (1 + Math.sqrt(5)) / 2;
	return Math.pow(fi,n) / Math.sqrt(5);
};
console.log(fibinet(15))

// ВИПАДКОВЕ ЧИСЛО min max
// var min = 5,
//   max = 10;
// console.log( min + Math.random() * (max - min) );

// var arr = [12,65,65,43,6,5];
// function evenArray(array) {
// 	for (i = 0; array.length = arr; i++){
// 	return arr.count}
// }
// array = evenArray(arr);


var arr = [12,65,65,43,6,5];
var earr = [];
var oarr = [];
function evenArray() {
	for (var i = 0; i < arr.length; i++) {
		if (  (arr[i] % 2) ) {             
			earr.push(arr[i]);
		}else{
			oarr.push(arr[i]);
		}
	};
	console.log(earr);
	console.log(oarr);
	console.log(earr.length)
};
evenArray()