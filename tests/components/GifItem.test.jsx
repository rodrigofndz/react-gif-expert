import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas <GifItem />', () => { 

    const image ={
        id: 1,
        title: 'Haikyuu',
        url: 'https://uwww.google.com/algo.jpg'
    }

    test('should match snapshot', () => { 
        const {container} = render(<GifItem key={image.id} {...image}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the URL and ALT indicated', () => { 
        render(<GifItem key={image.id} {...image}/>);

        // expect(screen.getByRole('img').src).toBe(image.url);
        // expect(screen.getByRole('img').alt).toBe(image.title);
        
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(image.url);
        expect(alt).toBe(image.title);
    });

    test('should show title in the component', () => { 
        render(<GifItem key={image.id} {...image}/>);
        expect(screen.getByText(image.title)).toBeTruthy();
    });
});