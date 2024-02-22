import React from 'react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store'; // Asegúrese de que la ruta de importación sea correcta
import App from '../src/App';

describe('<App/>', () => {
  test('add new Car for Sale', async() => {
    const user = userEvent.setup()
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    
    const form = screen.getByRole('form');
    expect(form).toBeDefined();
    
    const inputs = form.querySelectorAll('input');
    //Prueba nameInput
    const nameInput = inputs[0];
    expect(nameInput).toBeDefined();
    await user.type(nameInput, 'Alice Bellamy')
    
    //Prueba rutInput
    const rutInput = inputs[1];
    expect(rutInput).toBeDefined();
    await user.type(rutInput,'11111111-1')
    
    //Prueba patenteInput
    const patenteInput = inputs[2];
    expect(patenteInput).toBeDefined();
    await user.type(patenteInput, 'AADDCC55')
    
    //Prueba priceInput
    const priceInput = inputs[3];
    expect(priceInput).toBeDefined();
    await user.type(priceInput, '$123.456.789')
    
    //Prueba selects
    const selects = form.querySelectorAll('select');
    const brandSelect = selects[0];
    await user.selectOptions(brandSelect,'Toyota');
    const modelsSelect = selects[1];
    await user.selectOptions(modelsSelect, 'Corolla');
    
    //Prueba envio
    const button = form.querySelector('button');
    expect(button).toBeDefined();
    await user.click(button)
    
    expect(screen.getByText('Se envió correctamente')).toBeDefined();
    
  });
});