import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import AppHeader from '../../component/Header/AppHeader';

export default function Profile() {
  let theme = useTheme();

  return (
   <>
      <AppHeader screenName={"Profile"} backIcon={false}  />
     <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >

          </ScrollView>

</View>
   </>
  )
}

const styles = StyleSheet.create({})