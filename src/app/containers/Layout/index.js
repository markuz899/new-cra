import React from 'react';
import styled from 'styled-components';
import LayoutContext from './Context';
import Header from '../Header';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';

const Layout = ({ title, children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <Helmet>
        <title>{title || 'Home Page'}</title>
        <meta name="description" content="Description" />
      </Helmet>
      <Layer>
        <Header />
        <div>{children}</div>
        <Footer />
      </Layer>
    </LayoutContext.Provider>
  );
};

export default Layout;

const Layer = styled.div``;
