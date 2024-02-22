import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    width: 80%;
    margin: 5rem;
    @media ${(props) => props.theme.breakpoints.sm} {
        display: flex;

        width: 100%;
        flex-direction: column;
        margin: 0 auto;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        display: flex;
        
        flex-direction: column;
        margin: 0 auto;

    }
    
    `


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
export const Button =styled.button`
display: flex;
width: 140px;
justify-content: center;
align-items: center;
border-radius: 100px;
padding: 12px 16px;
align-items: center;
color:#fff;
border: 1px solid ${(props) =>props.theme.colors.primary1};
cursor: pointer;
background: ${(props) =>props.theme.colors.primary1};
&:hover {
    background: ${(props) =>props.theme.colors.accent1};
    
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 auto;
}
`;

export const ResultMessage = styled.p`
  color: ${(props) => (props.$isSuccess ? 'green' : 'red')};
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end
`;