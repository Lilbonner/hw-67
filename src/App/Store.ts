import { configureStore, PayloadAction } from "@reduxjs/toolkit";

export const SetPin = 'SetPin';
export const setPin = (digit: string) => {
    return { type: SetPin, payload: digit };
};
export const ClearPin = 'ClearPin';

export const clearPin = () => {
    return { type: ClearPin };
};

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
