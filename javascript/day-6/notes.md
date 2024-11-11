### 📜 **JavaScript Loops**

#### 1. **For Loop**
The `for` loop is used to repeat a block of code a known number of times.

**Syntax**:
```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

**Example**:
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

- **Initialization**: Initializes a counter variable (`i = 1`).
- **Condition**: The loop runs as long as the condition is `true` (`i <= 5`).
- **Increment/Decrement**: Updates the counter after each iteration (`i++`).

---

#### 2. **While Loop**
The `while` loop repeats a block of code as long as a given condition is `true`.

**Syntax**:
```javascript
while (condition) {
    // Code to execute
}
```

**Example**:
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1, 2, 3, 4, 5
```

- It checks the condition before running the code inside the loop.

---

#### 3. **Do-While Loop**
The `do-while` loop executes the block of code **once** before checking the condition. It continues as long as the condition is `true`.

**Syntax**:
```javascript
do {
    // Code to execute
} while (condition);
```

**Example**:
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
// Output: 1, 2, 3, 4, 5
```

- The code inside the loop is executed **at least once**, even if the condition is `false`.

---

### 📜 **JavaScript Functions**

#### 1. **Function Declaration**
A traditional way of defining a function.

**Syntax**:
```javascript
function functionName(parameters) {
    // Code to execute
}
```

**Example**:
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('John');
// Output: Hello, John!
```

---

#### 2. **Function Expression**
Here, a function is assigned to a variable.

**Syntax**:
```javascript
const functionName = function(parameters) {
    // Code to execute
};
```

**Example**:
```javascript
const sum = function(a, b) {
    return a + b;
};
console.log(sum(3, 4));
// Output: 7
```

- Function expressions can be **anonymous** (without a name).

---

#### 3. **Arrow Functions (ES6)**
A shorter syntax for writing functions, introduced in ES6.

**Syntax**:
```javascript
const functionName = (parameters) => {
    // Code to execute
};
```

**Example**:
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(5, 4));
// Output: 20
```

- **Implicit return**: If the function body has only one line, you can skip the `{}` and the `return` keyword.

---

### 📜 **Function Parameters & Arguments**

- **Parameters**: Variables listed as part of the function definition.
- **Arguments**: Values passed to the function when it is called.

**Example**:
```javascript
function add(a, b) { // a, b are parameters
    return a + b;
}
console.log(add(2, 3)); // 2, 3 are arguments
// Output: 5
```

#### **Default Parameters (ES6)**
You can assign default values to parameters if no arguments are provided.

**Example**:
```javascript
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
```

---

### ✍️ **Handwritten Notes Summary**

1. **Loops**:
   - `for`, `while`, `do-while` loops allow repeating code blocks.
   - Use `for` when you know how many times to loop.
   - Use `while` when the number of iterations is uncertain.

2. **Functions**:
   - **Function Declaration**: `function myFunction() { }`
   - **Function Expression**: `const myFunction = function() { }`
   - **Arrow Function**: `const myFunction = () => { }`
   - Functions can have **parameters** with **default values**.
