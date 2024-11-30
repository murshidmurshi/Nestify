import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, TextInput, useTheme } from 'react-native-paper'
import LogoIcon from "../../../assets/Image/logo.svg"
import CustomText from '../../component/customeText/CustomText';
import { fonts } from '../../component/customeText/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../../component/Header/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../GlobalTypes';
import { showToast } from '../../utils/Toast';
export default function Register() {
    let theme = useTheme();
    const iconSize = 28;
    const ActiveOpacity = 0.6;
    const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
    const ToLogin = () => navigation.navigate("Login");
    const handleRegister = () => {
        showToast("Something went wrong", "error")
    };

    return (
        <>
            <AppHeader screenName={""} />
            <ScrollView
                className=' flex-1'
                style={{ backgroundColor: theme.colors.background }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

            >
                <View className=' flex-1 p-4 '>
                    {/* About Logo */}
                    <View className='flex-row items-center justify-center my-5' >
                        <LogoIcon width={80} height={80} />
                        <CustomText className='text-3xl' style={{ fontFamily: fonts.Medium, color: theme.colors.primary }}>
                            Nest
                        </CustomText>
                        <CustomText className='text-3xl' style={{ fontFamily: fonts.Medium, }}>
                            ify
                        </CustomText>
                    </View>

                    {/* About inputs and btn */}

                    <View className=' my-3'>
                        {/* Sign in */}
                        <View >
                            <CustomText className='text-2xl' style={{ fontFamily: fonts.SemiBold }}>
                                Sign in
                            </CustomText>
                        </View>

                        {/* Inputs */}
                        {/* UserName */}
                        <View className='mt-4'>
                            <CustomText className='text-sm' style={{ fontFamily: fonts.Medium }}>Username</CustomText>
                            <TextInput
                                mode="outlined"
                                placeholder='User name'
                                className='my-3'
                                contentStyle={{ fontFamily: 'Poppins-Regular', top: 3 }}
                                left={<TextInput.Icon icon={() => <MaterialIcons name="person" size={24} color={theme.colors.onBackground} />} />}
                            />
                        </View>
                        {/* Email Address */}
                        <View >
                            <CustomText className='text-sm' style={{ fontFamily: fonts.Medium }}>Email Address</CustomText>
                            <TextInput
                                mode="outlined"
                                placeholder='Email Address'
                                className='my-2'
                                contentStyle={{ fontFamily: 'Poppins-Regular', top: 3 }}
                                left={<TextInput.Icon icon={() => <MaterialIcons name="mail" size={24} color={theme.colors.onBackground} />} />}
                            />
                        </View>

                        {/* Password */}
                        <View >
                            <CustomText className='text-sm' style={{ fontFamily: fonts.Medium }}>Password</CustomText>
                            <TextInput
                                mode="outlined"
                                placeholder='Password'
                                className='my-3'
                                contentStyle={{ fontFamily: 'Poppins-Regular', top: 3 }}
                                left={<TextInput.Icon icon={() => <MaterialIcons name="key" size={24} color={theme.colors.onBackground} />} />}
                                right={<TextInput.Icon icon={() => <MaterialIcons name="visibility" size={24} color={theme.colors.onBackground} />} />}
                            />
                        </View>



                        {/* Btn */}
                        <View>
                            <TouchableOpacity onPress={handleRegister} activeOpacity={ActiveOpacity} className='p-3 rounded-2xl my-3' style={{ backgroundColor: theme.colors.primary }}>
                                <CustomText className='text-[18px] text-center top-1' style={{ fontFamily: fonts.Regular, color: "#fff" }}>
                                    Sign in
                                </CustomText>
                            </TouchableOpacity>
                        </View>


                        <View className='flex-row gap-1 items-center justify-center'>
                            <CustomText className='text-sm text-center top-1' style={{ fontFamily: fonts.Regular }}>
                                Already have an account ?
                            </CustomText>
                            <TouchableOpacity activeOpacity={ActiveOpacity} onPress={ToLogin}>
                                <CustomText className='text-sm text-center top-1 underline' style={{ fontFamily: fonts.Regular }}>
                                    Sign In
                                </CustomText>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* About alternative ways */}


                    <View className=' my-4'>


                        {/* Continue with */}
                        <View className='flex-row items-center jusify-center'>

                            <LinearGradient
                                colors={[theme.colors.background, theme.colors.secondary,]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                className='flex-1 h-[0.5px]'
                            />
                            <CustomText className='text-1xl text-center px-2' style={{ fontFamily: fonts.Regular }}>
                                Or Continue with
                            </CustomText>

                            <LinearGradient
                                colors={[theme.colors.secondary, theme.colors.background]}

                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                className='flex-1 h-[0.5px]'

                            />

                        </View>


                        {/* logo */}
                        <View className='  flex-row justify-center items-center gap-4 my-0.5'>
                            <Ionicon name="logo-google" size={iconSize} color={theme.colors.scrim} />
                            <Ionicon name="logo-apple" size={iconSize} color={theme.colors.scrim} />
                            <Ionicon name="logo-facebook" size={iconSize} color={theme.colors.scrim} />
                        </View>

                    </View>
                </View>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})