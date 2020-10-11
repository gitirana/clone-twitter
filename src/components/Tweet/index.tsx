import React from 'react';

import {
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  Dot,
  RetweetedIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>React</strong>
            <span>@reactjs</span>
            <Dot />
            <time>6 de fev</time>
          </Header>
          <Description>We’ve just released React 16.8 with a stable version of Hooks.
            React Hooks let you use features like local state and lifecycle without writing a class.
            They’re fully backwards-compatible and you can start using them today.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              2.7K
            </Status>
            <Status>
              <RetweetIcon />
              323
            </Status>
            <Status>
              <LikeIcon />
              6.3K
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;