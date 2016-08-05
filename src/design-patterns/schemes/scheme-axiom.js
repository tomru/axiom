import { colorBlue, colorGrey, colorWhite, colorGreen, colorRed } from '../colors/_vars';

const schemePrimaryColor = colorBlue;
const schemeAccentColor = colorBlue;

module.exports = {
  class: 'scheme-axiom',
  primary: schemePrimaryColor,
  accent: schemeAccentColor,

  textColorLight: colorGrey[50],
  textColorDark: colorGrey[900],
  backgroundColor: colorGrey[50],

  // Navigation
  navFirstItemHoverBackgroundColor: colorGrey[50],
  navFirstItemActiveColor: schemeAccentColor['A400'],
  navFirstItemActiveBackgroundColor: colorGrey[50],
  navSecondItemHoverBackgroundColor: colorGrey[100],
  navSecondItemActiveColor: schemeAccentColor['A400'],
  navSecondItemActiveBackgroundColor: colorGrey[100],

  // Card
  cardColor: colorWhite['_'],
  cardHoverColor: colorGrey[50],
  cardBorder: colorGrey[100],

  // Table
  tableBorderColor: colorGrey[200],
  tableRowOddColor: colorGrey[50],
  tableRowEvenColor: colorWhite['_'],

  // Forms and inputs
  inputBackgroundColor: colorWhite['_'],
  inputBorderColor: colorGrey[300],
  inputPlaceholderColor: colorGrey[400],
  inputFocusColor: schemeAccentColor['A100'],
  inputDisabledColor: colorGrey[100],
  inputValidColor: colorGreen['A400'],
  inputInvalidColor: colorRed['A400'],
  inputCheckedColor: schemeAccentColor['A400'],

  // Tabs
  tabsBorderColor: colorGrey[200],
  tabsActiveBackgroundColor: colorWhite['_'],
  tabsInactiveBackgroundColor: colorGrey[200],
  tabsHoverBackgroundColor: colorGrey[100],
};
