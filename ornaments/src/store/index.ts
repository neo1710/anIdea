import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./slices/conversationReducer"

export const store = configureStore({
    reducer: {
        products: productSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>;