import 'react-slick';

declare module 'react-slick' {
  interface Settings {
    changeSlideDelay?: number | undefined;
  }
}
