import './App.css';
import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <h3>Welcome to restaurant updater</h3>
      <Link to="/restaurant/edit">go to restaurant editor</Link>
      </div>,
  },
  {
    path: "/restaurant/edit",
    element:<RestaurantEditor></RestaurantEditor>,
  },
]);

function RestaurantEditor() {
  const [name, setName] = React.useState("")
  const updateRestaurantName = (name) => {
    fetch('http://localhost:1337/api/restaurants/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: {
        description: name,
      }}),
    })
  }
  
  return (
    <div>
      <header>wellcome from restaurant editor!</header>
      <input onChange={(e) => setName(e.target.value)} placeholder='new name...'></input>
      <button onClick={() => updateRestaurantName(name)}>update name</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>
        CMS UI
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
