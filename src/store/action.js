import { INCREMENT, DECREMENT } from "./action.types";
export const add = (value) => ({ type: INCREMENT, payload: value });
export const sub = (value) => ({ type: DECREMENT, payload: value });
