# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Netflix GPT  ( https://netflixgpt-b8cae.web.app) - live url

- Create React+Vite app
- Configured TailwindCss
- Header
- routing
- Sign in/Sign up form (Login Page : Resuable   
component)
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement sign in user api
- Created Redux store with userSlice
- Implemented Sign out
- Update Profile
- fetch from TMDB movies
- Bug-fix: fix the sign-up user displayName and profileURL issue
- moved all harcoded data to constant.js
   - Main Container
- Register TMDB now playing movies list API
- Custom Hook for now playing movies
- Update store with movies data 
- Fetch movie trailer for most popular movie
- Embedded the Youtube video and make it autoplay and mute
   -Secondary Container
-



# Features

- Render a Welcome Page Which wil have a netflix logo on left, signIn option on right, text on centre of screen and an input for email adress and a button to get started (Restart your membership).

- Login/Sign Up 

    - Sign In /Sign up form
    - redirect to Browse Page

- Browse (after authentication)

    - Header 
    - Main Movie
       - Trailer in Background
       - Title & Description
       - Movie Suggestions
            -MovieList * N
            -MoviesCard * N

- Netflix Gpt

     - Search Bar
     - Movie Suggestions