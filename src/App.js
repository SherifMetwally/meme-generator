import './App.css';
import Meme from './components/Meme/Meme';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Meme />
      </div>
    </div>
  );
}

export default App;
