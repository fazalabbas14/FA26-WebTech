# Lab Mid-Term Exam

## Student Information

- **Name:** Fazal Abbas
- **Registration Number:** FA24-BCS-127
- **Course:** Web Technologies
- **Project:** Native Union-inspired E-commerce Website

## Personal Exam Numbers

| Variable | Calculation | Value |
|---|---|---:|
| N | Last two digits of FA24-BCS-127 | 27 |
| BP | 600 + N | 627px |
| H | (N × 7) mod 360 | 189° |
| K | (N mod 3) + 3 | 3 |
| Accent colour | hsl(H, 70%, 45%) | `hsl(189, 70%, 45%)` |
| Sticky top offset | (N mod 40) + 70 | 97px |
| Premium price threshold | N × 100 | Rs. 2,700 |

## Project Overview

This project is an extension of my Assignment 2 Native Union-inspired e-commerce website. The existing website structure, product cards, images, navigation and footer have been retained and updated to meet the lab mid-term requirements.

The implementation uses HTML5, CSS3 and plain JavaScript. JavaScript is used only for Task 3. Tasks 1 and 2 are implemented using HTML and CSS without custom JavaScript.

## Files Changed

| File | Changes made |
|---|---|
| `index.html` | Added the CSS-only category filter, search input, price-sort button, no-results message and JavaScript file reference. Existing product cards were retained and assigned category attributes. |
| `css/style.css` | Added category-filter styling and CSS-only filtering rules, updated the product listing layout, styled the search/sort controls and Premium labels, and added responsive rules. Also includes the product-detail grid and sticky-details styling. |
| `product.html` | Added the product detail page with product image, name, price, quantity control, Add to Cart button and a long product description. |
| `script.js` | Added live product search, combined search/category matching, alternating price sorting, and dynamically generated Premium labels. |
| `README.md` | Documented student information, personal exam values, changed files, task implementation and AI tools used. |
| `FA24-BCS-127-midterm.pdf` | Submission document containing student details, required browser screenshots and the added/changed code for each task. |

## Task 1: CSS-only Category Filter

**Files changed:** `index.html`, `css/style.css`

Added four radio-button filters: All, Desk Essentials, Mobile Accessories and Everyday Carry. Each existing product card was assigned a `data-category` attribute so CSS can identify its category.

Implemented filtering without JavaScript using the CSS `:has()`, `:checked` and `:not()` selectors. The selected filter is highlighted using the personal accent colour `hsl(189, 70%, 45%)`. The product listing uses a grid so hidden cards do not leave empty spaces. All is selected by default.

## Task 2: Product Detail Page with Sticky Details Box

**Files changed:** `product.html`, `css/style.css`

Created `product.html` using the existing website styling and header/footer. The page displays a product image, product name, price, quantity input, Add to Cart button and a sufficiently long product description.

Used CSS Grid with the named areas `image`, `details` and `description`. Below 627px, the areas are stacked in one column. At 627px and wider, the image and details appear side by side, with the description spanning both columns. The details box uses `position: sticky` and `top: 97px` on wider screens.

## Task 3: JavaScript Live Search and Price Sorting

**Files changed:** `index.html`, `css/style.css`, `script.js`

Added a live search field that reads product names from the existing product cards and filters them as the user types. Search is case-insensitive and works together with the Task 1 category filter. The message `No products found` is displayed when no product matches both filters.

Added a price-sort button that alternates between lowest-to-highest and highest-to-lowest order. Prices are read from each card's `data-price` attribute, and existing card elements are reordered using `appendChild()` rather than recreated with `innerHTML`. On page load, the script adds a `Premium` label to products priced above Rs. 2,700.

## Responsive Testing

The website must be checked at all three exam widths:

- **375px:** Mobile layout.
- **627px:** Exact personal breakpoint.
- **1280px:** Desktop layout.

Task 1 and Task 2 should be checked at all three widths. Task 3 should also be tested with live search, category filtering, the no-results message, both sorting directions and Premium labels.

## Git Commit Record

The required commits should be pushed during the exam:

1. `midterm: baseline copy`
2. `midterm: implement CSS category filter`
3. `midterm: add responsive sticky product page`
4. `midterm: implement live search and price sorting`

## AI Tools Used

- **ChatGPT (OpenAI):** Used for implementation guidance, code review, explanations of HTML/CSS/JavaScript concepts and debugging support.

## Submission Checklist

- [ ] Baseline copy created and pushed before making task changes.
- [ ] Task 1 completed, tested and committed.
- [ ] Task 2 completed, tested and committed.
- [ ] Task 3 completed, tested and committed.
- [ ] At least four commits pushed to the repository during the exam.
- [ ] README updated to match the final files and implementation.
- [ ] Screenshots captured at 375px, 627px and 1280px.
- [ ] Task 3 screenshots show search, sorting and/or Premium labels working.
- [ ] PDF created as `FA24-BCS-127-midterm.pdf` and placed directly inside `midterm/`.
- [ ] PDF contains student details, screenshots and code for all three tasks.