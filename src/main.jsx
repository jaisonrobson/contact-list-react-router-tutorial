import React from 'react'
import ReactDOM from 'react-dom/client'
import RootPage from './routes/root'
import ErrorPage from './error-page'
import ContactPage from './routes/contact'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <ContactPage />
      }
    ],
  },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
