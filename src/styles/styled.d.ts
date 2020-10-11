import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {

      title: string;

      colors: {
        primary: string;
        secondary: string;
        search: string;
        white: string;
        gray: string;
        outline: string;
        retweet: string;
        like: string;
        twitter: string;
        darkhover: string;
        lighthover: string;
      }

  }
}