import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import ContinueButton from "../components/buttons/ContinueButton";

test("Ensure the button shows the correct message", () => {
    render(<ContinueButton buttonLabel="Test Label"/>);
    const buttonElement = screen.getByText(/Test Label/i);
    expect(buttonElement).toBeInTheDocument();
});