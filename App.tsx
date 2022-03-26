import { ReactNode } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Colors from './constant/colors'

import StartGameScreen from './screens/StartGameScreen'

const App: () => ReactNode = () => {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
})
