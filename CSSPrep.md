# CSS Interview Topics Plan

1. **CSS Basics & Syntax**
2. **Selectors & Specificity**
3. **Box Model**
4. **Display, Position, Float, Clear**
5. **Flexbox**
6. **Grid**
7. **Units, Colors & Measurement**
8. **Typography**
9. **Backgrounds & Borders**
10. **Pseudo-classes & Pseudo-elements**
11. **Transitions, Transforms & Animations**
12. **Media Queries & Responsive Design**
13. **CSS Variables**
14. **Best Practices + Common Interview Scenarios**

Each section will contain:

* Core **concept**
* **Interview-level explanation**
* **Small code snippet or visual cue**
* **Common question variations**

---

## **1. CSS Basics & Syntax**

### **Concept**

CSS (Cascading Style Sheets) describes how HTML elements are displayed.
It separates **content (HTML)** from **presentation (CSS)**.

### **Basic Syntax**

```css
selector {
  property: value;
}
```

Example:

```css
p {
  color: blue;
  font-size: 16px;
}
```

* **selector:** targets HTML elements (`p` here)
* **property:** the style you want to change (`color`)
* **value:** how you want it styled (`blue`)

---

### **Adding CSS to HTML**

1. **Inline:** inside an HTML element

   ```html
   <p style="color: red;">Text</p>
   ```

   ✅ Quick
   ❌ Not reusable

2. **Internal:** inside `<style>` in `<head>`

   ```html
   <style>
     p { color: green; }
   </style>
   ```

3. **External:** in `.css` file linked with `<link>`

   ```html
   <link rel="stylesheet" href="style.css">
   ```

   ✅ Scalable & best practice for projects

---

### **Cascading**

If multiple styles target the same element, CSS applies rules based on:

1. **Specificity** (inline > id > class > element)
2. **Importance** (`!important` overrides all)
3. **Source order** (later rules override earlier)

Example:

```css
p { color: red; }          /* low priority */
#para1 { color: blue; }    /* higher priority */
p { color: green !important; } /* highest */
```

→ final color = **green**

---

### **Common Interview Points**

* “What is CSS used for?” → Style and layout separation from HTML.
* “Why is it called cascading?” → Styles cascade based on order, specificity, and importance.
* “Preferred way to use CSS?” → External stylesheet for maintainability.

---

### **Quick Visualization**

```html
<style>
  body { background: #fafafa; }
  h1 { color: navy; text-align: center; }
  p { color: gray; font-size: 14px; }
</style>

<h1>Welcome</h1>
<p>CSS styles control this text’s color and size.</p>
```

Result: Clean, centralized styling.

---

## **2. Selectors & Specificity**

### **Concept**

Selectors target **which HTML elements** a CSS rule applies to.
Specificity decides **which style wins** when multiple rules affect the same element.

---

### **Types of Selectors**

#### **1. Universal Selector**

Targets all elements.

```css
* { margin: 0; padding: 0; }
```

Used for resets.

---

#### **2. Element Selector**

Targets specific HTML tags.

```css
p { color: gray; }
```

---

#### **3. Class Selector**

Targets elements with a specific class attribute.

```css
.message { color: blue; }
<p class="message">Hi</p>
```

Use `.` before class name. Reusable across elements.

---

#### **4. ID Selector**

Targets a unique element.

```css
#title { font-size: 24px; }
<h1 id="title">Hello</h1>
```

Use `#` before ID name. Must be unique per page.

---

#### **5. Grouping Selector**

Applies same styles to multiple selectors.

```css
h1, h2, h3 { color: navy; }
```

---

#### **6. Descendant Selector**

Targets elements *inside* another element.

```css
div p { color: green; }
```

Applies only to `<p>` inside `<div>`.

---

#### **7. Child Selector**

Targets *direct* children only.

```css
div > p { color: red; }
```

---

#### **8. Adjacent Sibling Selector**

Selects element immediately after another.

```css
h1 + p { color: gray; }
```

---

#### **9. Attribute Selectors**

Target elements by attribute or value.

```css
input[type="text"] { border: 1px solid gray; }
a[target="_blank"] { color: red; }
```

---

#### **10. Pseudo-classes**

Select elements in a specific state.

```css
a:hover { color: orange; }
input:focus { border-color: blue; }
```

#### **11. Pseudo-elements**

Style specific *parts* of elements.

```css
p::first-line { font-weight: bold; }
p::before { content: "→ "; }
```

---

### **Specificity Hierarchy**

Higher value wins.
Order of importance:

1. Inline styles → `1000`
2. ID selectors → `100`
3. Class, pseudo-class, attribute → `10`
4. Element, pseudo-element → `1`
5. Universal (`*`) → `0`

Example:

```css
p { color: blue; }              /* 1 */
.message p { color: green; }    /* 10+1 = 11 */
#main .message p { color: red; }/* 100+10+1 = 111 */
```

→ Final color = **red**

---

### **Common Interview Points**

* Difference between class and ID selectors? → Class reusable; ID unique.
* Which has higher specificity: `#id` or `.class`? → `#id`.
* What happens if two selectors have same specificity? → The later one in source order wins.

---

### **Mini Visualization**

```html
<style>
  .note { color: blue; }
  #highlight { color: red; }
</style>

<p class="note" id="highlight">Test text</p>
```

→ Final color = **red** (ID > class)

---

## **3. Box Model**

### **Concept**

Every HTML element is treated as a **rectangular box**.
The **CSS box model** defines how its total size and spacing are calculated.

---

### **Structure (Outside → Inside)**

