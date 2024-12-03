import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput, useTheme } from 'react-native-paper'
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import { Iconify } from 'react-native-iconify';
import UHCategory from '../../component/User/UHCategory';
import RecommandedHome from '../../component/User/RecommandedHome';

export default function UserHome() {
  let theme = useTheme();
  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} // Ensure smooth updates
          showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {/* Header container */}
          <View className='flex-row justify-between p-4 items-center'>
            {/* header Text */}
            <View>
              <CustomText className='text-[19px]' style={{ fontFamily: fonts.Regular, }}>
                Let's Find your
              </CustomText>
              <CustomText className='text-[22px]' style={{ fontFamily: fonts.SemiBold }}>
                Fovorite Home
              </CustomText>
            </View>

            {/* header profile image */}
            <View>
              <Image className='w-14 h-14 rounded-full' source={{ uri: "https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.1647539801.1732414251&semt=ais_hybrid" }} />
            </View>
          </View>

          {/* Search Bar container */}
          <View className='flex-row items-center px-4' >
            {/* input  */}
            <View className="flex-1 mr-4">
              <TextInput className='text-sm' mode="outlined"
                contentStyle={{ fontFamily: fonts.Regular, top: 3 }}
                placeholder='Search by Address,City,or ZIP'
                left={<TextInput.Icon icon={() => <Iconify icon="lets-icons:search-alt-light" size={35} color={theme.colors.onBackground} />} />}
              />
            </View>
            {/* Filter btn */}
            <View className='rounded-14 p-2' style={{ backgroundColor: theme.colors.primary }}>
              <Iconify icon='lets-icons:filter-big' size={40} color={"#fff"} />
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