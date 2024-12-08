import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native'
import React, { useState } from 'react'
import { Appbar, useTheme } from 'react-native-paper';
import AppHeader from '../../component/Header/AppHeader';
import { Iconify } from 'react-native-iconify';
import { useSharedValue  } from 'react-native-reanimated';
import HouseList from '../component/HouseList';
import CategoryList from '../component/CategoryList';
interface CategoryItem {
  id: number;
  name: string;
};

interface HouseItem {
  id: number;
  image: string; // URL or path to the image
  price: number;
  location: string;
  houseName: string;
};

export default function Favorite() {
  let theme = useTheme();
  const ActiveOpacity = 0.6;
  const Category = [
    { id: 1, name: 'All' },
    { id: 2, name: 'House' },
    { id: 3, name: 'Apart' },
    { id: 4, name: 'Hotel' },
    { id: 5, name: 'Villa' },
    { id: 6, name: 'Office' },
    { id: 7, name: 'Indust' },
  ];
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
    {
      id: 6,

      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA ',
      houseName: 'Penthouse Suite 2 ',
    },
    {
      id: 7,

      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'New York, USA',
      houseName: 'Luxury Villa 3',
    },
    {
      id: 8,

      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment 3',
    },
    {
      id: 9,
      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA',
      houseName: 'Penthouse Suite 3',
    },
    {
      id: 10,
      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment 2',
    },
    {
      id: 11,

      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA ',
      houseName: 'Penthouse Suite 2 ',
    },
    {
      id: 12,

      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'New York, USA',
      houseName: 'Luxury Villa 3',
    },
    {
      id: 13,

      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment 3',
    },
    {
      id: 14,
      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA',
      houseName: 'Penthouse Suite 3',
    },
  ];

  const RenderIcon = () => (
    <>
      <Appbar.Action
        animated={false}
        icon={() =>
          <Iconify
            icon="lets-icons:search-alt-light"
            size={31}
            color={theme.colors.onBackground}
          />
        }
      />
    </>
  )

  const [selected, setSelected] = useState<string | null>(null);
  const handleCategoryPress = (item: CategoryItem) => {
    setSelected(item?.name)
  }

  const viewableItem = useSharedValue<ViewToken[]>([]);
  const viewCategoryitem = useSharedValue<ViewToken[]>([]);
  const favStyle={margiVertical: 10}

  return (
    <>
      <AppHeader screenName={"Favorite"} backIcon={false} RenderIcon={RenderIcon} />
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>

        {/* Header   */}
        <View className='flex-row  py-3 space-x-3'>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Category}
            onViewableItemsChanged={({ viewableItems: vItems }) => {
              viewCategoryitem.value = vItems;
            }}
            renderItem={({ item }) => <CategoryList item={item} viewCategoryitem={viewCategoryitem} handleCategoryPress={handleCategoryPress} selected={selected} />}
            keyExtractor={(item: CategoryItem) => item.name}
            className='px-2'
            nestedScrollEnabled={true}
          />
        </View>
        {/* Render Houses */}
        <View className='mx-3'>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
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