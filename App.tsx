import { ReactNode } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from './constant/colors'

import StartGameScreen from './screens/StartGameScreen'

const App: () => ReactNode = () => {
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <StartGameScreen />
    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
})
