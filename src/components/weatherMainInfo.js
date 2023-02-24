
import '../stylesheets/weatherMain.css';

function WeatherMainInfo( {weather} ){
    return(
        <div className='infoContainer'>
            <div className='locationName'>
            {weather?.location.name}
            </div>
            <div className='locationCountry'>
            {weather?.location.country}
            </div>
            <div>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} width="50" alt={weather?.current.condition.text}/>
                </div>
                <div>
                    <div>
                        {weather?.current.condition.text}
                    </div>
                    <div>
                        {weather?.current.temp_c}°
                    </div>
                </div>
            </div>
            <iframe 
                title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112289.96033796752!2d${weather?.location.lon}686!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1671421148864!5m2!1ses-419!2spe`} 
                width="600" 
                height="450" 
                style={{border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default WeatherMainInfo;