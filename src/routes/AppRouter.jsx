import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Appartamento from '../pages/appartament/Appartamento';
import ChiSiamo from '../pages/who-are/ChiSiamo';
import Giannutri from '../pages/giannutri/Giannutri';
import Privacy from '../pages/privacy/Privacy';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appartamento/:id" element={<Appartamento />} />
      <Route path="/chi-siamo" element={<ChiSiamo />} />
      <Route path="/giannutri" element={<Giannutri />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
);

export default AppRouter;
