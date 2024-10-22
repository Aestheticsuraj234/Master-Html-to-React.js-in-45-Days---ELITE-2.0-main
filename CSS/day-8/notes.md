### Flexbox - CSS Flexible Box Layout Module

**Flexbox** is a powerful CSS layout module that provides a flexible way to arrange elements in one-dimensional layouts (either a row or column). It makes it easier to align and distribute space among items in a container, even when their sizes are dynamic or unknown.

---

### Key Concepts and Terminologies

1. **Main Axis** & **Cross Axis**:
   - **Main Axis**: Defined by the `flex-direction` (can be horizontal or vertical).
   - **Cross Axis**: Perpendicular to the main axis.

---

### Flex Container Properties
These properties apply to the flex container (the parent of flex items).

#### 1. `display: flex;`
- Turns a container into a flexbox container, and its child elements (flex items) can now use flexbox properties.

#### 2. `flex-direction`
- Specifies the direction of the main axis (row or column).

| Value            | Description                  |
|------------------|------------------------------|
| `row`            | Items are placed in a row (default). |
| `row-reverse`    | Items are placed in reverse row. |
| `column`         | Items are placed in a column. |
| `column-reverse` | Items are placed in reverse column. |

Example:
```css
.container {
  display: flex;
  flex-direction: row;
}
```

#### 3. `justify-content`
- Aligns flex items along the main axis.

| Value            | Description                  |
|------------------|------------------------------|
| `flex-start`     | Aligns items at the start of the main axis. |
| `flex-end`       | Aligns items at the end. |
| `center`         | Centers items. |
| `space-between`  | Equal space between items, but no space at the ends. |
| `space-around`   | Equal space around each item. |
| `space-evenly`   | Equal space between and around items. |

Example:
```css
.container {
  justify-content: space-between;
}
```

#### 4. `align-items`
- Aligns flex items along the cross axis (perpendicular to the main axis).

| Value            | Description                  |
|------------------|------------------------------|
| `stretch`        | Items stretch to fill the container (default). |
| `flex-start`     | Aligns items at the start of the cross axis. |
| `flex-end`       | Aligns items at the end. |
| `center`         | Centers items along the cross axis. |
| `baseline`       | Aligns items based on their content's baseline. |

Example:
```css
.container {
  align-items: center;
}
```




#### 5. `flex-wrap`
- Defines whether flex items should wrap or stay in a single line.

| Value            | Description                  |
|------------------|------------------------------|
| `nowrap`         | No wrapping, items stay in a single line (default). |
| `wrap`           | Items will wrap to the next line if needed. |
| `wrap-reverse`   | Wrap items in reverse order. |

Example:
```css
.container {
  flex-wrap: wrap;
}
```

#### 6. `flex-flow`
- A shorthand property combining `flex-direction` and `flex-wrap`.

Example:
```css
.container {
  flex-flow: row wrap;
}
```

---

### Flex Item Properties
These properties apply to the children of a flex container.

#### 1. `flex-grow`
- Defines how much a flex item should grow relative to the other flex items.

| Value | Description |
|-------|-------------|
| `0`   | The item will not grow (default). |
| `1`   | The item can grow to fill available space. |

Example:
```css
.item {
  flex-grow: 1;
}
```

#### 2. `flex-shrink`
- Defines how much a flex item should shrink relative to the other flex items.

| Value | Description |
|-------|-------------|
| `0`   | The item will not shrink. |
| `1`   | The item can shrink if necessary (default). |

Example:
```css
.item {
  flex-shrink: 0;
}
```





#### 3. `align-self`
- Allows a single flex item to have a different alignment than the rest of the items (overrides `align-items`).

| Value            | Description                  |
|------------------|------------------------------|
| `auto`           | Inherits the parent’s `align-items` property (default). |
| `flex-start`     | Aligns the item at the start of the cross axis. |
| `flex-end`       | Aligns the item at the end. |
| `center`         | Centers the item along the cross axis. |
| `baseline`       | Aligns the item’s baseline with others. |
| `stretch`        | Stretches the item to fill the container. |

Example:
```css
.item {
  align-self: flex-end;
}
```

---

### Complete Example:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 200px;
  align-self: flex-start;
  padding: 20px;
  background-color: lightblue;
  margin: 10px;
}
</style>
```

---

### Additional Notes:

- **Nested Flex Containers**: You can nest flex containers inside each other to create complex layouts.
- **Browser Support**: Flexbox is well-supported across modern browsers.
- **Fallbacks**: Always consider adding fallbacks for older browsers that may not support Flexbox.

