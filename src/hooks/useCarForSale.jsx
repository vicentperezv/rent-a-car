import { addCarForSale, deleteCarForSaleById } from "../store/cars/carsSlices";
import { useAppDispatch } from "./store";

const useCarActions = () => {
	const dispatch = useAppDispatch();

	const addCar = ({ sellerName, sellerRUT, licensePlate, carBrand, carModel, price }) => {
		dispatch(addCarForSale({ sellerName, sellerRUT, licensePlate, carBrand, carModel, price }))
	}

	const removeCar = (id) => {
		dispatch(deleteCarForSaleById(id));
	};

	return { addCar, removeCar };
};
export default useCarActions;