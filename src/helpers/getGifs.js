export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=djHo0Uh7X8si3S1W6W9LcmngkAhbmxQ8&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs;
}