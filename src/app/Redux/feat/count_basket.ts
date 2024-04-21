import {createSlice} from '@reduxjs/toolkit'

// import type { PayloadAction } from '@reduxjs/toolkit'

export interface countBasket {
    value: number
}

const initialState: countBasket = {
    value: 0,
}

export const countBasket = createSlice({
    name: 'countBasket',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const {increment, decrement} = countBasket.actions

export default countBasket.reducer