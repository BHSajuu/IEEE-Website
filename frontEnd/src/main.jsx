import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Flex container to make the footer stick to the bottom */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <App />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
