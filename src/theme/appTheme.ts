import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
} from 'react-native-paper';


// Define custom light theme
export const lightTheme = {
  ...DefaultTheme,
  custom: 'lightTheme',
  colors: {
    ...DefaultTheme.colors,
    background: '#f2f2f2',
    primary: "#006FFF",
    secondary: "#246BFD",  //also for icons
    // #D1E0FE app  light color of 
    inversePrimary: "#D1E0FE",
    scrim: "rgb(96, 95, 95)",
    shadow: "rgba(128, 128, 128, 0.303)",  // Use `as any` as a last resort
    onPrimary:"#fbf9f9",
    onPrimaryContainer:"#eef2fc",

  },
  roundness: 14,
};

// Define custom dark theme
export const darkTheme = {
  ...DarkTheme,
  custom: 'darkTheme',
  colors: {
    ...DarkTheme.colors,
    background: 'rgb(23, 23, 23)',
    primary: "#006FFF",
    secondary: "#246BFD",
    inversePrimary: "#D1E0FE",
    scrim: "rgb(96, 95, 95)",
    shadow: "rgba(128, 128, 128, 0.303)", // Your custom transparent grey
    onPrimary:"#1c1b1b",
    onPrimaryContainer:"#252628",


  },
  roundness: 14,
};
