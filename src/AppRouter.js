import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import PricePage from './PricingPage';
import ContactPage from './Contact_page';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;