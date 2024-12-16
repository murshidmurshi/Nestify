import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider, useTheme } from 'react-native-paper'
import { Iconify } from 'react-native-iconify'
import CustomText from '../../../component/customeText/CustomText'
import { fonts } from '../../../component/customeText/fonts'
import { windowDimension } from '../../../GlobalTypes'

type DetailCardProps = {
  title?: string,
  value?: string | number; // Allow both string and number
}

type NormalProps = {
  index: number,
  theme: any,
  item?: DetailCardProps
}

const RenderIcon = ({ index, theme }: NormalProps) => {
  let Iconsize = 28;
  return (
    <>
      {index == 1 ? (
        <>
          <Iconify
            icon="ic:sharp-square-foot"
            size={Iconsize}
            color={theme.colors.secondary}
          />
        </>
      ) :

        index == 2 ? (
          <>
            <Iconify
              icon="cbi:roomsbedroom"
              size={Iconsize}
              color={theme.colors.secondary}
            />
          </>
        )
          :
          index == 3 ? (
            <>
              <Iconify
                icon='solar:bath-bold-duotone'
                size={Iconsize}
                color={theme.colors.secondary}
              />
            </>
          ) :
            (
              <>
                <Iconify
                  icon='mingcute:safety-certificate-fill'
                  size={Iconsize}
                  color={theme.colors.secondary}
                />
              </>
            )}

    </>

  )
};
const RenderFacilityIcon = ({ index, theme }: NormalProps) => {
  let Iconsize = 28;
  return (
    <>
      {index == 1 ? (
        <>
          <Iconify
            icon="fluent:vehicle-car-parking-16-filled"
            size={Iconsize}
            color={theme.colors.secondary}
          />
        </>
      ) :

        index == 2 ? (
          <>
            <Iconify
              icon="solar:swimming-bold"
              size={Iconsize}
              color={theme.colors.secondary}
            />
          </>
        )
          :
          index == 3 ? (
            <>
              <Iconify
                icon='map:gym'
                size={Iconsize}
                color={theme.colors.secondary}
              />
            </>
          ) :

            index == 4 ? (
              <>
                <Iconify
                  icon='ion:restaurant-sharp'

                  size={Iconsize}
                  color={theme.colors.secondary}
                />
              </>
            ) :
              index == 5 ? (
                <>
                  <Iconify
                    icon='humbleicons:wifi'
                    size={Iconsize}
                    color={theme.colors.secondary}
                  />
                </>
              ) :
                index == 6 ? (
                  <>
                    <Iconify
                      icon='mdi:pets'
                      size={Iconsize}
                      color={theme.colors.secondary}
                    />
                  </>
                ) :
                  index == 7 ? (
                    <>
                      <Iconify
                        icon='material-symbols:sports-esports'
                        size={Iconsize}
                        color={theme.colors.secondary}
                      />
                    </>
                  )
                    :
                    (
                      <>
                        <Iconify
                          icon='mingcute:wash-machine-fill'
                          size={Iconsize}
                          color={theme.colors.secondary}
                        />
                      </>
                    )}

    </>

  )
};
const RenderDetailCard = ({ item, theme, index }: NormalProps) => {
  return (
    <>
      <View
        style={[styles.cardContainer, { backgroundColor: theme.colors.onPrimary }]}
        className=' p-2 rounded-14 flex-column items-center space-y-1 mb-1.5'>
        <RenderIcon index={index} theme={theme} />
        <CustomText className='text-xs' style={{ fontFamily: fonts.Regular }}>
          {item?.value}
        </CustomText>
        <CustomText className='text-xs text-gray-600' style={{ fontFamily: fonts.Regular }}>
          {item?.title}
        </CustomText>
      </View>
    </>
  )
}
const RenderFacilityCard = ({ item, theme, index }: NormalProps) => {
  return (
    <>
      <View
        style={[styles.cardContainer, { backgroundColor: theme.colors.onPrimary }]}
        className=' p-2 rounded-14 flex-column items-center space-y-1 mb-1.5'>
        <RenderFacilityIcon index={index} theme={theme} />
        <CustomText className='text-xs text-gray-600' style={{ fontFamily: fonts.Regular }}>
          {item?.title}
        </CustomText>
      </View>
    </>
  )
}
const DetailCard = () => {
  const cards: DetailCardProps[] = [
    {
      title: "sqrt",
      value: "1,125", // Use string to preserve formatting
    },
    {
      title: "Bedrooms",
      value: 3.0,
    },
    {
      title: "Bathrooms",
      value: 1.0,
    },
    {
      title: "Safety Rank",
      value: "4,324", // Use string for large numbers with commas
    },
  ];
  const Facilitycards: DetailCardProps[] = [
    {
      title: "Car Parking",
    },
    {
      title: "Swimming",
    },
    {
      title: "Gym & Fit",
    },
    {
      title: "Restaurant",
    },
    {
      title: "Wifi-fi",
    },
    {
      title: "Pet Center",
    },
    {
      title: "Sports Club",
    },
    {
      title: "Lundry",
    },
  ];

  let theme = useTheme();
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: windowDimension.width }} className=' p-3 pt-4 flex-row justify-evenly items-center space-x-1 shadow-boxShadow'>
          {/* Render Some Card Related to House */}
          {cards?.map((item, index) => {
            return (
              <>
                <RenderDetailCard item={item} index={index + 1} theme={theme} />
              </>
            )
          })}
        </View>
        {/* Agent Detail */}
        <View className=' p-4'>
          <CustomText className='text-[16px]' style={{ fontFamily: fonts.Medium }}>
            Listing Agent
          </CustomText>
          <View className=' '>
            <View className='flex-row justify-between items-center mt-1'>
              <View className='flex-row space-x-2 '>
                <Image className='w-12 h-12 rounded-full' source={{ uri: "https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.1647539801.1732414251&semt=ais_hybrid" }} />
                {/* Name and role */}
                <View className=' flex-column justify-evenly'>
                  <CustomText className='text-md' style={{ fontFamily: fonts.Medium }}>
                    Sandeep S.
                  </CustomText>
                  <CustomText className='text-md' style={{ fontFamily: fonts.Regular }}>
                    Partner
                  </CustomText>
                </View>
              </View>
              {/* Action Btns */}
              <View className='flex-row items-center space-x-2'>
                <TouchableOpacity>
                  <Iconify icon="eva:email-fill" size={33} color={theme.colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Iconify icon="solar:phone-bold" size={33} color={theme.colors.primary} />
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>



        {/* Facility Detail */}
        <View>
          <View className='px-4'>
            <CustomText className='text-[16px]' style={{ fontFamily: fonts.Medium }}>
              Facilities
            </CustomText>
          </View>
          <View style={{ width: windowDimension.width }} className=' p-3 flex-row justify-evenly items-center space-x-1  flex-wrap'>
            {/* Render Some Card Related to House */}
            {Facilitycards?.map((item, index) => {
              return (
                <>
                  <RenderFacilityCard item={item} index={index + 1} theme={theme} />
                </>
              )
            })}
          </View>
        </View>


        {/* Address Detail */}
        <View className=' pb-20'>
          <View className=' flex-row justify-between px-5'>
            <CustomText className='text-[16px]' style={{ fontFamily: fonts.Medium }}>
              Address
            </CustomText>
            <CustomText className='text-md' style={{ fontFamily: fonts.Medium, color: theme.colors.secondary }}>
              View on Map
            </CustomText>
          </View>
          <Divider />
          <View className='flex-row gap-2 px-4 py-2'>
            <Iconify icon='hugeicons:location-04' size={22} color={theme.colors.secondary} />
            <CustomText className='text-md' style={{ fontFamily: fonts.Regular, color: theme.colors.outline }}>
              123 Main Street, New York, NY
            </CustomText>
          </View>
        </View>

      </ScrollView>

    </>
  )
}

export default function Description() {
  let theme = useTheme();
  return (
    <>
      <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
        {/* Card */}
        <DetailCard />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '23%', // 45% ensures 2 cards per row with spacing
    aspectRatio: 1, // Makes the card square
    justifyContent: "center",
    alignItems: 'center',
  },
})