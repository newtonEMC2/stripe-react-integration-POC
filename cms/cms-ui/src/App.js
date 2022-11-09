import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        CMS UII
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
