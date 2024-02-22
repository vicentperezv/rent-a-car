import React from "react";
import RegisterTable from "./RegisterTable";
import RegisterCouter from "./RegisterCouter";
import TitleTextBlock from "../../components/TitleTextBlock";
import { useAppSelector } from '../../hooks/store'

const CarListView=()=>{
    const cars = useAppSelector((state) => state.cars.forSale);
    
    return(
        <>
            <TitleTextBlock title="Lista formulario">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</TitleTextBlock>
            <RegisterTable cars={cars}/>
            {

               cars.length > 0? <RegisterCouter carListSize={cars.length}/>:null
            }

        </>
    )
}

export default CarListView;