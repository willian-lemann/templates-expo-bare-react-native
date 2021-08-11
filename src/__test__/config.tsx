import React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from 'styles/theme';

interface TestThemeProviderProps {
  children: ReactNode;
}

export const TestThemeProvider = ({ children }: TestThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