```
┌──────────────────────────────┐ ← Margin (space outside)
│   ┌──────────────────────┐   │
│   │     Border           │   │
│   │  ┌──────────────┐    │   │
│   │  │   Padding    │    │   │
│   │  │  ┌──────┐    │    │   │
│   │  │  │Content│    │    │   │
│   │  │  └──────┘    │    │   │
│   │  └──────────────┘    │   │
│   └──────────────────────┘   │
└──────────────────────────────┘
```

---

### **Parts Explained**

| Part        | Description                      | Affects                       |
| ----------- | -------------------------------- | ----------------------------- |
| **Content** | Text or image inside the box     | Width, height                 |
| **Padding** | Space between content and border | Increases box size            |
| **Border**  | Line around padding and content  | Adds to total size            |
| **Margin**  | Space outside the border         | Separates from other elements |

---

### **Example**

```html
<style>
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  margin: 10px;
  background: lightgray;
}
</style>

<div class="box">Box Model</div>
```

**Total width calculation**
= content (200) + padding (20+20) + border (5+5) + margin (10+10)
= **270px**

---

### **box-sizing Property**

By default: `content-box`

* width = only content area
* Padding and border **add** to total width/height

```css
box-sizing: content-box; /* default */
```

Alternative: `border-box`

* width = content + padding + border together
* Prevents layout shift

```css
* { box-sizing: border-box; } /* common in modern CSS */
```

---

### **Practical Example**

```css
.container {
  width: 300px;
  border: 10px solid red;
  padding: 20px;
  box-sizing: border-box;
}
```

Here total width = **300px** (not 360px) → easier for layout control.

---

### **Common Interview Points**

* Q: What is the CSS box model?
  A: The layout model defining how margin, border, padding, and content determine an element’s space.
* Q: Difference between `content-box` and `border-box`?
  A: In `border-box`, padding and border are included in width/height calculation.
* Q: Does margin affect element size?
  A: No, it only adds space outside the element.

---

## **4. Display, Position, Float, Clear**

---

### **A. Display Property**

Controls **how** an element is rendered in layout flow.

| Value            | Description                           | Example                        |
| ---------------- | ------------------------------------- | ------------------------------ |
| **block**        | Takes full width, starts on new line  | `<div>`, `<p>`, `<h1>`         |
| **inline**       | Takes only needed width, no new line  | `<span>`, `<a>`                |
| **inline-block** | Inline layout but allows width/height | `<img>`, custom elements       |
| **none**         | Hides element (removes from flow)     | Useful for toggling visibility |
| **flex / grid**  | Defines a flex or grid container      | For modern layouts             |

**Example:**

```html
<style>
span { display: block; background: yellow; }
</style>
<p>Text <span>now block</span> continues below.</p>
```

---

### **B. Position Property**

Controls **where** an element sits on the page.

| Value        | Behavior                              | Reference Point             |
| ------------ | ------------------------------------- | --------------------------- |
| **static**   | Default, normal flow                  | none                        |
| **relative** | Moves relative to its normal position | itself                      |
| **absolute** | Removed from normal flow              | nearest positioned ancestor |
| **fixed**    | Stays fixed relative to viewport      | viewport                    |
| **sticky**   | Scrolls until reaching a threshold    | viewport & container        |

**Example:**

```html
<style>
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
</style>
<div class="box">Moved slightly</div>
```

---

### **C. Float Property**

Used to **wrap text around** elements (old layout method).

| Value   | Meaning                            |
| ------- | ---------------------------------- |
| `left`  | Float to left, content wraps right |
| `right` | Float to right, content wraps left |
| `none`  | Default                            |

**Example:**

```html
<style>
img {
  float: right;
  margin: 10px;
}
</style>

<p>Text wraps around the floated image <img src="pic.jpg" width="100"> smoothly.</p>
```

---

### **D. Clear Property**

Used to stop elements from wrapping around floated items.

| Value   | Effect                              |
| ------- | ----------------------------------- |
| `left`  | No floating elements on the left    |
| `right` | No floating elements on the right   |
| `both`  | No floating elements on either side |

**Example:**

```html
<style>
div { clear: both; }
</style>

<img src="left.jpg" style="float:left;">
<p>Wrapped text.</p>
<div>Next section starts below floated image.</div>
```

---

### **E. Practical Scenario**

```html
<style>
.card {
  float: left;
  width: 200px;
  height: 100px;
  margin: 10px;
  background: lightblue;
}
.container::after {
  content: "";
  display: block;
  clear: both;
}
</style>

<div class="container">
  <div class="card"></div>
  <div class="card"></div>
</div>
```

→ Two floated cards, properly cleared after container ends.

---

### **Common Interview Points**

* Q: Difference between inline, block, and inline-block?
  A: Inline cannot set width/height, block takes full width, inline-block behaves inline but allows box dimensions.
* Q: What’s position absolute relative to?
  A: Nearest ancestor with non-static position.
* Q: Purpose of `clear`?
  A: Prevent layout overlap after float elements.
* Q: Modern alternative to float layout?
  A: Flexbox or CSS Grid.

---

## **5. Flexbox (Flexible Box Layout)**

---

### **Concept**

Flexbox provides a **one-dimensional layout** method (rows or columns).
It simplifies **alignment**, **spacing**, and **ordering** of elements inside a container.

---

### **Core Idea**

* Parent element → **Flex container**
* Child elements → **Flex items**

```css
.container {
  display: flex; /* activates flexbox */
}
```

---

### **Main Axis vs Cross Axis**

* **Main axis:** direction of flex items (`row` by default)
* **Cross axis:** perpendicular to main axis

---

### **Key Flex Container Properties**

