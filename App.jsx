import React from 'react'
import RootNavigator from './src/router/rootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from './src/context/themeContext'

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App