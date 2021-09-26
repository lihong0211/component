// .storybook/preview.js

import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport'

import theme from './BiliTheme'
import { addParameters } from '@storybook/client-api';

addParameters({
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
});

/**
 * 自定义屏幕
 * 文档地址：https://storybook.js.org/docs/vue/essentials/viewport
 */
const customViewports = {
  iphone678: {
    name: 'iphone6/7/8',
    styles: {
      width: '375px',
      height: '672px',
      fontSize: '37.5px'
    },
    type: 'mobile'
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: {
    theme: theme
  },
  viewport: { viewports: {...MINIMAL_VIEWPORTS, ...customViewports} }
}
