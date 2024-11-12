**JavaScript Functions**

**1. Named Function:**

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
```
- **Arguments:** `name`
- **Parameters:** `name`

---

**2. Anonymous Function:**

```javascript
let greet = function(name) {
    return "Hello, " + name + "!";
};
```
- **Arguments:** `name`
- **Parameters:** `name`

---

**3. Arrow Function:**

```javascript
let greet = (name) => {
    return "Hello, " + name + "!";
};
```
- **Arguments:** `name`
- **Parameters:** `name`

---

**4. Immediately Invoked Function Expression (IIFE):**

```javascript
(function(name) {
    console.log("Hello, " + name + "!");
})("John");
```
- **Arguments:** `name`
- **Parameters:** `name`

---

**5. Function Constructor:**

```javascript
let greet = new Function("name", "return 'Hello, ' + name + '!'");

console.log(greet("John"));
```
- **Arguments:** `name`
- **Parameters:** `name`

---

**6. Callback Function:**

```javascript
function greet(name, callback) {
    return callback(name);
}

function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John", sayHello));
```



***Questions***

1. **Calculate Area of a Rectangle:**
   Write a function called `calculateRectangleArea` that takes two parameters, `width` and `height`, and returns the area of a rectangle. Test the function with different values.

2. **Temperature Conversion:**
   Write a function called `convertToFahrenheit` that takes a temperature in Celsius as a parameter and returns the temperature converted to Fahrenheit. Test the function with different temperatures.

3. **Check if a Number is Even:**
   Write a function called `isEven` that takes a number as a parameter and returns `true` if the number is even, and `false` otherwise. Test the function with different numbers.

4. **Reverse a String:**
   Write a function called `reverseString` that takes a string as a parameter and returns the reverse of the input string. Test the function with different strings.

5. **Find the Maximum Number:**
   Write a function called `findMax` that takes an array of numbers as a parameter and returns the maximum number in the array. Test the function with different arrays.

***Answers***

1. **Calculate Area of a Rectangle:**
   ```javascript
   function calculateRectangleArea(width, height) {
       return width * height;
   }

   // Test the function
   console.log(calculateRectangleArea(5, 7)); // Output: 35
   ```

2. **Temperature Conversion:**
   ```javascript
   function convertToFahrenheit(celsius) {
       return (celsius * 9 / 5) + 32;
   }

   // Test the function
   console.log(convertToFahrenheit(20)); // Output: 68
   ```

3. **Check if a Number is Even:**
   ```javascript
   function isEven(number) {
       return number % 2 === 0;
   }

   // Test the function
   console.log(isEven(6)); // Output: true
   console.log(isEven(3)); // Output: false
   ```

4. **Reverse a String:**
   ```javascript
   function reverseString(str) {
       return str.split('').reverse().join('');
   }

   // Test the function
   console.log(reverseString('hello')); // Output: 'olleh'
   ```

5. **Find the Maximum Number:**
   ```javascript
   function findMax(numbers) {
       return Math.max(...numbers);
   }

   // Test the function
   console.log(findMax([3, 7, 2, 9])); // Output: 9
   ```

These answers provide the implementation of the functions and demonstrate how to use them with sample inputs.