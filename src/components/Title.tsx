import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    children : React.ReactNode | React.ReactNode[]
}

const Title = ({ children }: Props) => {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title : {
        fontSize: 20,
        fontWeight: 'bold',
      },
})