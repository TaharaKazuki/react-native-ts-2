import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/Title'

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

type Props = {
  userNumber: number
}

const GameScreen = ({ userNumber }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>{"Opponent's Guess"}</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
