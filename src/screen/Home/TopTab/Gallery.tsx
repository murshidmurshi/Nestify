import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { fonts } from '../../../component/customeText/fonts';
import CustomText from '../../../component/customeText/CustomText';

type GalleryProps = {
  id: string,
  image: string,
}

const RenderGalleryImage = ({ item }: any) => {
  return (
    <View className="flex-1 flex-row mb-3 items-center justify-evenly ">
      {/* Parent container ensures two items per row */}
      <View >
        <Image
          className="w-44 h-44 rounded-2xl"
          source={{ uri: item?.image }}
        />
      </View>
    </View>
  );
};


export default function Gallery() {
  let theme = useTheme();
  const allimage: GalleryProps[] = [
    { id: '1', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '2', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '3', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '4', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '5', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '6', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '7', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '8', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },
    { id: '9', image: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1732998784~exp=1733002384~hmac=dcd76dcec768b654406bdea458c60c4b35d2ce5b63140ca6ce09bbfe429a6895&w=996' },

  ]
  return (
    <>
      <View className='flex-1 flex-row ' style={[{ backgroundColor: theme.colors.background }]}>
        <FlatList
          data={allimage}
          renderItem={({ item }) => <RenderGalleryImage item={item} />}
          keyExtractor={item => item?.id}
          numColumns={2} // Ensures two images per row
          ListHeaderComponent={() => (
            <>
              {/* Top header */}
              <View className='flex-row space-x-1 p-4'>
                <CustomText className='text-[15px]' style={{ fontFamily: fonts.Regular }}>
                  Gallery
                </CustomText>
                <CustomText className='text-[15px]' style={{ fontFamily: fonts.Regular, color: theme.colors.primary }}>
                  (400)
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