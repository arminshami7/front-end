// src/App.jsx (شکل جدید و نهایی)
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import MovieDetailPage from './pages/MovieDetailPage';
import TestPage from './pages/TestPage';

function App(){
  return(
    <div>

      <Routes>

        <Route path = "/" element={<HomePage />} />
        <Route path = "/movie/:id" element = {<MovieDetailPage />} />
        <Route path ="/test" element={<TestPage />} />

      </Routes>
    </div>
  );
}

export default App;
