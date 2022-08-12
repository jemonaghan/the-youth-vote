import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Age from "../components/vote-form/Age";


test('render age input field', () => {
    render(<Age />);

    const inputAge = screen.getByTestId("age-input");
    expect(inputAge).toBeInTheDocument();
    expect(inputAge).toHaveAttribute("type", "number");

});