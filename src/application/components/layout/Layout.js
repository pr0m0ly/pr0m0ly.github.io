import React from 'react';
import SideBar from './components/sidebar';
import Content from './components/content';
import { Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <SideBar />
      <Content />
    </Wrapper>
  );
};

export default Layout;
