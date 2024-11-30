import { Dimensions as deviceDimension } from "react-native"

export type RootParamList={
    OnBoarding:undefined, 
    Login:undefined, 
    Register:undefined, 
    BottomTab:{role:string},
    UserHome:undefined,
    Explore:undefined,
    BookMark:undefined,
    AgentHome:undefined,
    AdminHome:undefined,

    Profile:undefined,
};
export type Dimensions={
    width:number,
    height:number,
};

export const windowDimension:Dimensions={
    width:deviceDimension.get("window").width,
    height:deviceDimension.get("window").height,
};


