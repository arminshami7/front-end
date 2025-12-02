import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './app.css';

function App(){
  return(
    <div>

      <Routes>

        <Route path="/" element={<HomePage />} />

      </Routes>
    </div>
  );
}

export default App;