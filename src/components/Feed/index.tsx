import React from 'react';

import Tweet from '../Tweet';
import FixedTweet from '../FixedTweet';

import { Container, Tabs, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>Tweets</Tabs>

      <Tweets>
        <FixedTweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;