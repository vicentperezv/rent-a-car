import React from "react";
import useCarActions from '../../../hooks/useCarForSale'
import trash from  '../../../assets/trash.svg'
import { Button ,Table, TBody, Td,Th, THead, Tr } from "./RegisterTableStyles";
import { Section } from "../../../styles/GlobalComponents";
const RegisterTable =({cars}) =>{
    const { removeCar } = useCarActions();
    return (
        <Section>
            <Table>
            <THead>
                <Tr>
                    <Th>Nombre Vendedor</Th>
                    <Th>Rut Vendedor</Th>
                    <Th>Patente Vehiculo</Th>
                    <Th>Marca Vehiculo</Th>
                    <Th>Modelo Vehiculo</Th>
                    <Th>Precio Vehiculo</Th>
                    <Th>Eliminar</Th>
                </Tr>
            </THead>
            <TBody>
                {cars.map((car)=>(
                    <Tr key={car.id}>
                        <Td>{car.sellerName}</Td>
                        <Td>{car.sellerRUT}</Td>
                        <Td>{car.licensePlate}</Td>
                        <Td>{car.carBrand}</Td>
                        <Td>{car.carModel}</Td>
                        <Td>{car.price}</Td>
                        <Td>
                            <Button onClick={() => removeCar(car.id)} type='button'>
                                <img src={trash}/>
                            </Button>
                        </Td>

                    </Tr>
                ))}
            </TBody>
        </Table>
        </Section>
        
    )
}

export default RegisterTable;