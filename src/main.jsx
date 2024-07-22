import React from 'react'
import ReactDOM from 'react-dom/client'
import RootPage, { loader as rootLoader, action as rootAction } from './routes/root'
import ErrorPage from './error-page'
import ContactPage, { loader as contactLoader } from './routes/contact'
import EditContact from './routes/edit'

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
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <ContactPage />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      }
    ],
  },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
