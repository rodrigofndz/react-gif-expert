import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests in <GifExpertApp />', () => {
    test('Should render the app correctly', () => {
        const {container} = render(<GifExpertApp />);

        // Assert that the app renders without any errors
        expect(container).toMatchSnapshot();

        // Assert that the app initially has no gifs
        expect(screen.queryByRole('img')).not.toBe();
    });
    
    test('Should add a new category when the form is submitted', () => {
        render(<GifExpertApp />);
        
        // Get the input element and submit button
        const input = screen.getByRole('textbox');
        
        // Type a new category name in the input
        const newCategory = 'Naruto';
        fireEvent.change(input, { target: { value: newCategory } });
        
        // Submit the form
        fireEvent.submit(input);
        
        // Assert that the new category is added to the app
        expect(screen.getByText(newCategory)).toBeTruthy();
        
        // Assert that the input is cleared after submitting
        expect(input.value).toBe('');
    });
});