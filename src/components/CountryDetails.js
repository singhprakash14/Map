import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, makeStyles } from "@material-ui/core";

const CountryDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  flagImage: {
    maxWidth: "50px",
    height: "20px",
    marginTop: theme.spacing(2),
  },
}));

  const classes = useStyles();



  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      
      return;
    }

    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${searchQuery}`
      );

      if (response.data.length > 0) {
        const countryData = response.data[0];
        setSelectedCountry(countryData);
      } else {
       
        setSelectedCountry(null);
      }
    } catch (error) {
     
      console.log(error);
      setSelectedCountry(null);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a country name"
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {selectedCountry ? (
        <Box className={classes.boxContainer}>
          <Typography variant="h2">{selectedCountry.name}</Typography>
          <img
            size="20px"
            src={selectedCountry.flag}
            className={classes.flagImage}
            alt="Country Flag"
          />
          <Typography variant="body1">
            Capital: {selectedCountry.capital}
          </Typography>
          <Typography variant="body1">
            Population: {selectedCountry.population}
          </Typography>
          <Typography variant="body1">
            Area: {selectedCountry.area} square kilometers
          </Typography>
          <Typography variant="body1">
            Languages:{" "}
            {selectedCountry.languages.map((lang) => lang.name).join(", ")}
          </Typography>
          <Typography variant="body1">
            Currencies:{" "}
            {selectedCountry.currencies.map((curr) => curr.name).join(", ")}
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1">No country selected</Typography>
      )}
    </div>
  );
};

export default CountryDetails;
