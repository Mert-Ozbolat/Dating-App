import React from 'react'
import RootNavigator from './src/router/rootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from './src/context/themeContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default App