import React, { useState } from "react";
import Map from "./components/Map"
import CountrySearch from "./components/CountryDetails";
import { Grid } from "@material-ui/core";

const App = () => {
 


  return (
    <Grid container>
      <Grid item xs={12} sm={8} md={8} lg={9}>
        <Map />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={3}>
         <CountrySearch />
      </Grid>
    </Grid>
  );
};

export default App;

