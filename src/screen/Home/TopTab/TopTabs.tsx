import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../component/customeText/CustomText'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Description from './Description';
import Gallery from './Gallery';
import { useTheme } from 'react-native-paper';
import Review from './Review';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  let theme = useTheme()
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        // Customize the tab indicator
        tabBarIndicatorStyle: { backgroundColor: theme.colors.secondary, height: 3,borderRadius:19 },
        // Customize the tab bar container
        tabBarStyle: { backgroundColor: theme.colors.background,elevation:2},
        // Active and inactive tab colors
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle:{fontFamily:'Poppins-Medium'}
      }}
    >
        <Tab.Screen name="Description" component={Description} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Review" component={Review} />
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({})