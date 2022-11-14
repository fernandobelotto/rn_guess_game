import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    value: any
}

const GuessItem = (props: Props) => {
  return (
    <View style={styles.guessItem}>
        <Text style={styles.guessItemText}>{props.value}</Text>
    </View>

  )
}

export default GuessItem

const styles = StyleSheet.create({
    guessItem: {
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,

        padding: 8,
        marginVertical: 5,
        // marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    guessItemText: {
        fontSize: 14,
        width: "100%",
    },

})