import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { theme } from '../../../theme'

const CardContent = ({onPress, item, title, content, time}) => {
  return (
    <View
    style={styles.container}>
    <View
      style={styles.viewImage}
    />
    <View style={{marginTop: 8}}>
      <Text
        style={{
          marginBottom: 8,
          color: theme.colors.black,
          fontSize: 16,
          fontWeight: '500',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          marginBottom: 8,
          color: theme.colors.black,
          fontSize: 14,
          fontWeight: '400',
        }}>
        {item.content}
      </Text>
      <Text
        style={{
          color: theme.colors.lightGray,
          fontSize: 14,
          fontWeight: '400',
        }}>
        {item.time}
      </Text>
    </View>
  </View>
  )
}

export default CardContent
