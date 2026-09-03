const WeatherDetails = ({ weather }) => {
    const { location, temperature, condition } = weather;
    return (
        <section>
            <h2>Weather Details</h2>

            <p>Location: {location}</p>
            <p>Temperature: {temperature}</p>
            <p>Condition: {condition}</p>
        </section>
    );
};

export default WeatherDetails;