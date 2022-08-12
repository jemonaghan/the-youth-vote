import React from 'react'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import SchoolResults from "../components/sign-up-form/SchoolResults"


test('should display a loading text', () => {

    render(<SchoolResults />);

    const loadingMessage = screen.getByText(/Loading/i);
    expect(loadingMessage).toBeInTheDocument();
})