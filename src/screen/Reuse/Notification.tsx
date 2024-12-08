import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import CustomText from '../../component/customeText/CustomText';
import AppHeader from '../../component/Header/AppHeader';
import NotificationList from '../component/NotificationList';


export default function Notification() {
    let theme = useTheme();
    return (
        <>
            <AppHeader screenName='Notification' />
            <View className='flex-1' style={[{ backgroundColor: theme.colors.background }]}>
                <FlatList
                data={[{}]}
                renderItem={(item)=><NotificationList />}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})