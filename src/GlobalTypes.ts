import { Dimensions as deviceDimension, ViewToken } from "react-native"
import Animated from "react-native-reanimated";


interface HouseItem {
    id: number;
    image: string; // URL or path to the image
    price: number;
    location: string;
    houseName: string;
};

export type RootParamList={
    OnBoarding:undefined, 
    Login:undefined, 
    Register:undefined, 
    BottomTab:{role:string},
    UserHome:undefined,
    Explore:undefined,
    Favorite:undefined,
    AgentHome:undefined,
    AdminHome:undefined,

    // Re-Usable
    Profile:undefined,
    Notification:undefined,
    SingleHome:{item:HouseItem},
};
export type Dimensions={
    width:number,
    height:number,
};


export type ViewableItem=Animated.SharedValue<ViewToken[]>;

export type NotificationItem={
    id:number,
    title:string,
    subtitle:string,
}
export const windowDimension:Dimensions={
    width:deviceDimension.get("window").width,
    height:deviceDimension.get("window").height,
};
