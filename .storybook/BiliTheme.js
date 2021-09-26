// .storybook/BiliTheme.js

import { create } from '@storybook/theming/create'
import logo from './assets/bilibili-logo.png'

export default create({
  base: 'light',

  colorPrimary: 'white',
  colorSecondary: 'deepskyblue',
  // UI
  appBg: 'white',
  appContentBg: 'white',
  // appBorderColor: 'rgb(153, 153, 153)',
  appBorderRadius: 4,
  //
  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',
  //
  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255)',
  //
  // // Toolbar default and active colors
  // barTextColor: 'rgb(153, 153, 153)',
  // barSelectedColor: 'rgb(30, 157, 263)',
  // barBg: '#fff',
  //
  // // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'cdut007组件库平台',
  brandUrl: 'https://baidu.com',
  brandImage: logo
});
