# Project Documentation

# Overview
This project implements a simple React application that handles routing, state management, and map rendering using various libraries and services. The application is designed to display sites and countries, using data from a local mock API created with json-server.

Deployment URL: https://world-heritage-sites.vercel.app/

![image](https://github.com/user-attachments/assets/a0ba2476-ea2d-421a-8b5b-9523eb680c29)
![image](https://github.com/user-attachments/assets/f63b548f-f268-42ad-ad29-1b535df859a8)

## Installation instructions
Follow steps to succesfull run the project on local environment:

### 1. `yarn install`

Install project dependencies.

### 2. `yarn run json-server`

Run data server-

### 3. `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Production Readiness
To make this application production-ready, I focused on the following key principles:

- Scalability: The architecture uses React’s component-based structure, making it easy to scale in the future. While the app is small, the use of context API and hooks will allow for easy state management if additional complexity is added.

- Separation of Concerns: Each component is kept small and focused on a specific responsibility, such as rendering a map or displaying a list of sites. This promotes easier testing, debugging, and maintainability.

- Performance Optimization:
The application uses code splitting with React.lazy() and Suspense to load components only when needed, improving load time. Additionally, useCallback is utilized to memoize callback functions, preventing unnecessary re-creations and improving performance. These optimizations help enhance the overall efficiency of the app.

- Efficient Rendering: Components are designed to re-render only when necessary, using React’s built-in hooks (useState, useEffect) and the Context API for state management.

- Error Handling: Proper error handling is implemented with try/catch blocks in the async calls using axios. The user interface will gracefully handle API errors, loading states, and any other unexpected failures.

## Documentation & Deployment
The documentation follows the necessary steps to install, run, and deploy the app. It’s designed to be as clear and simple as possible to help both developers and users understand how to use the system.

To build for production:
### `yarn build`

The build command creates a production-optimized version of the app, ready for deployment. The app can be served using any static hosting solution, such as Netlify, Vercel, or GitHub Pages


## Build vs Buy

What We Built:
- Custom Components: The React components are custom-built to handle specific tasks (e.g., displaying a map, listing sites). These components are simple, reusable, and easy to test.

- State Management: We implemented the state management solution using React’s Context API, which is sufficient for this app’s scale. If the app grows more complex in the future, Redux could be considered, but for now, Context API serves the purpose well.

What We Bought:

- Material UI: Instead of building a design system from scratch, Material UI was used to handle the UI components, layout, and responsiveness. This reduces development time and ensures a high-quality user interface with minimal effort.

- Leaflet: We used Leaflet for mapping instead of building a custom solution. It is well-documented and provides the necessary features for this app’s map functionality.

- Axios: Instead of writing our own data-fetching logic, we opted for Axios because it simplifies the process and is widely used in production applications, which reduces the risk of reinventing the wheel.

- json-server: Rather than setting up a full backend or relying on external APIs, json-server is used to simulate a local API during development. This eliminates the need for additional backend infrastructure while still allowing the front-end to interact with a mock API.


## Tradeoffs and choices
- React was chosen over other frameworks (like Angular or Vue) because of its simplicity, performance, and community support. It also allows for a flexible approach, making it easier to integrate other tools like Material UI and Leaflet.

- Context API was selected for state management instead of more complex solutions like Redux. The app does not require complex state or inter-component communication, and using the Context API keeps the app lightweight and easier to maintain.

- Axios is used for HTTP requests instead of using fetch directly. Axios simplifies error handling, supports request/response interceptors, and allows for easier configuration (e.g., setting up default headers, timeouts).

- json-server is used to simulate a REST API for local development. This was chosen because it’s easy to set up, requires no additional configuration, and provides a fully working API with support for CRUD operations, which is perfect for this simple project.

- Material UI was chosen over creating a custom design system because it provides a comprehensive suite of components and styles out of the box. This not only speeds up development but also ensures a consistent and responsive design. If more customization was required, a custom theme could be applied to Material UI.

- Leaflet was chosen for map rendering because it is open-source, lightweight, and does not require an API key. Although Google Maps or Mapbox could have been alternatives, Leaflet meets the project’s requirements without introducing additional costs or dependencies.

## Future improvements
- Add Comprehensive Unit Testing: Enhance the testing suite by adding more unit tests for individual components to ensure robust test coverage, especially for edge cases and error handling.

- Improve Accessibility: Increase the accessibility of custom components by ensuring full compliance with WCAG guidelines, including the use of ARIA roles, proper tab navigation, and semantic HTML.

- Implement CI/CD Pipelines: Set up continuous integration and continuous deployment (CI/CD) pipelines using platforms like GitHub Actions, CircleCI, or Jenkins to automate the testing, building, and deployment processes, ensuring smoother and faster delivery cycles.

- Scalability of State Management: As the application grows, transition to a more advanced state management solution like Redux or Zustand for handling more complex states and interactions across multiple components, ensuring maintainability and performance.

- Consume Data from Real APIs: Replace the mock data from json-server with a real API to provide dynamic, up-to-date information, improving the app's functionality and use case.

- Introduce Styled Components or Similar: Add a styling solution such as Styled Components or Emotion to extend customization options, making it easier to apply custom styles and override Material UI components without needing to eject. This would offer better flexibility and maintainability in the long run.

- Error Boundaries: Introduce error boundaries in your application to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI. This will enhance user experience by preventing the entire app from crashing due to unexpected issues.

- Automated End-to-End (E2E) Testing: In addition to unit testing, we could integrate E2E testing tools like Cypress or Playwright to simulate real user interactions and test workflows across your application.

- User Authentication and Authorization: If we plan on consuming real APIs, it might be useful to add user authentication and authorization functionality, allowing for secure access to certain data or actions in the app.

- Analytics and Monitoring: Integrate a monitoring tool like Sentry or LogRocket to track errors, performance issues, and user behavior in real-time. This will help you identify and fix issues quickly as the application grows.

- Optimized Build Process: Consider using Webpack's Bundle Analyzer or other tools to analyze your production build and optimize it further, removing unused code or unnecessary dependencies, and ensuring minimal bundle sizes.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
