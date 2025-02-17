import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './conpunents/Home/Home.jsx'
import About from './conpunents/About/About.jsx'
import Contact from './conpunents/Contact/Contact.jsx'
import User from './conpunents/User/User.jsx'
import Github from './conpunents/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element= {<App/>}>
      <Route path='' element= {<Home />} />
      <Route path='About' element= {<About/>} />
      <Route path='Contact' element= {<Contact/>} />
      <Route path='user/:userid' element= {<User/>} />
      <Route path='Github' element= {<Github/>} />
      </Route>
  )
)

{/* const router = createBrowserRouter([
  {
   path: '/',
   element: <App/>,
   children: [
     {
       path: "",
       element: <Home/>
     },
     {
      path: "About",
      element: <About/>
     },
    {
      path: "Contact",
      element: <Contact/>
    },
    {
      path: "user/:userid",
      element: <User/>
    },
    {
      path: "Github",
      element: <Github/>
    },
    ]
  }
]) */}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