| Property          | Purpose                              | Example                                                             |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------- |
| `display: flex`   | Enables flexbox                      | `display: flex;`                                                    |
| `flex-direction`  | Sets main axis                       | `row` (default), `column`, `row-reverse`, `column-reverse`          |
| `justify-content` | Aligns items along **main axis**     | `flex-start`, `center`, `flex-end`, `space-between`, `space-around` |
| `align-items`     | Aligns items along **cross axis**    | `flex-start`, `center`, `flex-end`, `stretch`, `baseline`           |
| `flex-wrap`       | Allows wrapping of items             | `nowrap` (default), `wrap`, `wrap-reverse`                          |
| `align-content`   | Aligns multiple lines (when wrapped) | `center`, `space-between`, etc.                                     |

**Example:**

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

---

### **Key Flex Item Properties**

| Property      | Purpose                            | Example                 |
| ------------- | ---------------------------------- | ----------------------- |
| `order`       | Changes visual order               | `order: 2;`             |
| `flex-grow`   | Defines how much an item grows     | `flex-grow: 1;`         |
| `flex-shrink` | Defines how much an item shrinks   | `flex-shrink: 0;`       |
| `flex-basis`  | Initial size before grow/shrink    | `flex-basis: 100px;`    |
| `align-self`  | Overrides align-items for one item | `align-self: flex-end;` |

**Shorthand:**

```css
flex: grow shrink basis;
flex: 1 0 100px;
```

---

### **Example Layout**

```html
<style>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  background: lightgray;
}
.item {
  background: steelblue;
  color: white;
  padding: 10px;
}
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

→ Evenly spaced boxes centered vertically.

---

### **Common Interview Points**

* Q: What problem does Flexbox solve?
  A: Simplifies alignment, spacing, and resizing in one-dimensional layouts.
* Q: Difference between `justify-content` and `align-items`?
  A: `justify-content` controls main axis, `align-items` controls cross axis.
* Q: What is `flex: 1` shorthand for?
  A: `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`
* Q: When to prefer Grid over Flexbox?
  A: Flexbox = 1D layouts, Grid = 2D layouts (rows + columns).

---

### **Mini Visualization**

```
[ item1 ]  [ item2 ]  [ item3 ]
 ← space evenly distributed →
```

---

## **6. CSS Grid Layout**

---

### **Concept**

CSS Grid provides a **two-dimensional layout system** — controlling **rows and columns** simultaneously.
Best for creating **page or section layouts**.

---

### **Basic Setup**

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: auto auto;
  gap: 10px;
}
```

Creates a grid with 3 columns, 2 rows, and 10px gaps.

---

### **Key Terminology**

* **Grid container:** the parent element with `display: grid`
* **Grid items:** direct children of the grid container
* **Grid lines:** invisible lines dividing the grid into rows and columns
* **Grid tracks:** rows and columns themselves
* **Grid cells:** single box in the grid

---

### **Defining Columns and Rows**

```css
grid-template-columns: 100px 1fr 2fr;
```

* `px` = fixed width
* `fr` = fractional unit (remaining space)

**Example:**

