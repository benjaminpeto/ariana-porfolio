import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.components';
import Footer from '../Footer/Footer.components';

export const FullLayout = () => (
  <div>
    <Navigation />
    <Outlet />
    <Footer />
  </div>
);

export const PortfolioLayout = () => (
  <div>
    <Outlet />
  </div>
);