# Task Manager Application

> 🔴 **Live Demo:** [Insert Your Live Live Here]

## 📝 Overview
A dynamic, fully responsive Task Manager built entirely with Vanilla JavaScript. This project was developed to demonstrate core web development concepts including advanced DOM manipulation, state management, and modern CSS architecture.

## ✨ Features
* **Full CRUD Functionality:** Users can Create, Read, Update, and Delete tasks dynamically.
* **State Management:** The application intelligently toggles a single modal form between "Create Mode" and "Edit Mode" based on the global state.
* **Smart Event Delegation:** Utilizes a single event listener on the parent container to handle interactions for dynamically generated DOM elements, ensuring optimal performance and preventing memory leaks.
* **Dynamic Theme Toggling:** A flawless Light/Dark mode implementation using CSS root variables (`:root`) for instant, cascading UI updates.
* **Responsive Design:** Built with CSS Flexbox and Grid to ensure a seamless experience across desktop and mobile devices.

## 🧠 JavaScript Concepts Showcase
This project includes a dedicated, interactive "Concepts Section" to demonstrate an understanding of core JavaScript theories:
1. **Event Bubbling vs. Capturing:** An interactive nested-box UI proving how events travel through the DOM hierarchy, utilizing the `{ capture: true }` parameter.
2. **Property vs. Attribute:** A live demonstration proving the difference between a static HTML attribute (`.getAttribute`) and a live DOM property (`.value`).

## 🛠️ Technologies Used
* **HTML5:** Semantic markup and accessibility.
* **CSS3:** Custom variables, Flexbox, CSS Grid, and responsive media queries.
* **Vanilla JavaScript (ES6+):** Arrow functions, template literals, DOM APIs (`createElement`, `closest`, `querySelector`), and Event Handling.

## 🚀 Local Setup Instructions
If you want to run this project locally on your machine:
1. Clone this repository to your local machine.
2. Open the project folder in your preferred code editor (e.g., VS Code).
3. Open `index.html` in your browser (or use an extension like Live Server).
4. No `npm install` or build steps required—it runs natively in the browser!