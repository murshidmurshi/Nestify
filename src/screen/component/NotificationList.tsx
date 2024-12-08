import { StyleSheet, Text, View, ViewToken } from 'react-native'
import React from 'react'
import type{ NotificationItem, ViewableItem } from '../../GlobalTypes';
import Animated from 'react-native-reanimated';

interface NotificationProps {
    item: NotificationItem,
    viewableItem:ViewableItem;
}
const   NotificationList:React.FC<NotificationProps>=React.memo(()=>{
    return(
        <>
        
        </>
    )
});

export default NotificationList;

const styles = StyleSheet.create({})