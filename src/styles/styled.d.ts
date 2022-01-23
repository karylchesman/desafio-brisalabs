/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import lightTheme from './themes/light';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
