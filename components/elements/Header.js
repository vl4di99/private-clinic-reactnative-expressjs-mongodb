import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: "purple",
    paddingVertical: 12,
  },
})
