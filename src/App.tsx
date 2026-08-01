import './App.css';
import { MemoryRouter, Route, Routes } from 'react-router';
import { RootLayout } from './routes/+layout';
import { NotFound } from './routes/notfound';
import { Home } from './routes/index';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>
  );
}

export default App;