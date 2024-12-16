import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useTheme } from 'react-native-paper';
import CustomText from '../../component/customeText/CustomText';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';


export default function Explore() {
  let theme = useTheme();
  let text1Opacity = useSharedValue(0);
  let text1Y = useSharedValue(-10);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(text1Opacity.value, { duration: 200 }),
      transform: [{
        translateY: text1Y.value
      }]
    }
  });

  const handleLayout = () => {
    // text1Opacity.value=1;
    // text1Y.value=0;
  }
  useFocusEffect(
    useCallback(() => {
      text1Opacity.value = withTiming(1, { duration: 500 });
      text1Y.value = withTiming(0, { duration: 500 });
      console.log("fdsfbdhs");

    }, [])

  )


  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >
          <View>
            <CustomText className='text-lg'>
              Explore Page
            </CustomText>
          </View>

          <Animated.View>
            <Animated.Text style={animatedStyle} className="text-lg text-red-100">
              Hell0, this is animated Text inside Animated View
            </Animated.Text>
          </Animated.View>
        </ScrollView>

      </View>
    </>
  )
}

const styles = StyleSheet.create({})