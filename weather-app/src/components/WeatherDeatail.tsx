import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//weather detail interface
export interface WeatherState {
  City?: string;
  State?: string;
  country?: string;
  Latitude?: string;
  Longitude?: string;
  Humidity?: string;
  Temperature?: string;
  WindDirection?: string;
  windSpeed?: string;
}


export interface WeatherProps {
  readonly weather: WeatherState;
}

//weather detail card
const WeatherDetail: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Card>
            <CardContent>
              <Typography>
                <b>City : </b> {weather.City}
              </Typography>
              <Typography>
                <b>State :</b>
                {weather.State}
              </Typography>
              <Typography>
                <b>Country :</b>
                {weather.country}
              </Typography>
              <Typography>
                <b>Humidity :</b>
                {weather.Humidity}
              </Typography>
              <Typography>
                <b>Temperature :</b>
                {weather.Temperature}
              </Typography>
              <Typography>
                <b>WindDirection :</b>
                {weather.WindDirection}
              </Typography>
              <Typography>
                <b>windSpeed :</b>
                {weather.windSpeed}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherDetail;
