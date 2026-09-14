# devStack

devStack is a project based on making technology stack where user can add the technologies they want to use by clicking on cards that contains details about the technoloy , adds them to a stack. Technologies can be added , removed separately or altogether

## Technologies Used

- React
- TypeScript
- Vite
- CSS and Tailwind CSS
- React-Toastify
- JSON (technology data)

## Features

1. **Technology cards from JSON** – every technology is loaded from a local JSON file and shows its icon, badge, category, difficulty and rating.
2. **Build your stack** – add a technology to Your Stack, remove a single item or clear everything with Remove All. The same technology can't be added twice.
3. **Toast alerts and responsive layout** – every stack action shows a toast message, and the whole site works on mobile, tablet and desktop.

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax-extension which lets us write html like code with javascript. It's used in react to decide the ui alongside the code by dividing into components 
### 2. What is the difference between props and state?
props is like argument of function that's passed into a component by it's parents but state in used inside a component
### 3. What does the `useState` hook do, and where did you use it in this project?
useState lets a functional component hold a piece of data that persists across re-renders, and gives you a setter function that re-renders a component when the data changes. I used it in my Technologies.tsx component. 
### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
useEffet handles side effects like data fetching, subscriptions, times etc after a component renders.
### 5. Why does every item in a `.map()` list need a unique `key` prop?
Because the map() works like loop handling each element of an array but with better control
### 6. What is conditional rendering? Show one place you used it.
It means doing an action based on conditions. Like if condition is satisfied rendering happens.
### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
parents pass data to child component using props and child just calls it
