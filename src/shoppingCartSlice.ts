
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShoppingCartState {
    items: {[key: string]: number}
}

const initialState: ShoppingCartState = {
    items: {}
}

interface ItemNameAndQuantity {
    itemName: string
    quantity: number
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemNameAndQuantity>) => {
            const {itemName, quantity} = action.payload
            state.items[itemName] = quantity
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            const itemName = action.payload
            delete state.items[itemName]
        },
    }
})

export const { addItem, deleteItem } = shoppingCartSlice.actions