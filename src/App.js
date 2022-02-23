
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
import MovieDetails from './pages/MovieDetails';

const store = ConfigureStore()

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App
