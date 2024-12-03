import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootParamList } from '../GlobalTypes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHome from './user/UserHome';
import Explore from './user/Explore';
import Profile from './Reuse/Profile';
import { useTheme } from 'react-native-paper';
import { Iconify } from 'react-native-iconify';
import Favorite from './user/Favorite';
import AgentHome from './agent/AgentHome';

interface BottomTabProps {
    route: RouteProp<RootParamList, "BottomTab">
}
const BottomTab = createBottomTabNavigator<RootParamList>();

// Helper function to get the correct icon
const MyIcons = ({ route, focused, theme }: { route: any, focused: boolean, theme: any }) => {
    let icons;
    const activeColor = !focused ? theme.colors.primary : theme.colors.primary; // Custom Tailwind color classes
    let normalSize = 28;
    let focusedSize = 33;
    let themeColor = theme.colors.secondary;
    if (route.name === "UserHome" || route.name === "AgentHome" || route.name === "AdminHome") {
        icons = focused ? (
            // <MaterialIcons name="home" size={focusedSize} color={themeColor} />
            <Iconify
                icon="hugeicons:home-03"
                size={focusedSize}
                color={themeColor}
            />
        ) : (
            // <MaterialIcons name="home" size={normalSize} color={themeColor}  />
            <Iconify
                icon="hugeicons:home-03"
                size={normalSize}
                color={themeColor}
            />

        );
    } else if (route.name === 'Explore') {
        icons = focused ? (
            <Iconify
                icon="solar:point-on-map-linear"
                size={focusedSize}
                color={themeColor}
            />
        ) : (
            <Iconify
                icon="solar:point-on-map-linear"
                size={normalSize}
                color={themeColor}
            />
        );
    } else if (route.name === 'Favorite') {
        icons = focused ? (
            <Iconify
                icon="hugeicons:bookmark-02"
                size={focusedSize}
                color={themeColor}
            />
        ) : (
            <Iconify
                icon="hugeicons:bookmark-02"
                size={normalSize}
                color={themeColor}
            />
        );
    }
    else if (route.name === 'Profile') {
        icons = focused ? (
            <Iconify
                icon="solar:user-linear"
                size={focusedSize}
                color={themeColor}
            />
        ) : (
            <Iconify
                icon="solar:user-linear"
                size={normalSize}
                color={themeColor}
            />
        );
    }

    return (
        <>
            <View className={`bottom-2 rounded-full`} >
                {icons}
            </View>
            {focused && (
                <View style={{ backgroundColor: theme.colors.secondary }} className="absolute h-1 w-2 h-2 bottom-[-4] rounded" />
            )}

        </>
    );
};


export default function BottomNavigation({ route }: BottomTabProps) {
    let { role } = route.params;
    console.log(role, 'role');
    let theme = useTheme();

    return (
        <>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false, // Hide headers
                    tabBarShowLabel: false,
                    // Disable ripple effect
                    tabBarButton: (props) => (
                        // <TouchableOpacity  {...props} activeOpacity={0.4} />
                        <TouchableOpacity {...(props as TouchableOpacityProps)} activeOpacity={0.4} />
                    ),
                    tabBarIcon: ({ focused }) => MyIcons({ route, focused, theme }),
                    tabBarActiveTintColor: theme.colors.primary, // Active icon color
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        backgroundColor: theme.colors.background,
                        borderTopWidth: 0,
                        elevation: 5,
                        height: 65,
                        paddingTop: 19,
                        shadowOpacity: 2, // Works mostly on iOS
                        shadowRadius: 5, // Controls the spread of the shadow (higher = more spread)
                    },
                })}
            >

                {role == "u" ? (
                    <>
                        {/* Tab screens for user  */}
                        <BottomTab.Screen name="UserHome" component={UserHome} />
                        <BottomTab.Screen name="Explore" component={Explore} />
                        <BottomTab.Screen name="Favorite" component={Favorite} />
                    </>
                ) :
                    role == "ag" ? (
                        <>
                            {/* Tab screens for agent  */}
                            <BottomTab.Screen name="AgentHome" component={AgentHome} />
                        </>
                    ) : (
                        <>
                            {/* Tab screens for admin  */}
                            <BottomTab.Screen name="AdminHome" component={AgentHome} />
                        </>
                    )}
                <BottomTab.Screen name="Profile" component={Profile} />



                {/* Add more screens as needed */}
            </BottomTab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({})