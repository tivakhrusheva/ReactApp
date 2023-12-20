import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './components/Pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Havic HV G-92 Gamepad" element={<PageOne />} />
        <Route path="Cart" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
