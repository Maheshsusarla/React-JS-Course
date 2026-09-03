# Fourth App — React Counter

A simple, styled counter application built with **React** and the **useState** hook, using **Vite** as the build tool.

## Features

- Increment, decrement, and reset counter functionality
- Clean, card-based UI with a gradient background
- Built using React functional components and hooks
- Fast development experience powered by Vite

## Tech Stack

- **React** — UI library
- **Vite** — Build tool and dev server
- **CSS** — Custom styling (no external UI library)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and navigate to this project:

```bash
git clone https://github.com/Maheshsusarla/React-JS-Course.git
cd React-JS-Course/fourth-app
```

Install dependencies:

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`) in your browser.

### Building for Production

```bash
npm run build
```

This generates an optimized build in the `dist` folder.

## Project Structure

```
fourth-app/
├── src/
│   ├── App.jsx          # Root component
│   ├── Counter.jsx       # Counter component (useState logic)
│   ├── Counter.css       # Counter component styling
│   ├── main.jsx           # Entry point
│   └── index.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

The `Counter` component uses React's `useState` hook to manage a numeric `count` value:

```jsx
const [count, setCount] = useState(0);
```

- **Increment** button increases the count by 1
- **Decrement** button decreases the count by 1
- **Reset** button sets the count back to 0

Each button click triggers a state update, causing React to re-render the component with the new value.

## Author

**Mahesh Susarla**  
Part of the [React-JS-Course](https://github.com/Maheshsusarla/React-JS-Course) repository — a collection of React learning projects.

## License

This project is for learning purposes and is free to use.