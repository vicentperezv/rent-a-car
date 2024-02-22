import { configureStore } from '@reduxjs/toolkit'
import carReducer from './cars/carsSlices'

const persistanceLocalStorageMiddleware = store => next => action => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    cars : carReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
})

