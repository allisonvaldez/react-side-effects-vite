// Import necessary staes, effects, and components
import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

/* Create main App component which is in charge of:
  1. fetching a joke from the API upon page load.
  2. users should be able to fetch a new joke by clicking the button.
  3. a loading message should be displayed while waiting for API response.
*/
function App() {
  // Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  // Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  /* Define a function that fetches a programming joke from an API:
    1. Start by setting `loading` to true
    2. Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
    3. Update the `joke` state with the fetched joke
    4.Set `loading` to false once the joke is loaded
    5. Handle any errors in the `.catch` block
  */
  function fetchJoke() {
    setLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch(error => console.error("Error fetching jokes:", error));
  }

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />

      {/* Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

// Make globally available
export default App
