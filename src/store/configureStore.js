import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import requests from "./api/requests";
import reducer from './reducer'

export default function ConfigureStore(){
    return configureStore(
        {
            reducer,
            middleware: [
                ...getDefaultMiddleware(),
                requests
            ]
        }
    )
}