// src/App.jsx (شکل جدید و نهایی)
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import MovieDetailPage from './pages/MovieDetailPage';


function App(){
  return(
    <div>

      <Routes>

        <Route path = "/" element={<HomePage />} />
        <Route path = "/movie/:id" element = {<MovieDetailPage />} />
        

      </Routes>
    </div>
  );
}

export default App;
