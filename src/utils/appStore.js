import { useReducer } from "react";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
    reducer: {
        user: useReducer
    }
});

export default appStore;