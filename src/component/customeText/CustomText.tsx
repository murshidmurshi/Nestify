import { StyleProp, TextStyle} from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper';

interface CustomTextProps{
  style?:StyleProp<TextStyle>,
  children:React.ReactNode;
  className?:string;
}

const CustomText:React.FC<CustomTextProps>=({style,className,children,...props})=>{
  let theme=useTheme();
  return <Text style={[{color:theme.colors.lightBlue},style,]} {...props}>{children}</Text>
}

export default CustomText;
