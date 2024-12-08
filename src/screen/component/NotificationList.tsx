import { StyleSheet, Text, View, ViewToken } from 'react-native'
import React from 'react'
import type { NotificationItem, ViewableItem } from '../../GlobalTypes';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';
import { Iconify } from 'react-native-iconify';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';

interface NotificationProps {
    item: NotificationItem,
    viewableItem: ViewableItem;
}
const NotificationList: React.FC<NotificationProps> = React.memo(({ item, viewableItem }) => {
    let theme = useTheme();
    const rStyle = useAnimatedStyle(() => {
        let isVisible = viewableItem?.value?.filter(item => item?.isViewable).some(Item => Item?.item?.id === item?.id)
        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.6),
                },
            ],
        }
    })
    return (
        <>
            <Animated.View className='flex-row rounded-14 p-3 space-x-2.5 my-1.5 items-center ' style={[{ backgroundColor: theme.colors.onPrimary, minHeight: 90 }, rStyle]}>
                {/* Icon */}
                <View className=' p-1 rounded-14 ' style={[{ backgroundColor: theme.colors.onPrimary, }]}>
                    <Iconify icon="carbon:star-review" size={35} color={theme.colors.primary} />
                </View>
                <View className='flex-1'>
                    <View className='flex-row justify-between pr-1'>
                    <CustomText className='text-[15px]' style={{ fontFamily: fonts.SemiBold }}>
                        {item?.title}
                    </CustomText>
                    {/* time */}
                    <CustomText className='text-[11px] ' style={{ fontFamily: fonts.Regular }}>
                        1hr ago
                    </CustomText>
                    </View>
                
                    <CustomText className='text-md ' style={{ fontFamily: fonts.Regular }}>
                        {item?.subtitle}
                    </CustomText>
                </View>

            </Animated.View>


        </>
    )
});

export default NotificationList;

const styles = StyleSheet.create({})