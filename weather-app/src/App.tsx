import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WeatherDetail, { WeatherState } from "./components/WeatherDeatail";
import PopUp from "./common/PopoUp";

// weather data component
const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherState>({});
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  useEffect(() => {
    //getting current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  //fetching weather data
  const getData = (str?: string) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=d17430ea48dc45f4b58201510230707&${str}`
    )
      .then((data: any) => {
        return data.json();
      })
      .then((data: any) => {
        //gathering weather details
        setWeather({
          City: data.location.name,
          State: data.location.region,
          country: data.location.country,
          Humidity: data.current.humidity,
          Temperature: data.current.temp_c,
          WindDirection: data.current.wind_dir,
          windSpeed: data.current.wind_kph,
        });
      })
      .catch((err) => {
        setError("Please enter valid city name");
      });
  };

  //getting latitude longitude
  const showPosition = (position: any) => {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let str = `q=${latitude},${longitude}`;
    getData(str);
  };

  //handeling search
  const handleSearch = () => {
    getData(`q=${search}`);
  };
  return (
    //home page
    <div>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <Typography variant="h4" style={{ textDecoration: "underline" }}>
            ITnow Inc
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 3 }}>
        <Grid
          container
          justifyContent="space-between"
          xs={12}
          alignItems="center"
        >
          {/* weather details section */}
          <Grid item>
            <h1>Weather Details</h1>
          </Grid>

          {/* search input */}
          <Grid container item alignItems={"center"} xs={3.1}>
            <Grid item>
              <TextField
                value={search}
                placeholder="Search by city"
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setSearch(e.target.value);
                }}
              />
            </Grid>
            {/* search button */}
            <Grid item>
              <Button
                variant="contained"
                onClick={handleSearch}
                style={{ height: "3.5rem" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* weather detail component */}
      <WeatherDetail weather={weather} />

      {/* handelling popup */}
      <PopUp error={error} onClose={() => setError("")} />
    </div>
  );
};

export default App;
