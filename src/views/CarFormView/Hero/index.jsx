import React from "react";
import Illustration from "../../../assets/Illustration.svg"
import { Section, SectionTitle } from "../../../styles/GlobalComponents";
import { Container,Img } from "./HeroStyles";
export default function Hero (){
    return(
        <>  
        <Section>
            <Container>
            <SectionTitle>Formulario de Prueba</SectionTitle>
            <Img src={Illustration}/>
            </Container>
        </Section>
        </>
    )
}