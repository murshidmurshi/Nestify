import { Image, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'react-native-paper';
import AppHeader from '../../component/Header/AppHeader';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import { Iconify } from 'react-native-iconify';

export default function Profile() {
  let theme = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <AppHeader screenName={"Profile"} backIcon={false} />
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >

          {/* Top container */}
          <View className=" p-2">
            <View style={{ backgroundColor: theme.colors.onPrimary }} className="p-3 flex-row items-center justify-between rounded-14">
              <View className="flex-row items-center space-x-3">
                <Image className='w-16 h-16 rounded-full' source={{ uri: "https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.1647539801.1732414251&semt=ais_hybrid" }} />
                {/* Name ,email */}
                <View>
                  <CustomText className='text-lg' style={{ fontFamily: fonts.Regular, }}>
                    Murshid
                  </CustomText>
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    m@gmail.com
                  </CustomText>
                </View>
              </View>
              <View>
                <Iconify icon='basil:edit-outline' size={30} color={theme.colors.primary} />
              </View>
            </View>
          </View>


          {/* Setting  */}
          <View className='p-3 '>
            <CustomText className='text-[16px] mb-1' style={{ fontFamily: fonts.Medium, }}>
              Settings
            </CustomText>
            {/* Settings child container */}
            <View className=' p-2 rounded-14 space-y-2 ' style={{ backgroundColor: theme.colors.onPrimary }}>
              {/* single Setting */}
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='solar:bell-outline' size={30} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    Notification
                  </CustomText>
                </View>
                <View>
                  <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? theme.colors.primary : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='heroicons:language' size={31} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    Language
                  </CustomText>
                </View>
                <View className='flex-row items-center '>
                  <CustomText className='text-[12px]' style={{ fontFamily: fonts.Light, }}>
                    English
                  </CustomText>
                  <Iconify icon='solar:alt-arrow-right-line-duotone' size={30} color={theme.colors.primary} />
                </View>
              </View>
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='streamline:dark-dislay-mode' size={31} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    Mode
                  </CustomText>
                </View>
                <View className='flex-row items-center '>
                  <CustomText className='text-[12px]' style={{ fontFamily: fonts.Light, }}>
                    System
                  </CustomText>
                  <Iconify icon='solar:alt-arrow-right-line-duotone' size={30} color={theme.colors.primary} />
                </View>
              </View>
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='icon-park-outline:people-bottom' size={31} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    Terms and Conditions of Use
                  </CustomText>
                </View>
                <View>
                  <Iconify icon='solar:alt-arrow-right-line-duotone' size={30} color={theme.colors.primary} />
                </View>
              </View>
            </View>
          </View>

          {/* Support */}
          <View className='p-3 '>
            <CustomText className='text-[16px] mb-1' style={{ fontFamily: fonts.Medium, }}>
              Support
            </CustomText>
            {/* Support child container */}
            <View className=' p-2 space-y-2 rounded-14 ' style={{ backgroundColor: theme.colors.onPrimary }}>
              {/* single Support */}
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='ion:help' size={31} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    Help & Support
                  </CustomText>
                </View>
                <View>
                  <Iconify icon='solar:alt-arrow-right-line-duotone' size={30} color={theme.colors.primary} />
                </View>
              </View>
              <View className=' p-2 flex-row  item-center justify-between  '>
                {/* icon,label */}
                <View className='flex-row space-x-2 items-center '>
                  <Iconify icon='mdi:about-variant' size={31} color={theme.colors.primary} />
                  <CustomText className='text-sm' style={{ fontFamily: fonts.Regular, }}>
                    About App
                  </CustomText>
                </View>
                <View>
                  <Iconify icon='solar:alt-arrow-right-line-duotone' size={30} color={theme.colors.primary} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>


      </View>
    </>
  )
}

const styles = StyleSheet.create({})