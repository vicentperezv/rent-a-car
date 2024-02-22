import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  border-bottom:1px solid #ccc;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Div = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 3 / 2 / 6;
  }
`;
export const Span = styled.span`
  font-size: 1.45rem;    
  color: ${(props) => props.theme.colors.primary1};
  font-weight: bold;
`;
export const Button = styled.div`

  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  border-radius: 24px;
  align-content:center;
  cursor:pointer;
  &:hover {
    background-color: lightblue;
  }
`