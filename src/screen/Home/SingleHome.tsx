import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar, Divider, Icon, useTheme } from 'react-native-paper';
import CustomText from '../../component/customeText/CustomText';
import { RouteProp } from '@react-navigation/native';
import { RootParamList, windowDimension } from '../../GlobalTypes';
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AppHeader from '../../component/Header/AppHeader';
import { Iconify } from 'react-native-iconify';
import { fonts } from '../../component/customeText/fonts';
import TopTabs from './TopTab/TopTabs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

type SingleHomeRouteProp = RouteProp<RootParamList, 'SingleHome'>;

interface SingleHomeProps {
  route: SingleHomeRouteProp;
}

export default function SingleHome({ route }: SingleHomeProps) {
  let { item } = route.params;
  let theme = useTheme();

  const RenderIcon = () => (
    <>
      <Appbar.Action
        animated={false}
        style={{ backgroundColor: theme.colors.background }}
        icon={() =>
          <Iconify
            icon="hugeicons:share-04"
            size={24}
            style={{ alignSelf: 'center' }}
            color={theme.colors.secondary}
          />
        }
      />
      <Appbar.Action
        animated={false}
        style={{ backgroundColor: theme.colors.background }}
        icon={() =>
          <Iconify
            icon="solar:heart-linear"
            size={24}
            style={{ alignSelf: 'center' }}
            color={theme.colors.secondary}
          />
        }
      />

    </>
  )

  const ActiveOpacity = 0.6;

  const scrollValue = useSelector((state: RootState) => state.normal); // Get scroll value from Redux
  const height = useSharedValue(windowDimension.width / 1.3); // Initial height value
  const minHeight = windowDimension.width / 2; // Minimum height value
  const maxHeight = windowDimension.width / 1.3; // Maximum height value

  // Update height based on scrollValue from Redux
  useEffect(() => {
    // Interpolate height based on scrollValue (scrolling up or down)
    const newHeight = interpolate(
      scrollValue,
      [0, 250], // Adjust the scroll range for smoother effect
      [maxHeight, minHeight], // Map scroll value to height range
      Extrapolate.CLAMP // Clamp value to this range
    );
    // Apply smooth transition using `withTiming` with Easing for a smoother effect
    height.value = withTiming(newHeight, {
      duration: 700, // Increase duration for slower transition
      easing: Easing.out(Easing.ease), // Apply easing for smooth effect
    });
  }, [scrollValue]); // Trigger animation whenever scrollValue changes

  // Animated styles for height
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value, // Bind animated height
      overflow: 'hidden', // Prevent overflow
    };
  });



  return (
    <>
      <AppHeader screenName='' absolute={true} RenderIcon={RenderIcon} />
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>

        <Animated.View style={animatedStyle}>
          <Animated.Image sharedTransitionTag="testTag"
            style={[{ width: windowDimension.width / 1, height: windowDimension.width / 1.3 }]}  // Set explicit width and height
            resizeMode="cover"
            className='w-1/2 h-1/2 ' source={{ uri: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996" }} />
          {/* Main Content */}
          <View className='p-2'>

            {/* Rating and Category */}
            <View className='flex-row justify-between'>
              <View className='flex-row space-x-1 items-center'>
                <Iconify icon='solar:star-bold' size={22} color={theme.colors.rate} />
                <CustomText className='text-xs' style={{ fontFamily: fonts.Regular }}>
                  4.9 (6.8k review)
                </CustomText>
              </View>
              <TouchableOpacity activeOpacity={ActiveOpacity} className='bg-red-500 p-2 rounded-9' style={{ backgroundColor: theme.colors.onPrimary }}>
                <CustomText className='text-xs' style={{ fontFamily: fonts.Regular, color: theme.colors.primary }}>
                  Apartment
                </CustomText>
              </TouchableOpacity>
            </View>

            <View className='flex-column space-y-0.5 mt-1.5'>
              <CustomText className='text-2xl' style={{ fontFamily: fonts.Medium }}>
                {item?.houseName}
              </CustomText>
              <CustomText style={{ fontFamily: fonts.Regular }} className='text-md text-gray-600'>
                {item?.location}
              </CustomText>
            </View>

          </View>

        </Animated.View>

        {/* Top Tabs for House Detail */}
        <TopTabs />

        {/* Price Detail */}
        <View>
          <Divider />
          <View className=' p-2 flex-row justify-between '>
            <View>
              <CustomText className='text-md' style={{ fontFamily: fonts.Medium }}>
                Total Price
              </CustomText>
              <CustomText className='text-lg' style={{ fontFamily: fonts.Medium, color: theme.colors.primary }}>
                $ 350 /month
              </CustomText>
            </View>
            <TouchableOpacity activeOpacity={ActiveOpacity} style={{ backgroundColor: theme.colors.primary }} className='flex-row rounded-14 p-3 items-center' >
              <CustomText className='text-[15px]' style={{ fontFamily: fonts.Medium, color: theme.colors.background }}>
                Book now
              </CustomText>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({})