import { render } from "@testing-library/react";
import { GifItem } from "../src/components/GifItem";

describe('Pruebas <GifItem />', () => { 

    const image ={
        id: 1,
        title: 'Prueba',
        url: 'www.google.com'
    }

    test('should match snapshot', () => { 
        const {container} = render(<GifItem key={image.id} {...image}/>);
        expect(container).toMatchSnapshot();
     });
 });