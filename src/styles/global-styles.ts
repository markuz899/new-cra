import { createGlobalStyle } from 'styled-components';
import theme from './index';

export const GlobalStyle = createGlobalStyle`
  @keyframes scroll-text {
    0% {
      transform: translateX(0%);
    }
    90% {
      transform: translateX(-100%);
    }
    95% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
      box-shadow: 0 0 0 0 ${({ theme }) => theme.text};
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
  }
  html,
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    /* transition: all 0.5s; */
    color: ${({ theme }) => theme.text};
    height: 100%;
    width: 100%;
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${theme.font.size.normal};
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};
  }
  h1 {
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.large};
  }
  h2 {
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.large};
  }
  button{
    outline: none;
    &:focus{
      border: 1px solid transparent!important;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    &:hover {
      color: ${theme.colors.primaryHover};
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p {
    margin: 0;
    line-height: 1.1rem;
  }
  b, strong {
    ${theme.font.weight.bold}
  }
  .pulsing {
    cursor: pointer;
    border-radius: 5px;
    animation: pulse 2s;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    outline: 1px solid transparent;
  }
  .bodys::-webkit-scrollbar {
    display: none;
  }

  .bodys {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .truncate {
    width: 300px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    &.mini{
      width: 250px;
    }
    &:not(:hover) {
      text-overflow: ellipsis;
    }
    &:hover,
    &:focus {
      span {
        display: inline-block;
        animation-name: scroll-text;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
      }
    }
  }
  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    h2{
      font-size: ${theme.font.size.normal};
    }
    .truncate{
      max-width: 200px;
      text-overflow: clip;
    }
  }
`;
