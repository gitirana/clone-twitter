import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles';

interface Props {
    toggleTheme() : void;
}

const Main: React.FC<Props> = ({ toggleTheme }) => {

    const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Thayná Luiza</strong>
                <span>700 tweets</span>
            </ProfileInfo>

            <div>
                <Switch
                    onChange={toggleTheme}
                    checked={title === 'blue'}
                    checkedIcon={false}
                    uncheckedIcon={false}

                    offColor={shade(0.15, colors.twitter)}
                    onColor={shade(0.15, colors.twitter)}
                />
            </div>
        </Header>
        <ProfilePage />

        <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  );
}

export default Main;