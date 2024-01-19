import { Route, Routes } from 'react-router-dom';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
import { HomePage } from '../pages/HomePage';
import { Header } from './Header';
import { NotFound } from '../pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
