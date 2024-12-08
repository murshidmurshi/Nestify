import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import CustomText from '../../component/customeText/CustomText';


export default function Explore() {
  let theme = useTheme();

  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >
          <View>
            <CustomText className='text-2xl'>
              Explore Page
            </CustomText>
          </View>
        </ScrollView>

      </View>
    </>
  )
}

const styles = StyleSheet.create({})