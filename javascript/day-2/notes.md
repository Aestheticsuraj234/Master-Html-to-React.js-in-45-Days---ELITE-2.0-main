## JavaScript Operators

Operators in JavaScript are symbols that perform operations on variables and values. They can be broadly categorized as follows:

### 1. **Arithmetic Operators**
   Used for basic mathematical operations.

   - **`+` (Addition):** Adds two values.
   - **`-` (Subtraction):** Subtracts one value from another.
   - **`*` (Multiplication):** Multiplies two values.
   - **`/` (Division):** Divides one value by another.
   - **`%` (Modulus):** Returns the remainder.
   - **`**` (Exponentiation):** Raises a number to the power of another.

   **Example:**
   ```javascript
   let a = 10;
   let b = 3;
   console.log(a + b); // 13
   console.log(a - b); // 7
   console.log(a * b); // 30
   console.log(a / b); // 3.33
   console.log(a % b); // 1
   console.log(a ** b); // 1000 (10^3)
   ```

### 2. **Assignment Operators**
   Used to assign values to variables.

   - **`=`** (Assigns a value)
   - **`+=`** (Adds and assigns)
   - **`-=`** (Subtracts and assigns)
   - **`*=`** (Multiplies and assigns)
   - **`/=`** (Divides and assigns)
   - **`%=`** (Modulus and assigns)

   **Example:**
   ```javascript
   let x = 5;
   x += 3;  // x = x + 3 -> x = 8
   x -= 2;  // x = x - 2 -> x = 6
   x *= 4;  // x = x * 4 -> x = 24
   x /= 3;  // x = x / 3 -> x = 8
   ```

### 3. **Comparison Operators**
   Used to compare two values, returning `true` or `false`.

   - **`==`** (Equal to)
   - **`===`** (Strictly equal to, checks type and value)
   - **`!=`** (Not equal to)
   - **`!==`** (Strictly not equal to)
   - **`>`** (Greater than)
   - **`<`** (Less than)
   - **`>=`** (Greater than or equal to)
   - **`<=`** (Less than or equal to)

   **Example:**
   ```javascript
   let num = 10;
   console.log(num == '10'); // true (value comparison)
   console.log(num === '10'); // false (type and value comparison)
   console.log(num != 5); // true
   console.log(num > 8); // true
   console.log(num <= 10); // true
   ```

### 4. **Logical Operators**
   Used to perform logical operations, commonly with Booleans.

   - **`&&`** (AND): Both conditions must be true.
   - **`||`** (OR): At least one condition must be true.
   - **`!`** (NOT): Inverts the Boolean value.

   **Example:**
   ```javascript
   let age = 20;
   console.log(age > 18 && age < 30); // true (both are true)
   console.log(age < 18 || age > 25); // false (both are false)
   console.log(!(age > 18)); // false (inverts true to false)
   ```

### 5. **Increment and Decrement Operators**
   Used to increase or decrease a value by `1`.

   - **`++`** (Increment)
   - **`--`** (Decrement)

   **Example:**
   ```javascript
   let count = 5;
   console.log(count++); // 5 (post-increment)
   console.log(count);   // 6 (after increment)
   console.log(++count); // 7 (pre-increment)
   console.log(count--); // 7 (post-decrement)
   console.log(count);   // 6 (after decrement)
   ```

### 6. **Ternary Operator**
   A shorthand for the `if...else` statement.

   - **`condition ? expression1 : expression2`**

   **Example:**
   ```javascript
   let age = 18;
   let canVote = (age >= 18) ? "Yes" : "No";
   console.log(canVote); // "Yes"
   ```
