import { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constant/colors'

type Props = {
  children: ReactNode
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderColor: Colors.accent500,
    padding: 12,
  },
})
