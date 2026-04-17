// Accept `fetchJoke` as a prop
const FetchButton = ({ fetchJoke }) => {
  return (
    // Add an onClick event that calls `fetchJoke`
    <button className="fetch-button" onClick={fetchJoke}>Get a New Joke</button>
  )
}

// Make globally available
export default FetchButton
