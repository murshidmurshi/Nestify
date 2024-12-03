import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '../customeText/CustomText'
import { fonts } from '../customeText/fonts'
import { useTheme } from 'react-native-paper';
import { windowDimension } from '../../GlobalTypes';
import { Iconify } from 'react-native-iconify';

interface HouseItem {
  image: string; // URL or path to the image
  price: number;
  location: string;
  houseName: string;
};

interface RenderHouseProps {
  ActiveOpacity: number,
  theme: any,
  item: HouseItem
}


const RenderHouse = ({ ActiveOpacity, theme, item }: RenderHouseProps) => {
  return (
    <>
      <TouchableOpacity className='flex-row my-3 rounded-14 p-2 space-x-1' activeOpacity={ActiveOpacity} style={{ backgroundColor: theme.colors.onPrimary }}>
        {/* Image */}
        <View>
        <Image style={{ width: windowDimension.width / 3.6, height: windowDimension.width / 3.9, }}  // Set explicit width and height
            className='w-1/2 h-1/2 rounded-14' source={{ uri: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996" }} />
        </View>

        {/* Content Section */}
        <View className="flex-1  p-1">
          {/* Rating and Category */}
          <View className=' flex-row justify-between'>
            {/* Rating */}
            <View className='flex-row space-x-1'>
              <Iconify icon='mingcute:star-fill' size={18} color={theme.colors.rate} />
              <CustomText className='text-sm' style={{ fontFamily: fonts.Regular }}>
                4.5
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
      </TouchableOpacity>

    </>
  )

}

export default function RecommandedHome() {
  const houses: HouseItem[] = [
    {
      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'New York, USA',
      houseName: 'Luxury Villa',
    },
    {
      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment',
    },
    {
      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA',
      houseName: 'Penthouse Suite',
    },
    // Add more houses as needed
  ];

  let theme = useTheme();
  const ActiveOpacity = 0.6;


  return (
    <>
      {/* MainContainer */}
      <View className='px-4 py-3'>
        {/* Header */}
        <View className='flex-row justify-between '>
          <CustomText className='text-[18px]' style={{ fontFamily: fonts.SemiBold }}>
            Recommanded for you
          </CustomText>
          <CustomText className='text-[13px] text-gray-600' style={{ fontFamily: fonts.Regular }}>
            More
          </CustomText>

        </View>

        {/* Render Houses */}
        <View>
          <FlatList
            nestedScrollEnabled={true}
            data={houses}
            renderItem={({ item }) => <RenderHouse ActiveOpacity={ActiveOpacity} theme={theme} item={item} />}
            keyExtractor={(item) => item?.houseName}
          />
        </View>


      </View>
    </>
  )
}

const styles = StyleSheet.create({})