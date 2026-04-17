// Accept `joke` and `loading` as props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* If `loading` is true, display "Loading..." otherwise, display the joke */}
      {loading ? <p> Loading... </p> : <p>{joke}</p>}
    </div>
  )
}

// Make globally available
export default JokeDisplay
