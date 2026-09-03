const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
    const queryStringURL = `${BASE_URL}&q=${city}`;

    try {

        const jsonResponse = await fetch(queryStringURL);
        const data = await jsonResponse.json();

        return data;
    }
    catch (err) {
        console.log(err);
    }
}

show("Manama")


export {
    show
}   