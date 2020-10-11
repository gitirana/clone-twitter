import React, {  useState } from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

import blue from '../../styles/themes/blue';
import orange from '../../styles/themes/orange';

const Layout: React.FC = () => {

    const [theme, setTheme] = useState(blue);

    const toggleTheme = () => {
        setTheme(theme.title === 'blue' ? orange : blue);
    }

  return (
    <Container>
        <Wrapper>
            <MenuBar />
            <Main toggleTheme={toggleTheme}/>
            <SideBar />
        </Wrapper>
    </Container>
  )
}

export default Layout;