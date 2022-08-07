<h1><b>JAVASCRIPT</b></h1>
JavaScript is a lightweight, cross-platform, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages.

<h2>Syntax</h2>

```
<script>
    // JavaScript Code
</script>
```
<h2><b>Javascript Data Types</b></h2>

Javascript has two types of Data tpes: 
<li>Primitive Data types</li> 
 <li>Non-Primitive Data types</li>
<br>
<h3><b>Primitive Data Types</b></h3>
<li>Number</li>
<li>String</li>
<li>Boolean</li>
<li>Undefined</li>
<li>Null</li>
<li>Object</li>
<li>Symbol</li>
<br>
<h3><u>Numbers:</u></h3>

A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

<h3><u>String:</u></h3>

The string data type in JavaScript can be any group of characters enclosed by a single or double-quotes or by backticks.

<h3><u>Boolean:</u></h3>

The boolean data type has only two values, true and false. It is mostly used to check a logical condition. Thus Booleans are logical data types which can be used for comparison of two variables or to check a condition.

<h3><u>Undefined:</u></h3>

Undefined data type means a variable that is not defined. The variable is declared but doesn’t contain any value.

<h3><u>Null:</u></h3>

The null in JavaScript is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

<h3><u>Symbol:</u></h3>

The ‘symbol’ data type is new in es6. It is one of the new features of es6. The symbol data type defines a property of an object which is private to the object. It refers to the ‘key’ of the key-value pair of an object.

<h3><b>Non-Primitive Data Types</b></h3>
<li>Object</li>
<br>
 <h3><u>Object:</u></h3>

  Object in Javascript is an entity having properties and methods. Everything is an object in javascript.
  
  The ‘object’ is a non-primitive data type in JavaScript. Arrays and Functions in JavaScript belong to the ‘object’ data type.



  <h1><b>Objects in Javascript</b></h1>

Objects, in JavaScript, is the most important data-type and forms the building blocks for modern JavaScript.

Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.

objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs.

<h3>Syntax:</h3>

```
let object_name = {
    key_name : value,
    ...
}
```

<h1><b>Array in Javascript</b></h1>

An array is a special variable, which can hold more than one value.

JavaScript arrays are resizable and can contain a mix of different data types. 

single array can store values of different data types.


<br>

<h3><b><u>Array Initialization</u></b></h3>

An array in JavaScript can be defined and initialized in two ways, array literal and Array constructor syntax.

<b>1. Array Literal</b>

Array literal syntax is simple. It takes a list of values separated by a comma and enclosed in square brackets.

<b>Syntax:</b>
```
var <array-name> = [element0, element1, element2,... elementN];
```

<b>2. Array Constructor</b>

You can initialize an array with Array constructor syntax using new keyword.

The Array constructor has following three forms.

<b>Syntax:</b>
```
var arrayName = new Array();

var arrayName = new Array(Number length);

var arrayName = new Array(element1, element2, element3,... elementN);
```

<h1><b>String</b></h1>

In JavaScript, strings are used to represent and work with a sequence of characters. A string can represent an object as well as the primitive data type. JavaScript automatically converts primitive strings to String objects so that it's possible to use String methods and access properties even for primitive strings.

<br>

<h1><b>Truthy and Falsy value</b></h1>

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

<h1><b>Javascript Operators</b></h1>

<li>Assignment operator</li>
<li>Airthematic operator</li>
<li>Logical opeartor</li>
<li>Bitwise opeartor</li>
<li>Comparison opeartor</li>
<li>String opeartor</li>

<br>
<h1><b>Call by value & Call by reference</b></h1>

Pass by value in JavaScript means that a copy of the actual parameter’s value is made in memory.The original value and the copied value are independent of each other as they both have a different space in memory i.e. on changing the value inside the function, the variable outside the function is not affected.

pass by reference in JavaScript does not create a new space in the memory, instead, we pass the reference/address of the actual parameter which means, the function can access the original value of the variable. Thus, if we change the value of the variable inside the function then the original value also gets changed.


<h1><b>Mutability</b></h1>

Mutable objects can be modified (or mutated) after they’re created, and transform into other data or variables.


<h1><b>Pure Function</b></h1>

A pure function is a deterministic function. This means when a same input is passed every time, the function will return same output. It depends only on its own arguments.It wont try to change variables out of its scope.


<h1><b>Destructing</b></h1>

Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.

<h1><b>SetTimeout</b></h1>

The setTimeout() method calls a function after a number of milliseconds.

1 second = 1000 milliseconds.

<h1><b>JavaScript setInterval()</b></h1>

The setInterval() method repeats a block of code at every given timing event.

<h1><b>Callback Function </b></h1>

A function is a block of code that performs a certain task when called.

The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.


<h1><b>Promise</b></h1>

In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

<br>
A promise may have one of three states.

<li>Pending</li>
<li>Fulfilled</li>
<li>Rejected</li>

<br>
A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.


<h1><b>Promise Chaining</b></h1>

<b>JavaScript then() method</b>

The then() method is used with the callback when the promise is successfully fulfilled or resolved.

<b>JavaScript catch() method</b>

The catch() method is used with the callback when the promise is rejected or if an error occurs.


<h1><b>Async</b></h1>

We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

<h1><b>Await</b></h1>

The await keyword is used inside the async function to wait for the asynchronous operation.

<h1><b>Type Casting</b></h1>

In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

There are two types of type conversion in JavaScript.

<li>Implicit Conversion - automatic type conversion</li>
<li>Explicit Conversion - manual type conversion</li>

<br>

<h1><b>Template literals</b></h1>

Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks (``).
