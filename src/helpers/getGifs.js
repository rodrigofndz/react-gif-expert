export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4n9RA6O9HC2JsiLzjJ4OWjbxpwHR2g0C&q=${category}&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}