import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
  forSale:[],
  brands: [
    { id: 'brand1', name: 'Toyota', models: ['Corolla', 'Camry'] },
    { id: 'brand2', name: 'Ford', models: ['Mustang', 'F-150'] },
    { id: 'brand3', name: 'Honda', models: ['Civic', 'Accord'] },
    { id: 'brand4', name: 'Chevrolet', models: ['Camaro', 'Silverado'] },
    { id: 'brand5', name: 'BMW', models: ['Serie 3', 'Serie 5'] },
    
  ],
};
const initialState = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).cars : DEFAULT_STATE;
})();



const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCarForSale:(state, action)=>{
        const id = crypto.randomUUID()
        state.forSale.push({id,...action.payload})
        if (state.forSale.length > 10) {
          state.forSale.shift(); 
        }
    },
    deleteCarForSaleById: (state, action) => {
			const id = action.payload;
			return { ...state, forSale: state.forSale.filter((car) => car.id !== id)};
		},
  },
});

export default carsSlice.reducer;
export const { addCarForSale, deleteCarForSaleById } = carsSlice.actions