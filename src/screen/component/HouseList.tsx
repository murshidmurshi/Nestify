import { Image, StyleProp, StyleSheet, Text, View, ViewStyle, ViewToken } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Iconify } from 'react-native-iconify';
import { useTheme } from 'react-native-paper';
import{ ViewableItem, windowDimension } from '../../GlobalTypes';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
interface HouseItem {
    id: number;
    image: string; // URL or path to the image
    price: number;
    location: string;
    houseName: string;
};

interface RenderHouseProps {
    item: HouseItem,
    viewableItem:ViewableItem;
    style?: StyleProp<ViewStyle>; // Typing the style prop correctly
}
const HouseList: React.FC<RenderHouseProps> = React.memo(({ item, viewableItem,style }) => {
    let theme = useTheme();
    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItem.value
                .filter((item) => item.isViewable)
                .find((viewableItem) => viewableItem.item.id === item.id)
        );
        return {
            opacity: withTiming(isVisible ? 1 : 0,),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.6),
                },
            ],
        };
    }, []);
    
    return (
        <>
            <Animated.View   className='flex-row rounded-14 p-2 space-x-1' style={[{ backgroundColor: theme.colors.onPrimary, }, rStyle,style]}>
                {/* Image */}
                <View>
                    <Image style={{ width: windowDimension.width / 3.6, height: windowDimension.width / 3.9, }}  // Set explicit width and height
                        className='w-1/2 h-1/2 rounded-14' source={{ uri: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996" }} />
                    {/* HeartIcon */}
                    <View className='absolute right-2 top-2 bg-gray-300 p-1 rounded-full'>
                        <Iconify icon="solar:heart-bold" size={22} color={theme.colors.primary} />
                    </View>
                </View>

                {/* Content Section */}
                <View className="flex-1  p-1">
                    {/* Rating and Category */}
                    <View className=' flex-row justify-between'>
                        {/* Rating */}
                        <View className='flex-row space-x-1'>
                            <Iconify icon='mingcute:star-fill' size={18} color={theme.colors.rate} />
                            <CustomText className='text-sm' style={{ fontFamily: fonts.Regular }}>
                            {item?.id}
                            </CustomText>
                        </View>
                        {/* Category */}
                        <View className=' '>
                            <CustomText className='text-sm px-3' style={{ fontFamily: fonts.Regular, color: theme.colors.primaryLight }}>
                                Villa
                            </CustomText>
                        </View>
                    </View>
                    {/* Name and Location  */}
                    <View>
                        <CustomText className='text-[17px]' style={{ fontFamily: fonts.SemiBold }}>
                            {item?.houseName}
                        </CustomText>

                        <View className='flex-row space-x-1'>
                            <Iconify icon='hugeicons:location-04' size={19} color={"grey"} />
                            <CustomText className='text-[12px] text-gray-600' style={{ fontFamily: fonts.Regular }}>
                                {item?.location}
                            </CustomText>
                        </View>


                    </View>

                    {/* Rooms and Price */}
                    <View className="flex-row items-center justify-between mt-2">
                        {/* Room Section */}
                        <View className='flex-row space-x-1'>
                            <View className="flex-row items-center">
                                <Iconify icon="ic:sharp-square-foot" style={{ top: -1 }} size={20} color="gray" />
                                <CustomText
                                    className="text-xs text-gray-600"
                                    style={{ fontFamily: fonts.Regular }}
                                >
                                    1,125
                                </CustomText>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Iconify icon="cbi:roomsbedroom" size={17} color="gray" />
                                <CustomText
                                    className="text-xs text-gray-600"
                                    style={{ fontFamily: fonts.Regular }}
                                >
                                    3.0
                                </CustomText>
                            </View>

                        </View>
                        {/* Price Section */}
                        <CustomText
                            className="text-sm"
                            style={{
                                fontFamily: fonts.Regular,
                                color: theme.colors.secondary,
                            }}
                        >
                            $350/month
                        </CustomText>
                    </View>
                </View>
            </Animated.View>
        </>
    )
})
export default HouseList;
const styles = StyleSheet.create({})