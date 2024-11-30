import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomText from '../customeText/CustomText';
import { fonts } from '../customeText/fonts';
import { useTheme } from 'react-native-paper';
import { Iconify } from 'react-native-iconify';
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
}
interface RenderHouseProps {
  ActiveOpacity: number,
  theme: any,
  item: HouseItem
}
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


const RenderIcons = ({ type, theme, selected }: IconProps) => {
  let iconstyle = selected == type ? "#fff" : theme.colors.primary

  return (
    <>
      {type == "Villa" ? (
        <Iconify icon="emojione-monotone:house-with-garden" size={27} color={iconstyle} />
      ) : type == "Hotel" ? (
        <Iconify icon="emojione-monotone:hotel" size={23} color={iconstyle} />
      ) : type == "Apart" ? (
        <Iconify icon="ph:building-apartment-light" size={30} color={iconstyle} />
      ) : type == "House" ? (
        <Iconify icon="emojione-monotone:house" size={27} color={iconstyle} />
      ) : type == "Office" ? (
        <Iconify icon="ph:building-office-light" size={27} color={iconstyle} />
      ) : type == "Indust" ? (
        <Iconify icon="iconoir:industry" size={27} color={iconstyle} />
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
const RenderHouses = ({ ActiveOpacity, theme, item }: RenderHouseProps) => {

  return (
    <TouchableOpacity className=' mx-3 rounded-14 bg-red-300' activeOpacity={ActiveOpacity} style={{ backgroundColor: theme.colors.onPrimary }}>
      {/* House Image  */}
      <View>
        <Image style={{ width: windowDimension.width / 1.4, height: windowDimension.width / 2.5, }}  // Set explicit width and height
          className='w-1/2 h-1/2 rounded-14' source={{ uri: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996" }} />
      </View>

      {/* Other Content */}
      <View className='flex-row justify-between items-end p-3.5 my-1 '>

        <View>
          <CustomText className='text-[19px]' style={{ fontFamily: fonts.SemiBold }}>
            Lorem House
          </CustomText>
          <CustomText className='text-md' style={{ fontFamily: fonts.Regular, color: theme.colors.secondary }}>
            $350,000/month
          </CustomText>

          {/* Location Detail */}
          <View className='flex-row items-center gap-1 '>
            <Iconify icon='hugeicons:location-04' size={28} color={"grey"} />
            <CustomText className='text-sm text-gray-600' style={{ fontFamily: fonts.Regular }}>
              Avenue ,West side
            </CustomText>
          </View>
        </View>
        {/* Fav Btn */}
        <View className='bg-blue-300 p-2 rounded-lg' style={{backgroundColor:theme.colors.onPrimaryContainer}} >
          <Iconify icon="hugeicons:bookmark-02" size={22} color={theme.colors.primary} />
        </View>

      </View>

    </TouchableOpacity>
  )
}
export default function UHCategory() {
  let theme = useTheme();
  const ActiveOpacity = 0.6;
  const Category = [
    { name: 'House' },
    { name: 'Apart' },
    { name: 'Hotel' },
    { name: 'Villa' },
    { name: 'Office' },
    { name: 'Indust' },
  ];

  const [selected, setSelected] = useState<string | null>(null);
  const handleCategoryPress = (item: CategoryItem) => {
    console.log(item, 'item');

    setSelected(item?.name)
  }
  return (
    <>

      {/* Header */}
      <View className='flex-row  py-3 my-2 space-x-3'>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={Category}
          renderItem={({ item, }: { item: CategoryItem }) => <RenderCategory item={item} ActiveOpacity={ActiveOpacity} theme={theme} handleCategoryPress={handleCategoryPress} selected={selected} />}
          keyExtractor={(item: CategoryItem) => item.name}
        />
      </View>


      {/*Map the Detail */}
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={houses}
          renderItem={({ item, }: { item: HouseItem }) => <RenderHouses ActiveOpacity={ActiveOpacity} theme={theme} item={item} />}
          keyExtractor={(item) => item.houseName}
        />
      </View>




    </>
  )
}

const styles = StyleSheet.create({})