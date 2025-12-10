import './css/App.css';
import MovieCard from './components/MovieCard'; 
import Favourites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/favorites' element={<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>
    
  );
}



export default App;
