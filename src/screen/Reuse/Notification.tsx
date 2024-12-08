import { FlatList, ScrollView, StyleSheet, Text, View, ViewToken } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import CustomText from '../../component/customeText/CustomText';
import AppHeader from '../../component/Header/AppHeader';
import NotificationList from '../component/NotificationList';
import type { NotificationItem } from '../../GlobalTypes';
import { useSharedValue } from 'react-native-reanimated';



const NotificationData: NotificationItem[] = [
    {
        id: 1,
        title: 'New Property Alert',
        subtitle: 'A luxury villa is now available in New York.',
    },
    {
        id: 2,
        title: 'Price Drop!',
        subtitle: 'The price of your favorite apartment in Los Angeles just dropped by 10%.',
    },
    {
        id: 3,
        title: 'Exclusive Offer',
        subtitle: 'Get a 5% cashback on properties booked this week.',
    },
    {
        id: 4,
        title: 'Open House Invite',
        subtitle: 'Join us for an open house event at the Sunset Boulevard property this Saturday.',
    },
    {
        id: 5,
        title: 'New Listings Available',
        subtitle: '10 new properties have been added to your area. Check them out now!',
    },
    {
        id: 6,
        title: 'Rent Reminder',
        subtitle: 'Your rent payment for the downtown apartment is due in 3 days.',
    },
    {
        id: 7,
        title: 'Property Sold Out',
        subtitle: 'The penthouse at Manhattan Towers has just been sold!',
    },
    {
        id: 8,
        title: 'Virtual Tour Available',
        subtitle: 'Take a virtual tour of the luxury apartment in San Francisco.',
    },
    {
        id: 9,
        title: 'Neighborhood Insights',
        subtitle: 'Discover the top schools and amenities in the Beverly Hills area.',
    },
    {
        id: 10,
        title: 'Personalized Recommendations',
        subtitle: 'We’ve found properties that match your preferences. Check them out!',
    },
    {
        id: 11,
        title: 'New Listings Available',
        subtitle: '10 new properties have been added to your area. Check them out now!',
    },
    {
        id: 12,
        title: 'Rent Reminder',
        subtitle: 'Your rent payment for the downtown apartment is due in 3 days.',
    },
    {
        id: 13,
        title: 'Property Sold Out',
        subtitle: 'The penthouse at Manhattan Towers has just been sold!',
    },
    {
        id: 14,
        title: 'Virtual Tour Available',
        subtitle: 'Take a virtual tour of the luxury apartment in San Francisco.',
    },
    {
        id: 15,
        title: 'Neighborhood Insights',
        subtitle: 'Discover the top schools and amenities in the Beverly Hills area.',
    },
    {
        id: 16,
        title: 'Personalized Recommendations',
        subtitle: 'We’ve found properties that match your preferences. Check them out!',
    },
];



export default function Notification() {
    let theme = useTheme();
    const viewableItem = useSharedValue<ViewToken[]>([]);

    return (
        <>
            <AppHeader screenName='Notification' />
            <View className='flex-1 px-3' style={[{ backgroundColor: theme.colors.background }]}>
                <FlatList
                 showsHorizontalScrollIndicator={false}
                 showsVerticalScrollIndicator={false}
                    data={NotificationData}
                    onViewableItemsChanged={({ viewableItems: vItems }) => {
                        viewableItem.value = vItems;
                    }}
                    renderItem={({ item }) => <NotificationList item={item} viewableItem={viewableItem} />}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})