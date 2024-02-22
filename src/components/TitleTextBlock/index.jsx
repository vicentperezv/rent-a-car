import React from "react";
import { Text, Title } from "./TitleTextBlockStyles";
import { Section } from "../../styles/GlobalComponents";
const TitleTextBlock = ({title,children})=>{
    return(
        <Section>
            <Title>{title}</Title>
            <Text>{children}</Text>
        </Section>
    )
}


export default TitleTextBlock;
