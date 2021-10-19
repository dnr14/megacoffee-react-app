import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <main>
      <section>
        <Container>{children}</Container>
      </section>
    </main>
  );
};

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding-bottom: 1px;
  margin: 0 auto;
  width: 50%;

  @media ${({ theme }) => theme.mobile} {
    width: 70%;
  }
`;

export default Layout;