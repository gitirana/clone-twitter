import styled, {css} from 'styled-components';

import { Chat, Retweet, Favorite, Pin } from '../../styles/Icons';


import ProfilePic from '../../assets/ProfilePic.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;
export const Fixed = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: var(--gray);
`;
export const FixedIcon = styled(Pin)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  left: 0;

  background-image: url(${ProfilePic});
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }
  > span,
  time {
    color: var(--gray);
  }
  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;

  > p {
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const IconsCSS = css`
  width: 19px;
  height: 19px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    &,
    > svg path {
      color: var(--retweet);
    }
  }
  &:nth-child(3) {
    &,
    > svg path {
      color: var(--like);
    }
  }
`;
export const CommentIcon = styled(Chat)`
  ${IconsCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${IconsCSS}
`;

export const RetweetIcon = styled(Retweet)`
  ${IconsCSS}
`;
