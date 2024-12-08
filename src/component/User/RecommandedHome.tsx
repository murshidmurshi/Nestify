import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native'
import React from 'react'
import CustomText from '../customeText/CustomText'
import { fonts } from '../customeText/fonts'
import { useTheme } from 'react-native-paper';
import HouseList from '../../screen/component/HouseList';
import { useSharedValue } from 'react-native-reanimated';

interface HouseItem {
  id: number;
  image: string; // URL or path to the image
  price: number;
  location: string;
  houseName: string;
};

const houses: HouseItem[] = [
  {
    id: 1,
    image: 'https://example.com/house1.jpg',
    price: 350000,
    location: 'New York, USA',
    houseName: 'Luxury Villa',
  },
  {
    id: 2,

    image: 'https://example.com/house2.jpg',
    price: 250000,
    location: 'Los Angeles, USA',
    houseName: 'Modern Apartment',
  },
  {
    id: 3,
    image: 'https://example.com/house3.jpg',
    price: 450000,
    location: 'San Francisco, USA',
    houseName: 'Penthouse Suite',
  },
  {
    id: 4,

    image: 'https://example.com/house1.jpg',
    price: 350000,
    location: 'New York, USA ',
    houseName: 'Luxury Villa 2',
  },
  {
    id: 5,
    image: 'https://example.com/house2.jpg',
    price: 250000,
    location: 'Los Angeles, USA',
    houseName: 'Modern Apartment 2',
  },
  
];

export default function RecommandedHome() {
  let theme = useTheme();
  const ActiveOpacity = 0.6;
  const viewableItem = useSharedValue<ViewToken[]>([]);

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
            onViewableItemsChanged={({ viewableItems: vItems }) => {
              viewableItem.value = vItems;
            }}
                      renderItem={({ item }) => <HouseList item={item} viewableItem={viewableItem} style={{marginVertical:6}} />}
            // keyExtractor={(item) => item?.houseName}
          />
        </View>


      </View>
    </>
  )
}

const styles = StyleSheet.create({})