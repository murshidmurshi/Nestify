import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { fonts } from '../../../component/customeText/fonts';
import CustomText from '../../../component/customeText/CustomText';
import { Iconify } from 'react-native-iconify';

type ReviewProps = {
  id: string,
  image: string,
  user: string,
}

const RenderReviews = ({ item, theme }: any) => {
  let RateSize = 19;
  return (
    <View className="flex-1 px-4 py-2 space-y-1.5">
      <View className=' flex-1 flex-row justify-between items-center  '>
        <View className='flex-row items-center space-x-2 '>
          <Image className='w-12 h-12 rounded-full' source={{ uri: "https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.1647539801.1732414251&semt=ais_hybrid" }} />
          {/* Name and role */}
          <View className=' flex-column '>
            <CustomText className='text-md' style={{ fontFamily: fonts.Medium }}>
              Sandeep S.
            </CustomText>
          </View>
        </View>
        <CustomText className='text-md px-2' style={{ fontFamily: fonts.Medium }}>
          Sandeep S.
        </CustomText>
      </View>
      <CustomText className='text-md text-gray-500' style={{ fontFamily: fonts.Regular }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo odit autem unde tenetur rerum dolore?
      </CustomText>


      {/* Review Star */}
      <View className='flex-row justify-between items-center'>
        <View className='flex-row space-x-0.5'>
          <Iconify icon='solar:star-bold' size={RateSize} color={theme.colors.rate} />
          <Iconify icon='solar:star-bold' size={RateSize} color={theme.colors.rate} />
          <Iconify icon='solar:star-bold' size={RateSize} color={theme.colors.rate} />
          <Iconify icon='solar:star-bold' size={RateSize} color={theme.colors.rate} />
          <Iconify icon='solar:star-bold' size={RateSize} color={theme.colors.rate} />
          <CustomText className='text-md text-gray-500' style={{ fontFamily: fonts.Regular }}>
            5.0
          </CustomText>
        </View>
        <View className='flex-row space-x-0.5'>
          <CustomText className='text-md text-gray-500' style={{ fontFamily: fonts.Regular }}>
            Helpful ?
          </CustomText>
          <View className='flex-row space-x-1'>
            <Iconify icon='solar:like-outline' size={RateSize} color={theme.colors.onBackground} />
            <Iconify icon='solar:dislike-outline' size={RateSize} color={theme.colors.onBackground} />
          </View>
        </View>
      </View>

      {/* Review Images */}
      <View className='flex-row items-center space-x-4 py-2'>
        <Image
          className="w-32 h-32 rounded-2xl"
          source={{ uri: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' }}
        />
        <Image
          className="w-32 h-32 rounded-2xl"
          source={{ uri: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' }}
        />
      </View>



    </View>
  );
};


export default function Review() {
  let theme = useTheme();
  const allreview: ReviewProps[] = [
    { id: '1', user: "Sandeep S", image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '2', user: "Sandeep S", image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
  ]
  return (
    <>
      <View className='flex-1 flex-row ' style={[{ backgroundColor: theme.colors.background }]}>
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
          data={allreview}
          renderItem={({ item }) => <RenderReviews item={item} theme={theme} />}
          keyExtractor={item => item?.id}
          ListHeaderComponent={() => (
            <>
              {/* Top header */}
              <View className='flex-row space-x-1 p-4'>
                <CustomText className='text-[15px]' style={{ fontFamily: fonts.Regular }}>
                  Review
                </CustomText>
              </View>
            </>
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({})