import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../GlobalTypes';


interface AppHeaderProps {
  screenName: string;
  backIcon?: boolean;
  RenderIcon?: () => JSX.Element | null;
};

export default function AppHeader({ screenName, backIcon, RenderIcon }: AppHeaderProps) {
  let theme = useTheme();
  let navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <>
      <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
        {backIcon == false ? (
          <></>
        ) : (
          <Appbar.BackAction onPress={handleBackPress} />
        )}

        <Appbar.Content title={screenName}
          titleStyle={{
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
            color: theme.colors.lightBlue,
            left: !backIcon ? 30 : 0
          }} />

        {RenderIcon && RenderIcon()}
      </Appbar.Header>
    </>
  )
}

const styles = StyleSheet.create({})