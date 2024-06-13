import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
// import squadReducer from './squadSlice';
// import teamReducer from './teamSlice';
// import matchReducer from './matchSlice';
// import scoreReducer from './scoreSlice';
// import analyticsReducer from './analyticsSlice';

const store = configureStore({
    reducer: {
        // auth: authReducer,
        // squad: squadReducer,
        // team: teamReducer,
        // match: matchReducer,
        // score: scoreReducer,
        // analytics: analyticsReducer,
    },
});

export default store;
