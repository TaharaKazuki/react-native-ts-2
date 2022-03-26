import { ReactNode } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'

const App: () => ReactNode = () => {
  return <StartGameScreen />
}

export default App

const styles = StyleSheet.create({})
