import theme from '../index';

const lightTheme = {
  navbar: theme.colors.navblue,
  body: theme.colors.lightWhite,
  bodyHover: theme.colors.primaryHover,
  container: 'inherit',
  text: theme.colors.dark,
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  bgModal: theme.colors.lightWhite,
  colorModal: theme.colors.dark,
  cardHeaderBg: theme.colors.navBlue,
  shadow: theme.colors.shadowGreyLight,
  playerAudio: theme.colors.greyPlayer,
  lightShadow: theme.colors.lightShadow,
  sidebar: theme.colors.lightSidebar,
  border: theme.colors.dark,
  ripple: theme.colors.rippleLight,
  backgroundImage: 'invert(0.5)',
  backgroundColor:
    'linear-gradient(to right bottom,rgb(156 156 156),rgb(250 250 250))',
  backgroundShadow: `
    linear-gradient(${theme.colors.lightWhite} 33%, rgba(35,31,34, 0)),
    linear-gradient(rgba(35,31,34, 0), ${theme.colors.lightWhite} 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(0,0,0, 0.4), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0, 0.4), rgba(0,0,0,0)) 0 100%
  `,
  backgroundNoShadow: `
  linear-gradient(#FAFAFA 33%,rgba(35,31,34,0)),linear-gradient(rgba(35,31,34,0),#231f2000 66%) 0 100%,radial-gradient(farthest-side at 50% 0,rgb(255 255 255 / 54%),rgb(0 0 0 / 0%)),radial-gradient(farthest-side at 50% 100%,rgb(0 0 0 / 25%),rgba(0,0,0,0)) 0 100%
  `,
  cardShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
  scrollBarTable: '#c8c8c8',
};

const darkTheme = {
  navbar: theme.colors.dark,
  body: theme.colors.dark,
  bodyHover: theme.colors.primaryHover,
  container: '#403e3e',
  text: theme.colors.white,
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  bgModal: '#000000',
  colorModal: theme.colors.white,
  cardHeaderBg: 'transparent',
  shadow: theme.colors.extraGrey,
  playerAudio: theme.colors.greyPlayer,
  lightShadow: theme.colors.darkShadow,
  sidebar: theme.colors.darkSidebar,
  border: theme.colors.greyIcon,
  ripple: theme.colors.rippleDark,
  backgroundImage: 'invert(0.5)',
  backgroundColor:
    'linear-gradient(to right bottom,rgb(35 31 32),rgb(39 39 39))',
  backgroundShadow: `
    linear-gradient(${theme.colors.dark} 33%, rgba(35,31,34, 0)),
    linear-gradient(rgba(35,31,34, 0), ${theme.colors.dark} 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(255,255,255, 0.4), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(255,255,255, 0.4), rgba(0,0,0,0)) 0 100%
  `,
  backgroundNoShadow: `
  linear-gradient(#231F20 33%,rgba(35,31,34,0)),linear-gradient(rgba(35,31,34,0),#231f2000 66%) 0 100%,radial-gradient(farthest-side at 50% 0,rgb(255 255 255 / 0%),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgb(255 255 255 / 12%),rgba(0,0,0,0)) 0 100%
  `,
  cardShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(255, 255, 255, 0.2) 0px -3px 0px inset`,
  scrollBarTable: '#4d4d4d',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
