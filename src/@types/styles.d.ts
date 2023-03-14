import 'styled-components';
import { DefaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultThemes

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType{} //sobreescreve tipagens de uma biblioteca existente
}