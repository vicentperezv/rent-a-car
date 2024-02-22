import React from "react";
import { Container } from "./LayoutStyle";
const Layout =({children})=>{
    return(
        <>
            <Container>
                <main>{children}</main>
            </Container>
        </>
    )
}

export default Layout