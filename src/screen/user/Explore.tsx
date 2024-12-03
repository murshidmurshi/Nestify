import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';

export default function Explore() {
  let theme = useTheme();

  return (
   <>
     <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >

          </ScrollView>

</View>
   </>
  )
}

const styles = StyleSheet.create({})