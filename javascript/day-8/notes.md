
### JavaScript Objects and Object Methods

#### **1. What is an Object?**
- An **object** in JavaScript is a collection of properties, where each property is a key-value pair.
- Objects can hold different types of data: strings, numbers, arrays, functions, or even other objects.

##### **Syntax:**
```javascript
const objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};
```

##### **Example:**
```javascript
const student = {
  name: "Alice",
  age: 22,
  isGraduated: true,
  courses: ["Math", "Physics", "Computer Science"]
};
```

#### **2. Accessing Object Properties**
- You can access object properties using **dot notation** or **bracket notation**.

##### **Dot Notation:**
```javascript
console.log(student.name); // Output: Alice
```

##### **Bracket Notation:**
```javascript
console.log(student["age"]); // Output: 22
```

#### **3. Adding and Modifying Properties**
- To add a new property or modify an existing one, simply use the assignment operator (`=`).

##### **Example:**
```javascript
student.grade = "A"; // Adding a new property
student.age = 23; // Modifying existing property
console.log(student);
// Output: { name: 'Alice', age: 23, isGraduated: true, courses: [...], grade: 'A' }
```

#### **4. Deleting Properties**
- Use the `delete` keyword to remove a property from an object.

##### **Example:**
```javascript
delete student.isGraduated;
console.log(student);
// Output: { name: 'Alice', age: 23, courses: [...], grade: 'A' }
```

---

### Object Methods

#### **1. What are Object Methods?**
- **Object methods** are functions that are stored as properties within an object.
- They can be used to perform actions related to the object.

##### **Example:**
```javascript
const car = {
  brand: "Tesla",
  model: "Model 3",
  start: function() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
};

// Calling the method
car.start(); // Output: Tesla Model 3 is starting...
```

#### **2. Using the `this` Keyword**
- The `this` keyword refers to the object from which the method was called.
- It is useful for accessing other properties of the same object.

##### **Example:**
```javascript
const user = {
  username: "coder123",
  password: "securePass",
  login: function() {
    console.log(`Welcome back, ${this.username}!`);
  }
};

user.login(); // Output: Welcome back, coder123!
```

#### **3. Adding Methods to Existing Objects**
- You can add methods to an object even after it has been created.

##### **Example:**
```javascript
const person = {
  name: "Bob",
  age: 25
};

// Adding a method later
person.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

person.greet(); // Output: Hello, my name is Bob.
```

---

### Key Takeaways
- Objects are used to store related data and functionality together.
- Properties are accessed using dot notation or bracket notation.
- Object methods are just functions attached to objects.
- The `this` keyword in methods refers to the object itself.


Now! Let's dive into **JavaScript Object methods** like `Object.keys()`, `Object.values()`, `Object.entries()`, etc. I'll provide detailed explanations and examples for these methods.


### JavaScript Object Methods

#### **1. `Object.keys()`**
- Returns an array of the **keys** (property names) of an object.
  
##### **Syntax:**
```javascript
Object.keys(object);
```

##### **Example:**
```javascript
const user = {
  name: "Alice",
  age: 25,
  country: "USA"
};

const keys = Object.keys(user);
console.log(keys); 
// Output: ["name", "age", "country"]
```

---

#### **2. `Object.values()`**
- Returns an array of the **values** of an object's properties.

##### **Syntax:**
```javascript
Object.values(object);
```

##### **Example:**
```javascript
const user = {
  name: "Alice",
  age: 25,
  country: "USA"
};

const values = Object.values(user);
console.log(values); 
// Output: ["Alice", 25, "USA"]
```

---

#### **3. `Object.entries()`**
- Returns an array of **key-value pairs** from an object.
- Each key-value pair is represented as an array of two elements: `[key, value]`.

##### **Syntax:**
```javascript
Object.entries(object);
```

##### **Example:**
```javascript
const user = {
  name: "Alice",
  age: 25,
  country: "USA"
};

const entries = Object.entries(user);
console.log(entries); 
// Output: [["name", "Alice"], ["age", 25], ["country", "USA"]]
```


#### **4. `Object.assign()`**
- Copies properties from one or more source objects to a target object. It returns the modified target object.

##### **Syntax:**
```javascript
Object.assign(target, ...sources);
```

##### **Example:**
```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); 
// Output: { a: 1, b: 2, c: 3 }
```

---

#### **5. `Object.freeze()`**
- Freezes an object, preventing any changes to its properties (no additions, deletions, or modifications).

##### **Example:**
```javascript
const obj = { name: "Alice" };
Object.freeze(obj);

obj.name = "Bob"; // This will not change the name
console.log(obj.name); 
// Output: Alice
```

---

#### **6. `Object.seal()`**
- Seals an object, allowing modifications to existing properties but prevents adding or removing properties.

##### **Example:**
```javascript
const obj = { name: "Alice" };
Object.seal(obj);

obj.age = 30; // Cannot add new properties
obj.name = "Bob"; // Can modify existing properties
console.log(obj); 
// Output: { name: "Bob" }
```

---

### **Key Takeaways**
- **`Object.keys()`**: Gets an array of property names.
- **`Object.values()`**: Gets an array of property values.
- **`Object.entries()`**: Gets an array of key-value pairs.
- **`Object.assign()`**: Copies properties from source objects to a target object.
- **`Object.freeze()`**: Makes an object immutable.
- **`Object.seal()`**: Allows modifications but prevents adding/removing properties.
