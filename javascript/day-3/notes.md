## JavaScript Arrays

An **array** is a data structure in JavaScript used to store multiple values in a single variable. Arrays can hold different types of data (e.g., strings, numbers, objects) and are ordered, so each item has an index.

### Array Syntax
```javascript
let arrayName = [element1, element2, element3, ...];
```

### Example
```javascript
let fruits = ["apple", "banana", "cherry"];
```

### Accessing Array Elements
```javascript
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
```

## Array Methods

JavaScript provides several built-in methods to work with arrays. Let’s go over some essential ones:

### 1. `push()`
- Adds one or more elements to the **end** of an array.
- **Returns** the new length of the array.

```javascript
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### 2. `pop()`
- **Removes** the last element from an array.
- **Returns** the removed element.

```javascript
let fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop();
console.log(removed); // "cherry"
console.log(fruits); // ["apple", "banana"]
```

### 3. `shift()`
- **Removes** the first element from an array.
- **Returns** the removed element.

```javascript
let fruits = ["apple", "banana", "cherry"];
let removed = fruits.shift();
console.log(removed); // "apple"
console.log(fruits); // ["banana", "cherry"]
```

### 4. `unshift()`
- Adds one or more elements to the **beginning** of an array.
- **Returns** the new length of the array.

```javascript
let fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### 5. `slice(start, end)`
- **Extracts** a section of the array without modifying the original array.
- **Returns** a new array containing the elements from `start` to `end - 1`.

```javascript
let fruits = ["apple", "banana", "cherry", "date"];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ["banana", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry", "date"]
```

### 6. `splice(start, deleteCount, item1, item2, ...)`
- **Modifies** the array by removing, replacing, or adding elements.
- **Returns** an array of the deleted elements.

#### Removing Elements
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); // removes 1 element at index 1
console.log(fruits); // ["apple", "cherry"]
```

#### Adding Elements
```javascript
let fruits = ["apple", "cherry"];
fruits.splice(1, 0, "banana"); // inserts "banana" at index 1
console.log(fruits); // ["apple", "banana", "cherry"]
```

#### Replacing Elements
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "blueberry"); // replaces "banana" with "blueberry"
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

### 7. `concat()`
- Combines two or more arrays.
- **Returns** a new array.

```javascript
let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "date"]
```

### 8. `indexOf()`
- **Returns** the first index at which a given element is found, or `-1` if it is not present.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("date")); // -1
```

### 9. `includes()`
- **Returns** `true` if the array contains a specified element, `false` otherwise.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("date")); // false
```


These notes cover the essential array methods and offer a solid foundation for working with arrays in JavaScript. However, if you're aiming for comprehensive notes, you might want to add a few more methods and concepts, especially if this is for a more advanced audience. Here are some additional methods and details that could be helpful:

### Additional Array Methods

1. **`forEach()`**
   - Executes a provided function once for each array element.
   - Often used for iterating through each element without modifying the original array.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   fruits.forEach((fruit) => console.log(fruit));
   // Output: apple, banana, cherry
   ```

2. **`map()`**
   - Creates a new array populated with the results of calling a provided function on every element in the calling array.
   - Commonly used for transforming data.

   ```javascript
   let numbers = [1, 2, 3];
   let doubled = numbers.map((num) => num * 2);
   console.log(doubled); // [2, 4, 6]
   ```

3. **`filter()`**
   - Creates a new array with all elements that pass the test implemented by the provided function.
   - Useful for selecting specific elements from an array.

   ```javascript
   let numbers = [1, 2, 3, 4];
   let even = numbers.filter((num) => num % 2 === 0);
   console.log(even); // [2, 4]
   ```

4. **`reduce()`**
   - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - Often used for summing values or accumulating data.

   ```javascript
   let numbers = [1, 2, 3, 4];
   let sum = numbers.reduce((acc, num) => acc + num, 0);
   console.log(sum); // 10
   ```

5. **`find()`**
   - Returns the first element in the array that satisfies a provided testing function.
   - If no element matches, it returns `undefined`.

   ```javascript
   let numbers = [5, 12, 8, 130];
   let found = numbers.find((num) => num > 10);
   console.log(found); // 12
   ```

6. **`findIndex()`**
   - Returns the index of the first element that satisfies a provided testing function.
   - If no element matches, it returns `-1`.

   ```javascript
   let numbers = [5, 12, 8, 130];
   let index = numbers.findIndex((num) => num > 10);
   console.log(index); // 1
   ```

7. **`sort()`**
   - Sorts the elements of an array **in place** and returns the sorted array.
   - Be cautious with sorting numbers, as `sort()` converts values to strings by default.

   ```javascript
   let fruits = ["banana", "cherry", "apple"];
   fruits.sort();
   console.log(fruits); // ["apple", "banana", "cherry"]
   
   let numbers = [3, 1, 4, 1];
   numbers.sort((a, b) => a - b); // Numeric sort
   console.log(numbers); // [1, 1, 3, 4]
   ```

8. **`reverse()`**
   - Reverses the order of the elements in the array **in place**.

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   fruits.reverse();
   console.log(fruits); // ["cherry", "banana", "apple"]
   ```

9. **`every()`**
   - Checks if **all elements** in the array pass the test provided by a function.
   - **Returns** `true` if all elements pass, otherwise `false`.

   ```javascript
   let numbers = [2, 4, 6];
   let allEven = numbers.every((num) => num % 2 === 0);
   console.log(allEven); // true
   ```

10. **`some()`**
    - Checks if **at least one element** in the array passes the test provided by a function.
    - **Returns** `true` if any element passes, otherwise `false`.

    ```javascript
    let numbers = [1, 2, 3];
    let hasEven = numbers.some((num) => num % 2 === 0);
    console.log(hasEven); // true
    ```
