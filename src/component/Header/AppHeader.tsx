import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../GlobalTypes';


interface AppHeaderProps {
  screenName: string;
  backIcon?: boolean;
  RenderIcon?: () => JSX.Element | null;
  absolute?: boolean;
};

export default function AppHeader({ screenName, backIcon, RenderIcon, absolute }: AppHeaderProps) {
  console.log(absolute, 'absolute');



  let theme = useTheme();
  let navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const handleBackPress = () => {
    navigation.goBack();
  }
  let absoluteStyle: StyleProp<ViewStyle> = absolute == true ? { position: "absolute", top: 0, zIndex: 10, left: 0, right: 0, backgroundColor: 'transparent', } : { backgroundColor: theme.colors.background, }

  return (
    <>
      <Appbar.Header style={[absoluteStyle]}>
        {backIcon == false ? (
          <></>
        ) : (
          <Appbar.BackAction color={absolute ? theme.colors.secondary : ""} style={{ backgroundColor: absolute ? theme.colors.background : '', }} onPress={handleBackPress} />
        )}

        <Appbar.Content title={screenName}
          titleStyle={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: theme.colors.lightBlue,
            left: !backIcon ? 11 : 0
          }} />

        {RenderIcon && RenderIcon()}
      </Appbar.Header>
    </>
  )
}

const styles = StyleSheet.create({})