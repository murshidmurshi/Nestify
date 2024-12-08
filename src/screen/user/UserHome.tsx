import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Badge, TextInput, useTheme } from 'react-native-paper'
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import { Iconify } from 'react-native-iconify';
import UHCategory from '../../component/User/UHCategory';
import RecommandedHome from '../../component/User/RecommandedHome';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../../GlobalTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function UserHome() {
  let theme = useTheme();
  const ActiveOpacity = 0.6;
const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} // Ensure smooth updates
          showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled"
        >
          {/* Header container */}
          <View className='flex-row justify-between px-4 py-4 items-center'>
            {/* header Text */}
            <View className='flex-row items-center space-x-0.5'>
              <CustomText className='text-2xl' style={{ fontFamily: fonts.SemiBold, color: theme.colors.primary }}>
                Nest
              </CustomText>
              <CustomText className='text-2xl' style={{ fontFamily: fonts.SemiBold, }}>
                ify
              </CustomText>
            </View>
            {/* bell */}
            <TouchableOpacity activeOpacity={ActiveOpacity} onPress={()=>navigation.navigate("Notification")}>
              <Iconify style={{ zIndex: 1 }} icon='solar:bell-outline' size={25} color={theme.colors.primary} />
              <Badge className="h-5 items-center absolute p-0  bottom-4 left-2 " style={{
                zIndex: 100,
                backgroundColor: theme.colors.secondary,
                fontFamily: "Poppins-Regular",
                color: "#fff",
              }}>
                4
              </Badge>
            </TouchableOpacity>
          </View>

          {/* Search Bar container */}
          <View className='flex-row items-center px-4' >
            {/* input  */}
            <View className="flex-1 mr-4">
              <TextInput className='text-sm h-[51px]' mode="outlined"
              style={{backgroundColor:theme.colors.onPrimary}}
                contentStyle={{ fontFamily: fonts.Regular, top: 3 ,color:'red'}}
                outlineStyle={{borderColor:'transparent'}}
                placeholder='Search apart, hotel,etc ... '
                left={<TextInput.Icon icon={() => <Iconify icon="lets-icons:search-alt-light" size={30} color={theme.colors.primary} />} />}
              />
            </View>
            {/* Filter btn */}
            <View className='rounded-14 p-2' style={{ backgroundColor: theme.colors.onPrimary }}>
              <Iconify icon='lets-icons:filter-big' size={34} color={theme.colors.primary} />
            </View>
          </View>


          {/* List of Category */}
          <UHCategory />

          {/* Recommanded List */}
          <RecommandedHome />

        </ScrollView>

      </View>
    </>
  )
}

const styles = StyleSheet.create({

})