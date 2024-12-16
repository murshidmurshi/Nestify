import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native'
import React, { useState } from 'react'
import { Appbar, useTheme } from 'react-native-paper';
import AppHeader from '../../component/Header/AppHeader';
import { Iconify } from 'react-native-iconify';
import { useSharedValue } from 'react-native-reanimated';
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
      houseName: 'Elegant Manor',
    },
    {
      id: 2,
      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Sunset Apartment',
    },
    {
      id: 3,
      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA',
      houseName: 'Bayview Penthouse',
    },
    {
      id: 4,
      image: 'https://example.com/house1.jpg',
      price: 400000,
      location: 'Chicago, USA',
      houseName: 'Windy City Residence',
    },
    {
      id: 5,
      image: 'https://example.com/house2.jpg',
      price: 300000,
      location: 'Seattle, USA',
      houseName: 'Rainforest Retreat',
    },
    {
      id: 6,
      image: 'https://example.com/house3.jpg',
      price: 500000,
      location: 'Miami, USA',
      houseName: 'Ocean Breeze Villa',
    },
    {
      id: 7,
      image: 'https://example.com/house1.jpg',
      price: 320000,
      location: 'Houston, USA',
      houseName: 'Urban Oasis',
    },
    {
      id: 8,
      image: 'https://example.com/house2.jpg',
      price: 280000,
      location: 'Phoenix, USA',
      houseName: 'Desert Bloom Apartment',
    },
    {
      id: 9,
      image: 'https://example.com/house3.jpg',
      price: 480000,
      location: 'San Diego, USA',
      houseName: 'Seaside Paradise',
    },
    {
      id: 10,
      image: 'https://example.com/house2.jpg',
      price: 290000,
      location: 'Boston, USA',
      houseName: 'Historic Townhome',
    },
    {
      id: 11,
      image: 'https://example.com/house3.jpg',
      price: 460000,
      location: 'Denver, USA',
      houseName: 'Mountain View Lodge',
    },
    {
      id: 12,
      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'Orlando, USA',
      houseName: 'Theme Park Villa',
    },
    {
      id: 13,
      image: 'https://example.com/house2.jpg',
      price: 310000,
      location: 'Atlanta, USA',
      houseName: 'Peach Blossom Cottage',
    },
    {
      id: 14,
      image: 'https://example.com/house3.jpg',
      price: 470000,
      location: 'Las Vegas, USA',
      houseName: 'High Roller Suite',
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
  const favStyle = { margiVertical: 10 }

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
            renderItem={({ item }) => <HouseList item={item} viewableItem={viewableItem} style={{ marginVertical: 6 }} />}
          // keyExtractor={(item) => item?.houseName}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({})