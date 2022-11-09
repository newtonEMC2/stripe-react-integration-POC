import './App.css';

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
  return (
    <div>
      <header>wellcome from restaurant editor!</header>
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
