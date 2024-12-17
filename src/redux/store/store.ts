import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../slices/theme";
import NormalSlic from "../slices/normal";

const store = configureStore({
    reducer: {
        //Define slice here
        theme:ThemeSlice,
        normal:NormalSlic,
    }
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export default store;