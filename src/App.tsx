import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles'

import Main from './components/Main';
import MenuBar from './components/MenuBar';
import SideBar from './components/SideBar';

import { Container, Wrapper } from './components/Layout/styles';

import blue from './styles/themes/blue';
import orange from './styles/themes/orange';

const App = () => {

  const [theme, setTheme] = useState(blue);

  const toggleTheme = () => {
    setTheme(theme.title === 'blue' ? orange : blue);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <Container>
        <Wrapper>
            <MenuBar />
            <Main toggleTheme={toggleTheme}/>
            <SideBar />
        </Wrapper>
    </Container>

    <GlobalStyles/>
    </ThemeProvider>
    </>
  );
}

export default App;
