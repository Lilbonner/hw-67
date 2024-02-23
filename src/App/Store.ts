import { configureStore, PayloadAction } from "@reduxjs/toolkit";

const SetPin = 'SetPin';
const ClearPin = 'ClearPin';

const pinReducer = (state = '', action: PayloadAction<string>) => {
    if (action.type === SetPin) {
        return state.length < 4 ? state + action.payload : state;
    } else if (action.type === ClearPin){
        return '';
    } else {
        return state;
    }
}

export const store = configureStore({
    reducer: pinReducer
});
