import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherAppDetails({getInfo}){

    let IMGRainy_URL1="https://i.pinimg.com/originals/96/25/22/962522462061ca63932bfe085b4fa817.jpg";
    let IMGCold_URL2="https://tse4.mm.bing.net/th?id=OIP.debaDUCrSwMCZ-r2rP42BQHaE7&pid=Api&P=0&h=220";
    let IMGSun_URL3="https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&P=0&h=220";

    return (
        <>
        <div className="mt-5" style={{margin:"0 auto", width:"350px"}}>
        <Card style={{height:"380px"}}>
            <CardMedia
                sx={{ height: 120 }}
                image={getInfo.Humidity>80 ? IMGRainy_URL1 : getInfo.Temp>15 ? IMGSun_URL3 : IMGCold_URL2}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {getInfo.City}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature : {getInfo.Temp}&deg;C</p>
                    <p>Max Temp : {getInfo.Temp_Max}&deg;C</p>
                    <p>Min Temp : {getInfo.Temp_Min}&deg;C</p>
                    <p>Humidity : {getInfo.Humidity}&deg;C</p>
                    <p>
                        The Weather Can be described as <i>{getInfo.Description}</i> and feels like {getInfo.Feels_like}&deg;C
                    </p>
                </Typography>
            </CardContent>
            </Card>
        </div>
        </>
    )
}