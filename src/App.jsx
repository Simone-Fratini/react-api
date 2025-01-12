import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import DefaultLayout from './pages/DefaultLayout';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FoodPage from './pages/FoodPage';
import ErrorPage from './pages/ErrorPage'
import PostForm from './pages/PostForm';
import CardPage from './pages/CardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/food/:id" element={<CardPage />} />
          <Route path="/addCard" element={<PostForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
