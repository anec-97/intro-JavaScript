const getImange = async() => {
    try {
        const apiKey = '1ODg0K7lcER2bQFFhvhWYFHfM7xcqBld';

    const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    } catch (error) {
        console.error(error);
    }

}

getImange();

    // const apiKey = '1ODg0K7lcER2bQFFhvhWYFHfM7xcqBld';

    // const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
    // peticion
    //     .then(resp => resp.json())
    //     .then( ({data})  => {
    //         const { url } = data.images.original;
    //         const img = document.createElement('img');
    //         img.src = url;
    //         document.body.append(img);
    //     })
    //     .catch(console.warn);