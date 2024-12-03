import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar, useTheme } from 'react-native-paper';
import AppHeader from '../../component/Header/AppHeader';
import { Iconify } from 'react-native-iconify';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import { windowDimension } from '../../GlobalTypes';



interface CategoryItem {
  name: string;
};

// For gettings props from flatList
interface CategoryProps {
  item: CategoryItem,
  ActiveOpacity: number,
  theme: any,
  handleCategoryPress: (item: CategoryItem) => void,
  selected: null | string,
}

interface IconProps {
  type: string;
  theme: any;
  selected: null | string;
};


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





const RenderIcons = ({ type, theme, selected }: IconProps) => {
  let iconstyle = selected == type ? "#fff" : theme.colors.primary

  return (
    <>
      {type == "All" ? (
        <Iconify icon="si:clear-all-line" size={24} color={iconstyle} />
      ) : type == "Villa" ? (
        <Iconify icon="emojione-monotone:house-with-garden" size={21} color={iconstyle} />
      ) : type == "Hotel" ? (
        <Iconify icon="emojione-monotone:hotel" size={19} color={iconstyle} />
      ) : type == "Apart" ? (
        <Iconify icon="ph:building-apartment-light" size={23} color={iconstyle} />
      ) : type == "House" ? (
        <Iconify icon="emojione-monotone:house" size={21} color={iconstyle} />
      ) : type == "Office" ? (
        <Iconify icon="ph:building-office-light" size={21} color={iconstyle} />
      ) : type == "Indust" ? (
        <Iconify icon="iconoir:industry" size={21} color={iconstyle} />
      ) : (
        <>
        </>
      )}
    </>
  )
}

const RenderCategory = ({ item, ActiveOpacity, theme, handleCategoryPress, selected }: CategoryProps) => {
  let checkingSelectedCategory = selected == (item?.name);
  let CategoryStyle = checkingSelectedCategory ? { backgroundColor: theme.colors.secondary, borderColor: 'grey' } : { backgroundColor: theme.colors.background, borderColor: 'grey' }
  let TextColor = checkingSelectedCategory ? { color: "#fff", } : { color: theme.colors.onBackground, };
  return (
    <>
      {/* SingleCategory */}
      <TouchableOpacity onPress={() => handleCategoryPress(item)} activeOpacity={ActiveOpacity} style={CategoryStyle} className='flex-row space-x-0.5 items-center p-2 rounded-14 border-[0.8px] mx-1.5'>
        {/* <Iconify icon="material-symbols-light:villa-outline-rounded" size={35} color={iconstyle}/> */}
        <RenderIcons type={item?.name} theme={theme} selected={selected} />
        <CustomText className='text-md' style={[{ fontFamily: fonts.Light, }, TextColor]}>
          {item?.name}
        </CustomText>
      </TouchableOpacity>
    </>
  )
}



const RenderHouse = ({ ActiveOpacity, theme, item }: RenderHouseProps) => {
  return (
    <>
      <TouchableOpacity className='flex-row my-3 rounded-14 p-2 space-x-1' activeOpacity={ActiveOpacity} style={{ backgroundColor: theme.colors.onPrimary }}>
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


export default function Favorite() {
  let theme = useTheme();

  const ActiveOpacity = 0.6;
  const Category = [
    { name: 'All' },
    { name: 'House' },
    { name: 'Apart' },
    { name: 'Hotel' },
    { name: 'Villa' },
    { name: 'Office' },
    { name: 'Indust' },
  ];
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
    {
      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'New York, USA ',
      houseName: 'Luxury Villa 2',
    },
    {
      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment 2',
    },
    {
      image: 'https://example.com/house3.jpg',
      price: 450000,
      location: 'San Francisco, USA ',
      houseName: 'Penthouse Suite 2 ',
    },
    {
      image: 'https://example.com/house1.jpg',
      price: 350000,
      location: 'New York, USA',
      houseName: 'Luxury Villa 3',
    },
    {
      image: 'https://example.com/house2.jpg',
      price: 250000,
      location: 'Los Angeles, USA',
      houseName: 'Modern Apartment 3',
    },
    {
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

  return (
    <>
      <AppHeader screenName={"Favorite"} backIcon={false} RenderIcon={RenderIcon} />
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" >
          {/* Header */}
          <View className='flex-row  py-3 space-x-3'>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={Category}
              renderItem={({ item, }: { item: CategoryItem }) => <RenderCategory item={item} ActiveOpacity={ActiveOpacity} theme={theme} handleCategoryPress={handleCategoryPress} selected={selected} />}
              keyExtractor={(item: CategoryItem) => item.name}
              className='px-2'
              nestedScrollEnabled={true}
            />
          </View>

          {/* Render Houses */}
          <View className='mx-3'>
            <FlatList
              nestedScrollEnabled={true}
              data={houses}
              renderItem={({ item }) => <RenderHouse ActiveOpacity={ActiveOpacity} theme={theme} item={item} />}
              keyExtractor={(item) => item?.houseName}
            />
          </View>


        </ScrollView>

      </View>
    </>
  )
}

const styles = StyleSheet.create({})