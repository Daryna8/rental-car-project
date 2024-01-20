import { Route, Routes } from 'react-router-dom';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
import { HomePage } from '../pages/HomePage';
import { Header } from './Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
