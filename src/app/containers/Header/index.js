import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles';

const Header = () => {
  return (
    <Head>
      <div>HEADER</div>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  z-index: 100;
  background: ${theme.colors.error};
  position: sticky;
  min-width: 320px;
  padding: 10px 30px;
  top: 0px;
`;
