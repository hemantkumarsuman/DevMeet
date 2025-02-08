# Project Using React + Vite

- Create Scafold Project using React+vite 
- run 'npm install' in terminal
- Root === main.jsx
- Remove unnecessary code from App.jsx and add 'Hello world' in App.jsx
- Install tailwind for "vite + react" project
- Install DaisyUi(It is component design Library compatible with TailwindCSS)
- Add navbar component from daisyUi in App.jsx
- create Navbar.jsx component
- Install react-router-dom
  NOTE: We will use "react router" component for routing instead of createBrowserRoute in this project
- Create BrowserRouter > Routes > Route > RouteChildren
- Create an Outlet in Body Component
- Create Footer
- Login Page => We will use AXIOS library for API call
- Install Axios library
- handle CORS => install npm cors in backend code => add middleware with configuarations : origin, credential:true
- Whenever you are making an API call from frontend using AXIOS pass extra property in AXIOS as {withCredential:true}
- Install redux toolkit
- Install react-redux
- create store using configureStore[appStore.js] => ADD provider to [app.js] => createSlice[userSlice.js] => add reducer to store
- Add redux devtool in Browser
- See if data is coming properly in store
- Navbar profile pic should update as soon as user Login => Navigate to Feed page
- Feature: You should not be able to redirect to oyher routes without login.
- Logout Feature
- Feed




# Basic Structure of project
  
  Body.jsx
    Navbar.jsx
        Route /login
        Route /profile
        .
        .
        .