```html
<style>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
.item {
  background: steelblue;
  color: white;
  text-align: center;
}
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

→ Two columns, two rows, spacing maintained.

---

### **Positioning Items**

```css
.item1 {
  grid-column: 1 / 3; /* spans 2 columns */
  grid-row: 1 / 2;    /* occupies 1st row */
}
```

You can use **line numbers** or **names** to position elements.

---

### **Shorthand Properties**

| Property              | Description                        | Example                             |
| --------------------- | ---------------------------------- | ----------------------------------- |
| `grid-template-areas` | Name-based layout                  | `"header header" "sidebar main"`    |
| `grid-area`           | Assigns area to an item            | `grid-area: header;`                |
| `justify-items`       | Align items horizontally           | `center`                            |
| `align-items`         | Align items vertically             | `start`, `center`, `end`, `stretch` |
| `justify-content`     | Aligns the whole grid horizontally | `space-around`                      |
| `align-content`       | Aligns the whole grid vertically   | `center`                            |

---

### **Example Using Template Areas**

```html
<style>
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 150px 1fr;
  grid-template-rows: 60px 200px 50px;
  gap: 5px;
}
.header  { grid-area: header; background: #3b5998; }
.sidebar { grid-area: sidebar; background: #8b9dc3; }
.main    { grid-area: main; background: #dfe3ee; }
.footer  { grid-area: footer; background: #3b5998; color: white; }
</style>

<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>
</div>
```

→ Simple page layout using named grid areas.

---

### **Common Interview Points**

* Q: Difference between Flexbox and Grid?
  A: Flexbox → one-dimensional; Grid → two-dimensional.
* Q: What does `1fr` mean?
  A: Fraction of remaining available space.
* Q: How to create spacing between grid items?
  A: Use `gap`, not `margin`.
* Q: Can grid and flexbox be combined?
  A: Yes, often grid for page layout and flexbox inside sections.

---

### **Mini Visualization**

```
+---------------------------+
|   header header           |
+-----------+---------------+
| sidebar   | main          |
+---------------------------+
|   footer footer            |
+---------------------------+
```

---

## **7. Units, Colors & Measurement**

---

### **Concept**

CSS units and colors define **size**, **spacing**, and **visual properties** of elements.
Mastery of **relative vs absolute units** is essential for responsive design.

---

### **A. CSS Units**

#### **1. Absolute Units**

Fixed, independent of screen size.

| Unit             | Meaning                                  | Example            |
| ---------------- | ---------------------------------------- | ------------------ |
| `px`             | Pixels (screen dots)                     | `width: 200px;`    |
| `cm`, `mm`, `in` | Physical length (rarely used on screens) | `margin: 1cm;`     |
| `pt`, `pc`       | Print-based points/picas                 | `font-size: 12pt;` |

**Use:** for fixed-size elements like icons or borders.

---

#### **2. Relative Units**

Scale based on another value (viewport, parent, or font size).

| Unit            | Relative To                   | Example              |
| --------------- | ----------------------------- | -------------------- |
| `%`             | Parent element                | `width: 50%;`        |
| `em`            | Font size of the element      | `padding: 2em;`      |
| `rem`           | Root element font size        | `font-size: 1.2rem;` |
| `vw`            | 1% of viewport width          | `width: 50vw;`       |
| `vh`            | 1% of viewport height         | `height: 100vh;`     |
| `vmin` / `vmax` | Smaller/larger of `vw` & `vh` | `font-size: 5vmin;`  |

**Example:**

```css
.container {
  width: 80%;
  font-size: 1rem;
}
h1 {
  font-size: 2em; /* 2x container font-size */
}
```

---

### **B. Colors**

#### **1. Named Colors**

Simple and readable.
`color: red;`, `background: navy;`

#### **2. Hexadecimal**

Format: `#RRGGBB` (values 00–FF)

```css
color: #ff0000; /* red */
```

Short form: `#f00`

#### **3. RGB / RGBA**

`rgba()` adds opacity (alpha).

```css
color: rgb(255, 0, 0);      /* red */
color: rgba(255, 0, 0, 0.5);/* semi-transparent red */
```

#### **4. HSL / HSLA**

More intuitive for adjusting hue, saturation, and lightness.

```css
color: hsl(120, 50%, 50%);
color: hsla(240, 100%, 50%, 0.7);
```

---

### **C. Opacity vs RGBA**

* `opacity` affects **whole element** (including children)
* `rgba()` affects **only that property**

**Example:**

```css
div { background: rgba(0, 0, 0, 0.3); } /* background only transparent */
div { opacity: 0.3; }                   /* entire element transparent */
```

---

### **D. Measurement Use in Practice**

| Context         | Recommended Unit                |
| --------------- | ------------------------------- |
| Font sizes      | `rem` for consistency           |
| Padding/margin  | `em` or `rem`                   |
| Layout widths   | `%`, `vw`, `vh`                 |
| Borders/icons   | `px`                            |
| Responsive text | `clamp()` function (modern CSS) |

**Example using `clamp()`:**

```css
h1 {
  font-size: clamp(1.2rem, 2vw, 2rem); /*clamp(min, preferred, max) */
}
```

→ Grows with screen size but stays within limits.

---

### **Common Interview Points**

* Q: Difference between `em` and `rem`?
  A: `em` = parent’s font size; `rem` = root element font size.
* Q: When to use `vh` or `vw`?
  A: For layouts that adapt to viewport size (e.g., full-screen hero section).
* Q: Which is more readable, RGB or HSL?
  A: HSL, because hue, saturation, and lightness are intuitive to tweak.
* Q: What’s the range of alpha in RGBA?
  A: `0` (fully transparent) to `1` (fully opaque).

---

### **Mini Visualization**

```html
<style>
div {
  width: 50%;
  height: 100px;
  background: linear-gradient(to right, #f00, rgba(0,0,255,0.5));
}
</style>
<div></div>
```

→ Gradient transitioning from opaque red to semi-transparent blue.

---

## **8. Typography**

---

### **Concept**

Typography in CSS controls **how text looks and behaves** — including font, spacing, alignment, and decoration.
Well-managed typography improves readability and visual hierarchy.

---

### **A. Font Properties**

| Property       | Description         | Example                                           |
| -------------- | ------------------- | ------------------------------------------------- |
| `font-family`  | Defines typeface    | `font-family: "Roboto", Arial, sans-serif;`       |
| `font-size`    | Size of text        | `font-size: 16px;`                                |
| `font-weight`  | Thickness of font   | `font-weight: bold;` or `400`, `700`              |
| `font-style`   | Italic or normal    | `font-style: italic;`                             |
| `font-variant` | Small-caps style    | `font-variant: small-caps;`                       |
| `line-height`  | Space between lines | `line-height: 1.5;`                               |
| `font`         | Shorthand property  | `font: italic 700 16px/1.5 "Roboto", sans-serif;` |

**Example:**

```css
p {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```

---

### **B. Font Stacks & Fallbacks**

Use multiple fonts for browser compatibility.

```css
body {
  font-family: "Poppins", "Segoe UI", sans-serif;
}
```

If “Poppins” not available, browser tries “Segoe UI,” then `sans-serif`.

---

### **C. Text Formatting Properties**

| Property          | Description              | Example                       |
| ----------------- | ------------------------ | ----------------------------- |
| `color`           | Font color               | `color: #333;`                |
| `text-align`      | Horizontal alignment     | `text-align: center;`         |
| `text-decoration` | Adds lines               | `text-decoration: underline;` |
| `text-transform`  | Changes case             | `text-transform: uppercase;`  |
| `letter-spacing`  | Space between characters | `letter-spacing: 1px;`        |
| `word-spacing`    | Space between words      | `word-spacing: 5px;`          |
| `text-indent`     | Indent first line        | `text-indent: 30px;`          |

**Example:**

```css
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}
```

---

### **D. Vertical Spacing**

Use **line-height** for vertical rhythm.

```css
p {
  line-height: 1.6;
}
```

1.5–1.8 times font size is ideal for readability.

---

### **E. Font Import (Google Fonts)**

Use web fonts for design consistency.

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
```

---

### **F. Text Shadow**

Adds subtle depth or glow.

```css
h2 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

---

### **G. White Space Control**

| Property                     | Description               | Example                                      |
| ---------------------------- | ------------------------- | -------------------------------------------- |
| `white-space`                | How whitespace is handled | `nowrap`, `pre`, `pre-wrap`                  |
| `overflow` + `text-overflow` | Handle overflowing text   | `overflow: hidden; text-overflow: ellipsis;` |

**Example:**

```css
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

→ Truncates long text with “…”

---

### **H. Common Interview Points**

* Q: Difference between `em` and `rem` in font sizing?
  A: `em` relative to parent; `rem` relative to root.
* Q: Purpose of `line-height`?
  A: Controls vertical spacing; improves readability.
* Q: How to import a custom font?
  A: Via `@import` or `<link>` from Google Fonts.
* Q: What is fallback font?
  A: A secondary font used if the preferred font fails to load.
* Q: How to make text overflow with dots?
  A: `text-overflow: ellipsis;`

---

### **Mini Visualization**

```html
<style>
h1 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: #2c3e50;
  text-align: center;
  letter-spacing: 4px;
}
</style>
<h1>Modern Typography</h1>
```

→ Centered heading with clean, bold visual spacing.

---

## **9. Backgrounds & Borders**

---

### **A. Background Properties**

Control how backgrounds (colors, images, gradients) appear behind elements.

| Property                | Description                | Example                             |
| ----------------------- | -------------------------- | ----------------------------------- |
| `background-color`      | Fills element with a color | `background-color: #f2f2f2;`        |
| `background-image`      | Sets an image              | `background-image: url("bg.jpg");`  |
| `background-repeat`     | Controls image repetition  | `no-repeat`, `repeat-x`, `repeat-y` |
| `background-size`       | Scales image               | `cover`, `contain`, `100px 200px`   |
| `background-position`   | Sets image position        | `center`, `top right`               |
| `background-attachment` | Fixes image to viewport    | `fixed`, `scroll`                   |
| `background`            | Shorthand                  | Combines multiple properties        |

**Example:**

```css
.hero {
  background: url("banner.jpg") center/cover no-repeat;
  height: 300px;
}
```

→ Background image fills container without stretching.

---

### **Multiple Backgrounds**

You can stack multiple images/colors:

```css
div {
  background:
    url("texture.png") repeat,
    linear-gradient(to bottom, #333, #111);
}
```

→ Gradient + texture overlay.

---

### **Gradients (No Image Needed)**

1. **Linear Gradient**

```css
background: linear-gradient(to right, #ff7e5f, #feb47b);
```

2. **Radial Gradient**

```css
background: radial-gradient(circle, #ff7e5f, #feb47b);
```

3. **Conic Gradient**

```css
background: conic-gradient(red, yellow, green, blue, red);
```

---

### **B. Border Properties**

| Property        | Description     | Example                                       |
| --------------- | --------------- | --------------------------------------------- |
| `border-width`  | Thickness       | `2px`                                         |
| `border-style`  | Line type       | `solid`, `dashed`, `dotted`, `double`, `none` |
| `border-color`  | Color of border | `#333`                                        |
| `border-radius` | Rounds corners  | `border-radius: 10px;`                        |
| `border`        | Shorthand       | `border: 2px solid #333;`                     |

**Example:**

```css
.card {
  border: 2px solid #444;
  border-radius: 12px;
  padding: 15px;
}
```

---

### **Rounded Corners**

```css
button {
  border-radius: 50%;
}
```

→ Makes element circular if width = height.

---

### **Border Images**

Replace plain borders with images.

```css
div {
  border: 10px solid transparent;
  border-image: url("border.png") 30 round;
}
```

---

### **Outline vs Border**

| Feature         | Border     | Outline                       |
| --------------- | ---------- | ----------------------------- |
| Affects layout  | Yes        | No                            |
| Rounded corners | Supports   | Doesn’t support               |
| Use case        | Visual box | Accessibility focus indicator |

Example:

```css
button:focus {
  outline: 2px solid blue;
}
```

---

### **C. Box Shadow**

Adds shadow effects.

```css
div {
  box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
}
```

Syntax: `offset-x offset-y blur spread color`

---

### **D. Common Interview Points**

* Q: Difference between `background-color` and `background`?
  A: `background` is shorthand that can include color, image, repeat, position, and size.
* Q: How to make a circular profile image?
  A: Equal `width` and `height`, `border-radius: 50%`.
* Q: `background-attachment: fixed` effect?
  A: Creates a parallax-style fixed background.
* Q: `border` vs `outline`?
  A: Border affects layout; outline does not.
* Q: Can gradients replace background images?
  A: Yes, using CSS-only gradients improves performance.

---

### **Mini Visualization**

```html
<style>
.card {
  width: 200px;
  height: 120px;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
  border: 2px solid #333;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}
</style>
<div class="card"></div>
```

→ Smooth gradient background with rounded border and shadow.

---

## **10. Pseudo-classes & Pseudo-elements**

---

### **Concept**

Pseudo-classes and pseudo-elements let you **style elements based on state or part of their content** — without needing extra HTML.

---

### **A. Pseudo-classes**

Define **element states** (dynamic conditions).

Syntax:

```css
selector:pseudo-class { property: value; }
```

#### **Common Pseudo-classes**

| Pseudo-class             | Description                            | Example                                      |
| ------------------------ | -------------------------------------- | -------------------------------------------- |
| `:hover`                 | When mouse hovers over element         | `a:hover { color: red; }`                    |
| `:active`                | While element is being clicked         | `button:active { transform: scale(0.98); }`  |
| `:focus`                 | When element is focused (keyboard/tab) | `input:focus { border-color: blue; }`        |
| `:visited`               | Visited links                          | `a:visited { color: purple; }`               |
| `:first-child`           | First child of a parent                | `li:first-child { font-weight: bold; }`      |
| `:last-child`            | Last child of a parent                 | `li:last-child { color: gray; }`             |
| `:nth-child(n)`          | nth child pattern                      | `li:nth-child(odd) { background: #f9f9f9; }` |
| `:not(selector)`         | Exclude specific elements              | `p:not(.highlight) { color: gray; }`         |
| `:checked`               | Checked form inputs                    | `input:checked { accent-color: green; }`     |
| `:disabled` / `:enabled` | Form control states                    | `button:disabled { opacity: 0.5; }`          |

**Example:**

```css
button:hover {
  background-color: navy;
  color: white;
}
```

---

### **B. Pseudo-elements**

Style **specific parts of an element**.
Syntax uses **double colons `::`** (modern standard).

```css
selector::pseudo-element { property: value; }
```

#### **Common Pseudo-elements**

| Pseudo-element   | Description                   | Example                                |
| ---------------- | ----------------------------- | -------------------------------------- |
| `::before`       | Insert content before element | `h1::before { content: "★ "; }`        |
| `::after`        | Insert content after element  | `h1::after { content: " ✓"; }`         |
| `::first-line`   | Style first line of text      | `p::first-line { font-weight: bold; }` |
| `::first-letter` | Style first letter            | `p::first-letter { font-size: 2em; }`  |
| `::selection`    | Style highlighted text        | `::selection { background: yellow; }`  |
| `::marker`       | Style list bullets            | `li::marker { color: red; }`           |
| `::placeholder`  | Style input placeholder text  | `input::placeholder { color: gray; }`  |

---

### **C. Combined Example**

```html
<style>
button {
  background: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
}
button:hover {
  background: #45a049;
}
button::after {
  content: " →";
}
</style>

<button>Continue</button>
```

→ On hover, color changes; arrow appears after text.

---

### **D. Practical UI Example**

```css
input:focus::placeholder {
  color: transparent;
}
p::first-letter {
  font-size: 2em;
  color: navy;
}
```

---

### **E. Common Interview Points**

* Q: Difference between pseudo-class and pseudo-element?
  A: Pseudo-class = state (`:hover`); pseudo-element = part of element (`::before`).
* Q: Can pseudo-elements insert real DOM content?
  A: No, only visual (not part of the DOM tree).
* Q: Why use `::before` and `::after`?
  A: For icons, decorations, counters without extra HTML.
* Q: Which comes first in CSS order — pseudo-class or pseudo-element?
  A: Pseudo-class comes first, e.g., `a:hover::before`.

---

### **Mini Visualization**

```html
<style>
p::first-letter { color: red; font-size: 24px; }
p:hover::after { content: " (hovered)"; color: gray; }
</style>
<p>Interactive text styling example.</p>
```

→ First letter is red; “(hovered)” appears on hover.

---

## **11. Transitions, Transforms & Animations**

---

### **A. CSS Transitions**

**Purpose:** Smoothly animate a change from one state to another (e.g., hover effect).

**Syntax:**

```css
transition: property duration timing-function delay;
```

**Example:**

```css
button {
  background: steelblue;
  color: white;
  transition: background 0.3s ease;
}
button:hover {
  background: darkblue;
}
```

→ Color fades smoothly instead of changing instantly.

**Common properties to transition:**
`color`, `background-color`, `width`, `height`, `opacity`, `transform`

**Timing functions:**

* `ease` (default)
* `linear`
* `ease-in` / `ease-out` / `ease-in-out`
* `cubic-bezier(x1, y1, x2, y2)` (custom curve)

---

### **B. CSS Transforms**

**Purpose:** Move, rotate, scale, or skew elements **without affecting document flow**.

**Syntax:**

```css
transform: <function>(value);
```

| Function          | Effect                  | Example                             |
| ----------------- | ----------------------- | ----------------------------------- |
| `translate(x, y)` | Moves element           | `transform: translate(20px, 10px);` |
| `scale(x, y)`     | Resizes element         | `transform: scale(1.5);`            |
| `rotate(deg)`     | Rotates element         | `transform: rotate(45deg);`         |
| `skew(x, y)`      | Skews element           | `transform: skew(20deg, 10deg);`    |
| `matrix()`        | Combines all transforms | Complex cases only                  |

**Example:**

```css
div:hover {
  transform: scale(1.1) rotate(5deg);
  transition: transform 0.3s ease;
}
```

---

### **C. CSS Animations**

**Purpose:** Define keyframes for multi-step animations.

**Structure:**

1. Define keyframes
2. Attach animation to an element

**Example:**

```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.box {
  width: 100px;
  height: 100px;
  background: coral;
  animation: pulse 1.5s infinite ease-in-out;
}
```

→ Element smoothly grows and shrinks repeatedly.

---

### **Animation Properties**

| Property                    | Description          | Example                         |
| --------------------------- | -------------------- | ------------------------------- |
| `animation-name`            | Keyframe name        | `pulse`                         |
| `animation-duration`        | Time for one cycle   | `2s`                            |
| `animation-timing-function` | Motion curve         | `ease`, `linear`                |
| `animation-delay`           | Wait before starting | `0.5s`                          |
| `animation-iteration-count` | Number of repeats    | `infinite`, `3`                 |
| `animation-direction`       | Reverse playback     | `alternate`, `reverse`          |
| `animation-fill-mode`       | Keeps end state      | `forwards`, `backwards`, `both` |
| `animation`                 | Shorthand            | `animation: pulse 2s infinite;` |

---

### **D. Combined Example**

```html
<style>
button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  transition: transform 0.3s ease;
}
button:hover {
  transform: translateY(-3px);
}
button:active {
  transform: scale(0.95);
}
</style>

<button>Click Me</button>
```

→ Lift on hover, press effect on click.

---

### **E. Practical Animation Example**

```css
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.alert {
  animation: slideIn 0.5s ease-out forwards;
}
```

→ Common for toast or modal entrance effects.

---

### **F. Common Interview Points**

* Q: Difference between transition and animation?
  A: Transition = between two states; Animation = keyframes and timeline control.
* Q: How to make animation run once and stay at end?
  A: `animation-iteration-count: 1; animation-fill-mode: forwards;`
* Q: Can you combine transform functions?
  A: Yes, e.g. `transform: translateX(10px) rotate(20deg);`
* Q: Why use GPU-friendly properties?
  A: `transform` and `opacity` animate smoother than layout-affecting properties like `width` or `top`.

---

### **Mini Visualization**

```
Hover → smooth fade
Click → button compresses
Alert → slides in from left
```

---

## **12. Media Queries & Responsive Design**

---

### **A. Concept**

Media queries allow CSS to **adapt layout and style to different screen sizes or devices**.
They are core to **responsive design**, ensuring usability on phones, tablets, and desktops.

---

### **B. Syntax**

```css
@media media-type and (condition) {
  /* CSS rules */
}
```

Example:

```css
@media screen and (max-width: 600px) {
  body {
    background: lightgray;
  }
}
```

→ When screen width ≤ 600px, background turns gray.

---

### **C. Media Types**

| Type     | Description                         |
| -------- | ----------------------------------- |
| `screen` | Regular displays (phones, monitors) |
| `print`  | Printed pages or print preview      |
| `all`    | Applies to all devices              |

**Example:**

```css
@media print {
  nav { display: none; }
}
```

→ Hides navigation when printing.

---

### **D. Common Media Features**

| Feature       | Description                | Example                   |
| ------------- | -------------------------- | ------------------------- |
| `max-width`   | Trigger when width ≤ value | `(max-width: 768px)`      |
| `min-width`   | Trigger when width ≥ value | `(min-width: 1024px)`     |
| `orientation` | Portrait or landscape      | `(orientation: portrait)` |
| `resolution`  | Pixel density (for Retina) | `(min-resolution: 2dppx)` |

**Example:**

```css
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar { display: block; }
}
```

---

### **E. Responsive Breakpoints (Industry Practice)**

| Device  | Common Width Range |
| ------- | ------------------ |
| Mobile  | up to 600px        |
| Tablet  | 601px – 1024px     |
| Desktop | 1025px and above   |

Example responsive layout:

```css
.container { width: 90%; }

@media (min-width: 768px) {
  .container { width: 70%; }
}

@media (min-width: 1024px) {
  .container { width: 50%; }
}
```

---

### **F. Responsive Images**

```css
img {
  max-width: 100%;
  height: auto;
}
```

→ Image scales with container width.

---

### **G. Fluid Typography**

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

→ Automatically scales with viewport width, but stays within limits.

---

### **H. Orientation Example**

```css
@media (orientation: landscape) {
  body { background: lightblue; }
}
```

→ Triggers when device is horizontal.

---

### **I. Common Interview Points**

* Q: What is a media query?
  A: Conditional CSS applied based on device characteristics (e.g., width, orientation).
* Q: Difference between `min-width` and `max-width`?
  A: `min-width` = applies above a width, `max-width` = applies below a width.
* Q: Which is better, mobile-first or desktop-first?
  A: Mobile-first (use `min-width`) is modern and scalable.
* Q: How do you ensure text and layout adjust for small screens?
  A: Use relative units (`%`, `vw`, `rem`) + media queries.
* Q: Can media queries detect dark mode?
  A: Yes — `@media (prefers-color-scheme: dark)`

---

### **J. Example Responsive Page**

```html
<style>
.container {
  display: flex;
  flex-direction: row;
}
.box {
  flex: 1;
  margin: 10px;
  height: 100px;
  background: coral;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
</style>

<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

→ Boxes shift from row to column on smaller screens.

---

### **Mini Visualization**

```
Desktop: [Box][Box][Box]
Mobile: 
[Box]
[Box]
[Box]
```

---

## **13. CSS Variables (Custom Properties)**

---

### **A. Concept**

CSS variables (also called **custom properties**) store reusable values like colors, spacing, or fonts.
They make styles **consistent**, **maintainable**, and **easy to update**.

---

### **B. Syntax**

**Declaration:**

```css
--variable-name: value;
```

**Usage:**

```css
property: var(--variable-name);
```

**Example:**

```css
:root {
  --primary-color: #3498db;
  --padding: 10px;
}

button {
  background: var(--primary-color);
  padding: var(--padding);
}
```

→ All buttons share the same color and padding defined globally.

---

### **C. Scope**

1. **Global Variables**
   Declared inside `:root` (represents the document root).
   Accessible anywhere.

   ```css
   :root {
     --main-font: "Roboto", sans-serif;
   }
   ```

2. **Local Variables**
   Declared inside specific selectors — only work inside that scope.

   ```css
   .card {
     --card-bg: #f9f9f9;
     background: var(--card-bg);
   }
   ```

---

### **D. Fallback Values**

If variable is missing, a default value can be used:

```css
color: var(--link-color, blue);
```

→ Uses `blue` if `--link-color` isn’t defined.

---

### **E. Dynamic Updates with JavaScript**

CSS variables can be updated at runtime (unlike preprocessor variables):

```js
document.documentElement.style.setProperty('--primary-color', 'crimson');
```

→ Instantly changes all styles using that variable.

---

### **F. Inheritance**

Variables follow normal CSS inheritance rules.

```css
div {
  --text-color: black;
  color: var(--text-color);
}
section div {
  --text-color: green;
}
```

→ Nested `<div>` inherits the new green value.

---

### **G. Combining Variables**

You can use them in calculations:

```css
:root {
  --base-size: 10px;
}
p {
  margin: calc(var(--base-size) * 2);
}
```

→ `margin: 20px;`

---

### **H. Advantages**

* Centralized theme control
* Easy color scheme switching (e.g., dark/light mode)
* Live manipulation with JavaScript
* Works in plain CSS (no build tools needed)

---

### **I. Common Interview Points**

* Q: Difference between CSS variables and SASS variables?
  A: CSS variables are dynamic (run-time); SASS variables are static (compile-time).
* Q: How do CSS variables handle inheritance?
  A: They follow the normal CSS cascade and inherit unless overridden.
* Q: Why use `:root`?
  A: It defines global variables accessible throughout the stylesheet.
* Q: Can CSS variables hold computed values?
  A: Yes, via `calc()`.

---

### **J. Practical Example (Dark/Light Theme)**

```css
:root {
  --bg-color: white;
  --text-color: black;
}
[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #f5f5f5;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}
```

Switching `data-theme="dark"` on the `<html>` tag changes the entire color scheme instantly.

---

### **Mini Visualization**

```
:root defines → global values
Components → use var(--name)
Theme toggle → updates vars instantly
```

---

## **14. Best Practices + Common Interview Scenarios**

---

### **A. CSS Best Practices**

1. **Use External Stylesheets**
   Keep HTML clean and maintainable.

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

2. **Follow a Naming Convention (like BEM)**
   BEM = Block, Element, Modifier → improves scalability.

   ```css
   .card__title--highlight { color: blue; }
   ```

3. **Avoid Inline Styles**
   Harder to maintain and override.
   ✅ Use classes or variables instead.

4. **Use `box-sizing: border-box;` Globally**
   Simplifies width calculations.

   ```css
   * { box-sizing: border-box; }
   ```

5. **Prefer Relative Units**
   `%`, `em`, `rem`, `vw`, `vh` → make designs responsive.

   ```css
   font-size: 1.2rem;
   ```

6. **Group and Comment Logically**
   Organize by component or layout section for clarity.

   ```css
   /* Header styles */
   header { ... }
   ```

7. **Use Shorthand Properties**
   More compact and readable.

   ```css
   margin: 10px 20px;
   background: url("img.jpg") center/cover no-repeat;
   ```

8. **Minimize Repetition**
   Reuse classes and CSS variables instead of repeating rules.

9. **Mobile-First Design**
   Start with small screens, scale up with `min-width` queries.

   ```css
   @media (min-width: 768px) { ... }
   ```

10. **Keep Specificity Low**
    Avoid IDs or deep nesting; rely on classes.
    Easier to override styles.

---

### **B. Common CSS Interview Scenarios**

#### **1. Center a Div Horizontally and Vertically**

**Flexbox:**

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

**Grid:**

```css
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

---

#### **2. Create a Responsive 3-Column Layout**

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.column {
  flex: 1 1 300px;
}
```

→ Columns stack on small screens.

---

#### **3. Hide an Element but Keep It Accessible**

```css
.hidden {
  position: absolute;
  left: -9999px;
}
```

→ Screen readers can still detect it.

---

#### **4. Maintain Image Aspect Ratio**

```css
img {
  width: 100%;
  height: auto;
}
```

---

#### **5. Make Text Ellipsis for Long Content**

```css
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

#### **6. Sticky Navigation Bar**

```css
nav {
  position: sticky;
  top: 0;
  background: #fff;
}
```

---

#### **7. Create a Button Hover Effect**

```css
button {
  background: royalblue;
  color: white;
  transition: background 0.3s;
}
button:hover {
  background: navy;
}
```

---

#### **8. Make a Circular Profile Picture**

```css
img.profile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
```

---

#### **9. Equal-Height Cards**

```css
.cards {
  display: flex;
  align-items: stretch;
}
```

---

#### **10. Responsive Text**

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

---

### **C. Common Interview Questions**

| Question                                               | Key Point                                             |
| ------------------------------------------------------ | ----------------------------------------------------- |
| Explain the box model.                                 | Margin, border, padding, content.                     |
| Difference between inline, block, inline-block.        | Layout behavior and box sizing.                       |
| What is specificity?                                   | Inline > ID > Class > Element.                        |
| What is z-index?                                       | Stacking order (only works with positioned elements). |
| What are pseudo-elements?                              | Style part of element (`::before`, `::after`).        |
| Difference between visibility:hidden and display:none. | Hidden = occupies space; none = removed from flow.    |
| What’s the difference between absolute and fixed?      | Absolute → parent; Fixed → viewport.                  |
| How to optimize CSS performance?                       | Minify CSS, limit selectors, use external files.      |
| How to make a responsive layout?                       | Relative units + media queries + flex/grid.           |
| How to reduce repetition?                              | CSS variables, reusable classes.                      |

---

### **D. Summary**

| Topic                      | Core Idea                 |
| -------------------------- | ------------------------- |
| **Selectors**              | Target elements precisely |
| **Box Model**              | Understand element sizing |
| **Position/Display**       | Control layout behavior   |
| **Flex/Grid**              | Modern responsive layouts |
| **Variables**              | Reusable design system    |
| **Transitions/Animations** | Visual interactivity      |
| **Media Queries**          | Adapt across devices      |

---

### **Mini Visualization**

```
Clean CSS = scalable system
Responsive layout = flexible units + media queries
Reusable theme = variables + consistent structure
```

---

✅ **All 14 CSS interview topics completed.**
