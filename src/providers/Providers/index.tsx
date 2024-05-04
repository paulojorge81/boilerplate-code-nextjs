'use client'

import { StyledComponentsRegistry } from '@/lib/registry'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

type Props = {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
