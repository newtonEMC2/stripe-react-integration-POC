import React from 'react'
import './App.css';

function App() {
const [restaurants, setRestaurants] = React.useState([])

React.useEffect(() => {
  fetch('http://localhost:1337/api/restaurants')
  .then(res => res.json())
  .then(json => setRestaurants(json.data))
}, [])

  return (
    <div className="App">
      <header>
        FRONTEND
      </header>
      <main>
        {JSON.stringify(restaurants)}
      </main>
    </div>
  );
}

export default App;
