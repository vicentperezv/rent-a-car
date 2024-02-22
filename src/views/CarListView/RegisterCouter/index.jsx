import React from "react";
import { Text } from "./RegisterCouterStyles";

const RegisterCouter = ({carListSize})=>{
    return(
        <Text>Mostrando registros del 1 al {carListSize} de un total de {carListSize} registros.</Text>
    )
};

export default RegisterCouter;