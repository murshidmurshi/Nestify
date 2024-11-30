//page for home bottom tab

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

export default function UserHome() {
  let theme=useTheme();
  return (
    <>
    <View style={[styles.mainContainer,{backgroundColor:theme.colors.background}]}>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'red',
    flex:1
  }
})