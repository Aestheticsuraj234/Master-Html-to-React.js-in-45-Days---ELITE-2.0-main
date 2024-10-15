### 1. **HTML Forms and Input Types**

#### **HTML Forms:**
An HTML form is used to collect user input and send it to a server for processing. Forms are created using the `<form>` element and contain various types of input controls like text fields, checkboxes, radio buttons, etc.

#### **Basic Structure:**
```html
<form action="/submit" method="POST">
  <!-- Form inputs go here -->
</form>
```

- **action**: Specifies where to send the form data when it is submitted.
- **method**: Defines how the form data will be sent. Common values: GET, POST.

#### **Input Types:**
HTML forms support multiple input types that allow for different data collection methods.

1. **Text Input (`<input type="text">`):**
   ```html
   <form action="/submit" method="POST">
     <label for="name">Name:</label>
     <input type="text" id="name" name="name">
   </form>
   ```
   This creates a basic text input field.

2. **Password Input (`<input type="password">`):**
   ```html
   <label for="password">Password:</label>
   <input type="password" id="password" name="password">
   ```
   It hides the input characters for password protection.

3. **Email Input (`<input type="email">`):**
   ```html
   <label for="email">Email:</label>
   <input type="email" id="email" name="email">
   ```

4. **Radio Button (`<input type="radio">`):**
   ```html
   <label for="male">Male</label>
   <input type="radio" id="male" name="gender" value="male">
   
   <label for="female">Female</label>
   <input type="radio" id="female" name="gender" value="female">
   ```

5. **Checkbox (`<input type="checkbox">`):**
   ```html
   <label for="subscribe">Subscribe to newsletter</label>
   <input type="checkbox" id="subscribe" name="subscribe">
   ```

6. **Submit Button (`<input type="submit">`):**
   ```html
   <input type="submit" value="Submit">
   ```

7. **Date Input (`<input type="date">`):**
   ```html
   <label for="dob">Date of Birth:</label>
   <input type="date" id="dob" name="dob">
   ```

#### **Complete Form Example:**
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" required><br><br>

  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male"> Male
  <input type="radio" id="female" name="gender" value="female"> Female<br><br>

  <label for="subscribe">Subscribe to newsletter</label>
  <input type="checkbox" id="subscribe" name="subscribe"><br><br>

  <input type="submit" value="Submit">
</form>
```

---

### 2. **Form Validation**

HTML5 provides built-in form validation without the need for JavaScript.

#### **Required Fields:**
```html
<input type="text" name="name" required>
```
This attribute ensures the user cannot submit the form without filling out this field.

#### **Email Validation:**
```html
<input type="email" name="email" required>
```
The browser checks that the input contains a valid email address format.

#### **Pattern Validation:**
```html
<input type="text" name="username" pattern="[A-Za-z]{3,}" title="Must contain at least 3 letters">
```
The `pattern` attribute validates the input based on a regular expression. The `title` attribute provides a message if validation fails.

#### **Min and Max Attributes:**
```html
<input type="number" name="age" min="18" max="100">
```
Ensures the number input is within the specified range.

---

### 3. **Tables (`<table>`, `<tr>`, `<th>`, `<td>`)**

HTML tables are used to display data in a grid format.

#### **Basic Table Structure:**
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
    <td>Los Angeles</td>
  </tr>
</table>
```

#### **Explanation:**
- `<table>`: Creates a table.
- `<tr>`: Table row.
- `<th>`: Table header, used to create the header cells.
- `<td>`: Table data, used for individual cells in the table body.

#### **Example of a Table with Border and Padding:**
```html
<style>
  table, th, td {
    border: 1px solid black;
    padding: 10px;
    border-collapse: collapse;
  }
</style>

<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$0.50</td>
    <td>100</td>
  </tr>
</table>
```

---

### 4. **Semantic Tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`)**

HTML5 introduced semantic elements that clearly describe their meaning in a human- and machine-readable way. These tags help with SEO and accessibility.

#### **Common Semantic Tags:**

1. **Header (`<header>`):**
   The header element represents introductory content or a group of introductory content.
   ```html
   <header>
     <h1>My Website</h1>
     <nav>
       <a href="#home">Home</a>
       <a href="#about">About</a>
       <a href="#contact">Contact</a>
     </nav>
   </header>
   ```

2. **Nav (`<nav>`):**
   The `<nav>` element represents a section with navigation links.
   ```html
   <nav>
     <a href="#home">Home</a>
     <a href="#services">Services</a>
     <a href="#contact">Contact</a>
   </nav>
   ```

3. **Section (`<section>`):**
   A section represents a thematic grouping of content, typically with a heading.
   ```html
   <section>
     <h2>Services</h2>
     <p>We offer a variety of services to help you grow your business.</p>
   </section>
   ```

4. **Article (`<article>`):**
   An article represents independent, self-contained content like blog posts or news articles.
   ```html
   <article>
     <h2>How to Learn HTML</h2>
     <p>HTML is the building block of the web. Start by learning tags and elements...</p>
   </article>
   ```

5. **Aside (`<aside>`):**
   The `<aside>` element represents content related to the main content, like a sidebar.
   ```html
   <aside>
     <h3>Related Articles</h3>
     <ul>
       <li><a href="#">HTML Basics</a></li>
       <li><a href="#">CSS Fundamentals</a></li>
     </ul>
   </aside>
   ```

6. **Footer (`<footer>`):**
   The footer typically contains information like copyright or contact details.
   ```html
   <footer>
     <p>&copy; 2024 My Website. All rights reserved.</p>
   </footer>
   ```

#### **Example Combining Semantic Tags:**
```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section>
  <article>
    <h2>Welcome to My Website</h2>
    <p>This is an example of a webpage using HTML5 semantic tags.</p>
  </article>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Learn HTML</a></li>
      <li><a href="#">Learn CSS</a></li>
    </ul>
  </aside>
</section>

<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```

### **Conclusion**
HTML provides a rich

 set of tools for creating structured, accessible, and SEO-friendly content. Understanding forms, form validation, tables, and semantic tags is essential for building modern web applications.

