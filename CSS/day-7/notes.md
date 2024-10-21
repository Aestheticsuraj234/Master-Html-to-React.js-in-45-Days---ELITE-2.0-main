
### **CSS Positioning**

1. **Static Positioning**  
   - Default position for HTML elements.
   - Elements are placed in the normal document flow, without special positioning.
   - No `top`, `left`, `right`, or `bottom` values are applied.

   ```html
   <div style="position: static;">
     This is a static element.
   </div>
   ```

2. **Relative Positioning**  
   - Elements are positioned relative to their normal position in the flow.
   - You can use `top`, `left`, `right`, or `bottom` to shift the element from its default position.
   
   ```html
   <div style="position: relative; top: 20px; left: 10px;">
     This is a relatively positioned element.
   </div>
   ```

3. **Absolute Positioning**  
   - Removed from the normal document flow.
   - Positioned relative to the nearest positioned ancestor (`relative`, `absolute`, or `fixed`).
   - If no ancestor is positioned, it will be positioned relative to the `<html>` element.

   ```html
   <div style="position: relative;">
     <div style="position: absolute; top: 20px; left: 30px;">
       Absolutely positioned element.
     </div>
   </div>
   ```

4. **Fixed Positioning**  
   - Removed from the document flow and positioned relative to the browser window.
   - Stays fixed when the page is scrolled.
   
   ```html
   <div style="position: fixed; top: 10px; right: 10px;">
     Fixed position element.
   </div>
   ```

---

### **Float and Clear**

1. **Float**  
   - Allows elements to float to the left or right of their container.
   - Other elements wrap around the floated element.
   
   ```html
   <img src="image.jpg" style="float: left; margin-right: 10px;">
   <p>
     This text will wrap around the floated image.
   </p>
   ```

2. **Clear**  
   - Used to prevent elements from wrapping around a floated element.
   - Can be set to `left`, `right`, `both`, or `none`.

   ```html
   <div style="clear: both;">
     This element will appear below any floated elements.
   </div>
   ```

---

### **Display Property**

1. **Block Elements**  
   - Takes up the full width available and always starts on a new line.
   - Examples: `<div>`, `<p>`, `<h1>`, etc.

   ```html
   <div style="display: block;">
     This is a block-level element.
   </div>
   ```

2. **Inline Elements**  
   - Only takes up as much width as necessary and does not start on a new line.
   - Examples: `<span>`, `<a>`, `<strong>`, etc.

   ```html
   <span style="display: inline;">
     This is an inline element.
   </span>
   ```

3. **Inline-Block Elements**  
   - Behaves like an inline element but can have a width and height like block elements.
   
   ```html
   <div style="display: inline-block; width: 100px; height: 100px;">
     This is an inline-block element.
   </div>
   ```

---

### **Quick Recap**:
- **Positioning**: Controls the placement of elements in the document.
- **Float**: Floats an element to the left or right, and **clear** stops wrapping.
- **Display**: Dictates how an element behaves in the layout (block, inline, inline-block).

