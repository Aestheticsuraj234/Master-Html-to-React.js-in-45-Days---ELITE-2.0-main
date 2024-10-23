### What is CSS Grid?

**CSS Grid Layout** (often referred to as "Grid") is a powerful layout system in CSS that provides a way to create complex, responsive, and two-dimensional layouts. Unlike other layout methods such as Flexbox, which is one-dimensional (either row or column), Grid allows you to work with both rows and columns simultaneously, giving more control over the placement and sizing of elements.

#### Key Features of CSS Grid:

1. **Two-dimensional**: It handles both rows and columns, enabling complex layouts without needing extra markup or floats.
2. **Explicit and Implicit Grid**: You can define both the structure of the grid and let CSS auto-fill the gaps if needed.
3. **Responsive Layouts**: Grid can adapt the layout based on screen size, which makes it perfect for responsive design.
4. **Flexible and Precise Control**: Grid offers precise control over element sizing, spacing, and alignment.
  
### Basic Terminology:

- **Grid Container**: The element that has `display: grid;` applied to it. This is the parent element that contains all grid items.
  
  ```css
  .container {
      display: grid;
  }
  ```

- **Grid Items**: The direct children of the grid container. These are the elements that will be placed inside the grid layout.
  
  ```html
  <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
  </div>
  ```

- **Grid Lines**: The lines that divide the grid into rows and columns. You can control where items start and end using these lines.

- **Grid Tracks**: The space between two grid lines. Rows and columns are collectively referred to as tracks.

- **Grid Cell**: The space between two horizontal and two vertical grid lines, which is the smallest unit in the grid layout.

- **Grid Area**: A rectangular area on the grid, defined by grid lines, that spans one or more cells.

### Defining a Grid:

The main properties used to define grids are `grid-template-columns` and `grid-template-rows`. These properties specify the structure of the grid.

#### Example:

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px; /* 3 columns */
    grid-template-rows: 100px auto 100px; /* 3 rows */
    gap: 10px; /* Space between grid items */
}
```

In this example:
- There are three columns. The first and third columns are fixed at 200px, and the middle column takes up the remaining space (`1fr`).
- There are three rows. The first and third rows are fixed at 100px, and the middle row automatically adjusts to its content.

### Example Grid Layout:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Example</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: 100px 1fr 100px; /* 3 columns */
            grid-template-rows: 50px auto 50px;    /* 3 rows */
            gap: 10px;
        }

        .header {
            grid-column: 1 / 4;
            background-color: lightblue;
        }

        .sidebar {
            background-color: lightgreen;
        }

        .content {
            background-color: lightcoral;
        }

        .footer {
            grid-column: 1 / 4;
            background-color: lightgray;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="content">Content Area</div>
        <div class="footer">Footer</div>
    </div>
</body>

</html>
```

### Result:

- The grid layout has 3 rows and 3 columns.
- The **header** and **footer** span across all 3 columns.
- The **sidebar** and **content** occupy individual cells in the middle row.




### CSS Grid Properties - Handwritten Notes with Examples

1. **`grid-template-columns`**
   - Defines the number and size of columns in the grid layout.
   - You can use specific values like `px`, `fr` (fractional units), or percentages.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-columns: 1fr 2fr 1fr; /* 3 columns with fractions */
   }
   ```

2. **`grid-template-rows`**
   - Defines the number and size of rows in the grid.
   - Similar to `grid-template-columns`, you can use values like `px`, `fr`, etc.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-rows: 100px 200px; /* First row is 100px, second is 200px */
   }
   ```

3. **Unit: `fr` (Fraction)**
   - `fr` stands for "fraction of available space."
   - It's a flexible unit that divides space proportionally.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-columns: 1fr 2fr; /* Second column will be twice the size of the first */
   }
   ```

4. **`gap`**
   - The `gap` property defines the space between grid items (both rows and columns).
   - You can set horizontal and vertical gaps separately using `row-gap` and `column-gap`.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-gap: 20px; /* Adds 20px space between rows and columns */
   }
   ```

5. **`repeat()` Function**
   - This function allows you to repeat column or row definitions.
   - The syntax is `repeat(times, value)`.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
   }
   ```

6. **`grid-auto-rows`**
   - Defines the size of rows that are created automatically when there are more items than explicitly defined rows.
   
   **Example:**
   ```css
   .container {
       display: grid;
       grid-auto-rows: minmax(100px, auto); /* Rows will be at least 100px high */
   }
   ```

7. **`grid-auto-columns`**
   - Similar to `grid-auto-rows`, this property defines the size of columns created automatically when more items are added.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-auto-columns: minmax(100px, auto); /* Columns will be at least 100px wide */
   }
   ```

8. **`minmax()` Function**
   - The `minmax()` function allows you to define a minimum and maximum size for rows or columns.
   - It is useful for creating flexible grids that adapt to content size.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(3, minmax(100px, 1fr)); /* 3 columns, minimum 100px, maximum flexible */
   }
   ```

9. **`repeat(auto-fill, minmax())`**
   - This is a common pattern used for responsive grids.
   - `auto-fill` automatically fills the row with as many items as can fit, and `minmax()` defines the size of each item.

   **Example:**
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive columns with a minimum width of 200px */
   }
   ```

10. **Inspecting Element (Developer Tools)**
    - In your browser’s developer tools, inspect an element by right-clicking on it and choosing "Inspect."
    - This shows the HTML and applied CSS, and you can view grid outlines to understand how items are laid out.

11. **Selecting a Particular Grid Item**
    - You can select specific grid items using their IDs or class names and apply custom styles like defining their row/column positions.

    **Example:**
    ```css
    #item-2 {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 5; /* Spans multiple columns */
    }
    ```

12. **`grid-column-start` and `grid-column-end`**
    - These properties define where an item starts and ends across columns.
    - The `grid-row-start` and `grid-row-end` properties function similarly for rows.

    **Example:**
    ```css
    #item-1 {
        grid-row-start: 1;
        grid-row-end: 3; /* Spans two rows */
    }
    ```
