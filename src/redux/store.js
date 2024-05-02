
import { configureStore } from "@reduxjs/toolkit";
import JobReducer from './jobSlice';

export const store=configureStore({
    reducer:{
        JobReducer:JobReducer
    }
})

