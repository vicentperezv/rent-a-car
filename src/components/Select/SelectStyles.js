import styled from "styled-components";

export const Label = styled.label``;
export const Select = styled.select`
border-radius: 8px;
padding: 8px;
align-items: center;
margin-right: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 auto;
}

`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        margin: 0 auto;
        margin-top: 1.5rem;        
        margin-bottom: 1.5rem;

    }
`;