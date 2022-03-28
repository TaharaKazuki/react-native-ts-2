import { useState, ReactNode } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from './constant/colors'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

const App: () => ReactNode = () => {
  const [useNumber, setUserNumber] = useState<number | undefined>()

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
  }

  const screen = !useNumber ? (
    <StartGameScreen onPickNumber={pickedNumberHandler} />
  ) : (
    <GameScreen />
  )

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
