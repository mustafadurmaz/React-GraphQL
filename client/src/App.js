import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post/:id' element={<Detail />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
