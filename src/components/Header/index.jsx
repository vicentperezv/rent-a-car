import React from 'react';
import { Container, Div, Button, Span } from './HeaderStyles';

const Header = ({ activeComponent, setActiveComponent }) => (
  <Container>
    <Div>
      <Button onClick={() => setActiveComponent('formulario')}>
        <Span>Formulario</Span>
      </Button>
      <Button onClick={() => setActiveComponent('lista')}>
        <Span>Lista formulario</Span>
      </Button>
    </Div>
  </Container>
);

export default Header;
