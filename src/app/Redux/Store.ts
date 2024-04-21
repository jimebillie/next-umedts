import { configureStore } from '@reduxjs/toolkit'
import countBasket from "@/app/Redux/feat/count_basket";

export const store = configureStore({
    reducer: {
        countBasket: countBasket,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch