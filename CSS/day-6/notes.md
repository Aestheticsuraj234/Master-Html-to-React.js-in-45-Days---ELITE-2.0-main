

### **px (Pixels)**
- **Definition**: Absolute unit; represents a single pixel on the screen.
- **Usage**: Commonly used for exact sizing.
- **Example**: `width: 100px;`

---

### **rem (Root Em)**
- **Definition**: Relative to the **root element’s** font size (`<html>` element).
- **Usage**: Useful for consistent scaling across elements.
- **Example**: If the root font-size is `16px`, then `1rem = 16px`.
- **Example**: `padding: 2rem;` → `32px` if root size is `16px`.

---

### **em (Em)**
- **Definition**: Relative to the **parent element’s** font size.
- **Usage**: Useful for sizing elements based on the parent size.
- **Example**: If parent font-size is `16px`, then `1em = 16px`.
- **Example**: `font-size: 1.5em;` → `24px` if parent is `16px`.

---

### **% (Percentage)**
- **Definition**: Relative to the **parent element’s** size.
- **Usage**: Used for flexible layouts that adapt to parent size.
- **Example**: `width: 50%;` → Takes up half the width of the parent.

---

### **vw (Viewport Width)**
- **Definition**: Relative to the **width of the viewport** (browser window).
- **Usage**: Used to create responsive designs.
- **Example**: `width: 50vw;` → Takes up 50% of the viewport width.

---

### **vh (Viewport Height)**
- **Definition**: Relative to the **height of the viewport**.
- **Usage**: Useful for fullscreen or height-based layouts.
- **Example**: `height: 100vh;` → Takes up 100% of the viewport height.

Here are easy, handwritten-style notes on CSS positioning (`static`, `relative`, `absolute`, `fixed`):

---

### **static (Default)**
- **Definition**: The default positioning for all elements.
- **Behavior**: Follows the normal flow of the document (elements appear one after another).
- **No special positioning**: `top`, `left`, `right`, `bottom` don't apply.
- **Example**:
  ```css
  position: static;
  ```

---

### **relative**
- **Definition**: Positioned **relative** to its normal position.
- **Behavior**: Element still occupies space in the document flow but can be shifted using `top`, `left`, `right`, `bottom`.
- **Example**:
  ```css
  position: relative;
  top: 10px; /* Moves down 10px from original position */
  left: 20px; /* Moves right 20px from original position */
  ```

---

### **absolute**
- **Definition**: Positioned **relative to the nearest positioned ancestor** (not `static`).
- **Behavior**: Removed from the normal document flow (doesn’t affect other elements).
- **Use `top`, `left`, `right`, `bottom`** for positioning.
- **Example**:
  ```css
  position: absolute;
  top: 50px; /* 50px from top of the nearest positioned ancestor */
  left: 30px; /* 30px from the left */
  ```

---

### **fixed**
- **Definition**: Positioned **relative to the viewport** (browser window).
- **Behavior**: Stays in the same place even when scrolling.
- **Use `top`, `left`, `right`, `bottom`** for positioning.
- **Example**:
  ```css
  position: fixed;
  top: 0;
  right: 0; /* Stays fixed at the top-right corner */
  ```

