import React from "react";
import CarForm from "./CarForm";
import Hero from "./Hero";
import TitleTextBlock from "../../components/TitleTextBlock";
const CarFormView =()=>{
    return(
        <>
            <Hero/>
            <TitleTextBlock title="Nuevo formulario">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</TitleTextBlock>
            <CarForm/>
        </>
    )
}
export default CarFormView