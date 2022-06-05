import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h2>Pokemon Memory Matching Game! Gotta Match 'Em All!</h2>
      <Cards />
      <button onClick={() => window.location.reload(false)}>Click here to reload the game:-)</button>
      
    </div>
  );
}

export default App;
