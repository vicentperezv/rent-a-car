import React, {useState} from "react";
import { Button, Container, ResultMessage, ButtonContainer } from "./FormStyles";
import { Section } from "../../../styles/GlobalComponents";
import Input from "../../../components/Input"
import Select from "../../../components/Select";
import { useAppSelector } from '../../../hooks/store';
import useCarActions from "../../../hooks/useCarForSale";
import { rutValidator, formatRut, formatCurrency } from "../../../services";
const CarForm = ()=> {
  const { addCar } = useCarActions()
  const brands = useAppSelector((state) => state.cars.brands);
  const carsForSale = useAppSelector((state) => state.cars.forSale);

  const [models, setModels] = useState([]);
  const [result, setResult] = useState(null)
  
  const handleBrandChange = (e) => {
    const brandId = e.target.value;
    const brand = brands.find((b) => b.name === brandId);
    setModels(brand ? brand.models : []);
  };
  const handleRutChange =(e)=>{
    e.target.value = formatRut(e.target.value)
  }
  const handlePriceChange =(e)=>{
    e.target.value = formatCurrency(e.target.value)
  }
  const handleSubmit = (event) => {
		event.preventDefault()

		setResult(null)

		const form = event.target
		const formData = new FormData(form)

		const sellerName = formData.get("sellerName")
		const sellerRUT = formData.get("sellerRUT")
		const licensePlate = formData.get("licensePlate")
		const carBrand = formData.get("carBrand")
		const carModel = formData.get("carModel")
		const price = formData.get("price")
    
		if (!sellerName || !sellerRUT || !licensePlate || !carBrand || !carModel || !price ) {
      return setResult("Debe Rellenar todos los campos")
      
		}
    if(!rutValidator(sellerRUT)){
      return setResult("Debe ingresar un Rut Valido")
    }
    const isPlateRegistered = carsForSale.some(car => car.licensePlate === licensePlate);
    if (isPlateRegistered){      
        return setResult("Esta placa patente ya está registrada.");
      
    }
    if (price =="$0"){
      return setResult("El precio debe ser mayor a $0");

    }
		addCar({ sellerName, sellerRUT, licensePlate, carBrand, carModel, price })
		setResult("Se envió correctamente")
		form.reset()
	}
  return (
    <>
      <Section>
      {result && (
        <ResultMessage $isSuccess={result === 'Se envió correctamente'}>
          {result}
        </ResultMessage>
      )}
      <form onSubmit={handleSubmit} className="" aria-label="Agrega nuevo auto a la venta">
        <b>Datos del vendedor:</b>
        <Container>
        <Input label="Nombre Vendedor" type="text" name="sellerName" placeholder="Juan González"/>
        <Input label="RUT Vendedor" onChange={handleRutChange} maxLength={10} type="text" name="sellerRUT" placeholder="12345678-9"/>
        </Container>
        <hr />
        <br/>
        <b>Datos del Vehiculo: </b>
        <Container>


          <Input label="Patente Vehiculo" type="text" name="licensePlate" placeholder="ABCD12"/>

          <Select label="Marca Vehiculo" name="carBrand" onChange={handleBrandChange}>
            <option value="">-SELECCIONE MARCA-</option>     
            {brands.map((brand)=>
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            )}       
          </Select>
          <Select label="Modelo Vehiculo" name="carModel">
            <option value="">-SELECCIONE MODELO-</option>
            {models.map((model, index)=>
              <option key={index} value={model}>{model}</option>
              )}   
          </Select>
          <Input label="Precio"type="text" onChange={handlePriceChange} name="price" placeholder="$1.234.567"/>
        </Container>
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </form>
      </Section>
    </>
  );
};

export default CarForm
