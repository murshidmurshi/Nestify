import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

export default function Review() {
  let theme = useTheme();
  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})