import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    test('should change value in the InputBox', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'One Piece'}});
        expect(input.value).toBe('One Piece');

    });

    test('should call onNewCAtegory if input has a value', () => {
        const inputValue = 'Saitama';
        //TODO:

        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
    })
});