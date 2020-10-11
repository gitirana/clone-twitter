import React from 'react';
import StickyBox from 'react-sticky-box';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
    <StickyBox>
      <Body>
        <List
          title="Quem Seguir"
          elements={[
            <FollowSuggestion
              name="TypeScript"
              nickname="@typescript"
            />,
            <FollowSuggestion
              name="GitHub"
              nickname="@github"
            />,
            <FollowSuggestion
              name="LinkedIn"
              nickname="@LinkedIn"
            />,
          ]}
        />
        <List
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </StickyBox>
    </Container>
  );
}

export default SideBar;