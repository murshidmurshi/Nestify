import { StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';
import { Iconify } from 'react-native-iconify';
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';

interface CategoryItem {
  id: number;
  name: string;
};
  
  interface CategoryProps{
    item: CategoryItem,
    handleCategoryPress: (item:CategoryItem) => void,
    selected: null | string,
    viewCategoryitem: Animated.SharedValue<ViewToken[]>
  }

  interface IconProps {
    type: string;
    theme: any;
    selected: null | string;
  };

  
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


const CategoryList:React.FC<CategoryProps>=React.memo(({
    item, handleCategoryPress, selected, viewCategoryitem
})=>{
  let theme=useTheme();
  const ActiveOpacity = 0.6;
    let checkingSelectedCategory = selected == (item?.name);
  let CategoryStyle = checkingSelectedCategory ? { backgroundColor: theme.colors.secondary, borderColor: 'grey' } : { backgroundColor: theme.colors.background, borderColor: 'grey' }
  let TextColor = checkingSelectedCategory ? { color: "#fff", } : { color: theme.colors.onBackground, };
  
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewCategoryitem.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item?.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0.4,),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

    return(
        <>
         {/* SingleCategory */}
      <Animated.View
        style={[rStyle]}
      >
        <TouchableOpacity
          onPress={() => handleCategoryPress(item)}
          activeOpacity={ActiveOpacity}
          className='flex-row space-x-0.5 items-center p-2 rounded-14 border-[0.8px] mx-1.5'
          style={[CategoryStyle]}
        >
          <RenderIcons type={item?.name} theme={theme} selected={selected} />
          <CustomText className='text-md' style={[{ fontFamily: fonts.Light, }, TextColor]}>
            {item?.name}
          </CustomText>
        </TouchableOpacity>

      </Animated.View>
        </>
    )
})

export default CategoryList;
const styles = StyleSheet.create({})