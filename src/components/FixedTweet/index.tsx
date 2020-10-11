import React from 'react';

import {
  Container,
  Fixed,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  Dot,
  FixedIcon,
} from './styles';


const FixedTweet: React.FC = () => {
  return (

    <Container>
      <Fixed>
        <FixedIcon />
        Tweet Fixado
      </Fixed>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Thayná Luiza</strong>
            <span>@gitiranathayna</span>
            <Dot />
            <time>11 de out</time>
          </Header>
          <Description>
            <p>
              Encontre esse projeto no meu GitHub <a href="https://github.com/gitirana">@gitirana </a>
              e no meu LinkedIn <a href="https://www.linkedin.com/in/gitirana/">@gitirana</a> 😝
            </p>

          </Description>

          <Icons>
            <Status>
              <CommentIcon />
              1.7K
            </Status>
            <Status>
              <RetweetIcon />
              200
            </Status>
            <Status>
              <LikeIcon />
              5.32K
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}



export default FixedTweet;